import * as htmlToImage from "html-to-image";
import { useCallback } from "react";

export const usePhotoCapture = (
  videoRef: React.RefObject<HTMLVideoElement | null>,
  studioRef: React.RefObject<HTMLDivElement | null>,
) => {
  const capture = useCallback(async (): Promise<string | null> => {
    const video = videoRef.current;
    const studio = studioRef.current;

    if (!video || !studio || video.videoWidth === 0 || video.videoHeight === 0) {
      return null;
    }

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(video, 0, 0);

    const frameBlob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );
    if (!frameBlob) return null;

    const frameUrl = URL.createObjectURL(frameBlob);

    studio.innerHTML = "";
    studio.style.width = `${video.videoWidth}px`;
    studio.style.height = `${video.videoHeight}px`;
    studio.style.visibility = "visible";

    const img = document.createElement("img");
    img.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
    img.src = frameUrl;
    studio.appendChild(img);

    try {
      await img.decode();

      const dataUrl = await htmlToImage.toPng(studio, {
        skipFonts: true,
        pixelRatio: 1,
        width: video.videoWidth,
        height: video.videoHeight,
      });

      const finalBlob = await (await fetch(dataUrl)).blob();
      return URL.createObjectURL(finalBlob);
    } catch {
      return null;
    } finally {
      URL.revokeObjectURL(frameUrl);
      studio.innerHTML = "";
    }
  }, [videoRef, studioRef]);

  return { capture };
};
