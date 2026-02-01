"use client";

import { useEffect, useState } from "react";

import { StripLayout } from "@/config/options";

export const usePrintPreview = (imageSrc: string | undefined) => {
  const { minW, maxW, minScale, maxScale } = StripLayout;

  const [naturalWidth, setNaturalWidth] = useState<number | null>(null);

  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.src = imageSrc;

    img.onload = () => {
      const cappedWidth = Math.min(
        Math.max(img.naturalWidth, minW),
        Math.min(maxW, 1000),
      );
      setNaturalWidth(cappedWidth);
    };

    img.onerror = () => setNaturalWidth(minW);

    return () => {
      img.src = "";
    };
  }, [imageSrc, minW, maxW]);

  if (naturalWidth === null) {
    return { imgWidth: minW, scaleFactor: minScale.toFixed(2), isCalculating: true };
  }

  const progress = (naturalWidth - minW) / (maxW - minW);
  const rawScale = minScale - progress * (minScale - maxScale);
  const scaleFactor = Math.min(Math.max(rawScale, maxScale), minScale);

  return {
    imgWidth: naturalWidth,
    scaleFactor: scaleFactor.toFixed(2),
    isCalculating: false,
  };
};
