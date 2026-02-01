"use client";

import { useMemo } from "react";
import { useShallow } from "zustand/shallow";

import {
  PhotoStrip,
  PhotoStripBranding,
  PhotoStripImage,
  PhotoStripTitle,
} from "./photostrip";

import { usePrintPreview } from "@/hooks/use-print-preview";
import { getTimestamp } from "@/lib/utils";
import { useCustomizeStore } from "@/stores/customize-store";
import { useImageStore } from "@/stores/image-store";
import { useCustomizerContext } from "../customizer-provider";

const StripHeader = () => {
  const isSupported = useCustomizeStore((s) => s.isSupported);
  if (!isSupported) return null;

  return <PhotoStripBranding />;
};

const FooterTimestamp = () => {
  const hasTimestamp = useCustomizeStore((s) => s.hasTimestamp);
  const timestamp = useMemo(() => getTimestamp(), []);

  if (!hasTimestamp) return null;

  return (
    <div className='strip-timestamp flex flex-col'>
      <time dateTime={timestamp.iso}>
        <span className='block font-mono tabular-nums'>{timestamp.date}</span>
        <span className='sr-only'> at </span>
        <span className='block font-mono tabular-nums opacity-70'>{timestamp.time}</span>
      </time>
    </div>
  );
};

const FooterHeading = () => {
  const { footerText, footerStyle } = useCustomizeStore(
    useShallow((s) => ({ footerText: s.footerText, footerStyle: s.footerStyle })),
  );
  if (!footerText) return null;

  return <PhotoStripTitle text={footerText} style={footerStyle as any} />;
};

const StripFooter = () => (
  <footer className='strip-footer'>
    <FooterHeading />
    <FooterTimestamp />
  </footer>
);

const PhotoGallery = () => {
  const images = useImageStore((s) => s.images);
  const isRounded = useCustomizeStore((s) => s.isRounded);

  return (
    <>
      {images.map((src, i) => (
        <PhotoStripImage
          key={`${src}-${i}`}
          src={src}
          alt={`Capture ${i + 1}`}
          isRounded={isRounded}
          draggable={false}
          crossOrigin='anonymous'
        />
      ))}
    </>
  );
};

const PrintPreviewStrip = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { backgroundColor, isWhiteText } = useCustomizeStore(
    useShallow((s) => ({ backgroundColor: s.color, isWhiteText: s.isWhiteText })),
  );
  const { containerRef } = useCustomizerContext();

  const images = useImageStore((s) => s.images);
  const { imgWidth, scaleFactor, isCalculating } = usePrintPreview(images[0]);

  if (isCalculating) return <p className='animate-pulse'>Generating preview...</p>;

  return (
    <div className='border shadow-2xl' role='img'>
      <PhotoStrip
        style={{
          "--img-width": `${imgWidth}px`,
          "--scale-factor": scaleFactor,
          backgroundColor,
          color: isWhiteText ? "#FFFFFF" : "#000000",
        }}
        ref={containerRef}
      >
        {children}
      </PhotoStrip>
    </div>
  );
};

const PrintPreview = () => {
  return (
    <div className='flex justify-center'>
      <PrintPreviewStrip>
        <StripHeader />
        <PhotoGallery />
        <StripFooter />
      </PrintPreviewStrip>
    </div>
  );
};

export { PrintPreview };
