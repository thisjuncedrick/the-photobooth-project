"use client";

import { useCamera, UseCameraApi } from "@/hooks/use-camera";
import { usePhotoCapture } from "@/hooks/use-capture";
import React, { createContext, useContext, useMemo, useRef, useState } from "react";

interface BoothProviderProps {
  children: React.ReactNode;
}

interface BoothContextValue extends UseCameraApi, ReturnType<typeof usePhotoCapture> {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  studioRef: React.RefObject<HTMLDivElement | null>;
  activeFilter: string;
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
}

const BoothContext = createContext<BoothContextValue | undefined>(undefined);

export const BoothProvider = ({ children }: BoothProviderProps) => {
  const [activeFilter, setActiveFilter] = useState("default");

  const videoRef = useRef<HTMLVideoElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);

  const camera = useCamera(videoRef);
  const capture = usePhotoCapture(videoRef, studioRef);

  const api = useMemo(
    () => ({ videoRef, studioRef, ...camera, ...capture, activeFilter, setActiveFilter }),
    [camera, capture],
  );

  return <BoothContext.Provider value={api}>{children}</BoothContext.Provider>;
};

export const useBoothContext = () => {
  const context = useContext(BoothContext);
  if (!context) {
    throw new Error("useBoothContext must be used within BoothProvider");
  }
  return context;
};
