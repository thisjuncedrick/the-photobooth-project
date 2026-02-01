// @ts-ignore
import gifshot from "gifshot";
import * as htmlToImage from "html-to-image";
import React from "react";

import { site } from "@/config/site";
import { useImageStore } from "@/stores/image-store";

export interface UseExportApi {
  onDownloadClick: () => void;
  onDownloadGifClick: () => void;
  onPrintClick: () => void;
}

export const useExport = (
  containerRef: React.RefObject<HTMLDivElement | null>,
): UseExportApi => {
  const generatePng = async () => {
    const strip = containerRef.current;
    if (!strip) {
      console.error("Photo Strip  not found");
      return null;
    }

    const finalScale = getComputedStyle(strip).getPropertyValue("--final-scale").trim();
    strip.style.setProperty("--final-scale", "1");

    try {
      const dataUrl = await htmlToImage.toPng(strip, {
        skipFonts: true,
        pixelRatio: 1,
      });

      return dataUrl;
    } finally {
      strip.style.setProperty("--final-scale", finalScale);
    }
  };

  const downloadFile = (dataUrl: string, extension: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${site.name.toUpperCase().replaceAll(" ", "_")}_${new Date().toISOString().slice(0, 19)}.${extension}`;
    link.click();
  };

  const onDownloadClick = async () => {
    try {
      const dataUrl = await generatePng();
      if (dataUrl) {
        downloadFile(dataUrl, "png");
      }
    } catch (err) {
      console.error("Download failed:", err);
      alert("Failed to download the image. Please try again.");
    }
  };

  const onDownloadGifClick = async () => {
    const images = useImageStore.getState().images;
    if (images.length === 0) return;

    const firstImg = await new Promise<HTMLImageElement>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.src = images[0];
    });

    gifshot.createGIF(
      {
        images,
        gifWidth: firstImg.naturalWidth,
        gifHeight: firstImg.naturalHeight,
        interval: 0.5,
        numWorkers: 2,
        imagePlacement: "cover",
      },
      (obj: any) => {
        if (!obj.error) {
          downloadFile(obj.image, "gif");
        } else {
          console.error("GIF creation failed:", obj.error);
          alert("Failed to create GIF. Try with fewer or smaller images.");
        }
      },
    );
  };

  const onPrintClick = async () => {
    try {
      const dataUrl = await generatePng();
      if (!dataUrl) return;

      const printWindow = window.open("", "_blank");
      if (!printWindow) {
        alert("Please allow popups to print.");
        return;
      }

      const style = printWindow.document.createElement("style");
      const img = printWindow.document.createElement("img");

      style.textContent = `
        @page { margin: 0; size: auto; }
        html, body { 
          margin: 0; padding: 0; width: 100%; height: 100%;
          display: flex; justify-content: center; align-items: center; 
          background-color: white; overflow: hidden;
        }
        img { max-width: 95%; max-height: 95%; object-fit: contain; display: block; margin: auto; }
      `;

      img.onload = () => {
        printWindow.focus();
        printWindow.print();
        printWindow.onafterprint = () => printWindow.close();
      };

      img.src = dataUrl;
      printWindow.document.head.appendChild(style);
      printWindow.document.body.appendChild(img);
    } catch (err) {
      console.error("Print error:", err);
      alert("Something went wrong preparing the print.");
    }
  };

  return {
    onDownloadClick,
    onDownloadGifClick,
    onPrintClick,
  };
};
