"use client";

import { useCamera, UseCameraApi } from "@/hooks/use-camera";
import React, { createContext, useContext, useMemo, useRef } from "react";

interface BoothProviderProps {
  children: React.ReactNode;
}

interface BoothContextValue extends UseCameraApi {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const BoothContext = createContext<BoothContextValue | undefined>(undefined);

export const BoothProvider = ({ children }: BoothProviderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const camera = useCamera(videoRef);

  const api = useMemo(() => ({ videoRef, ...camera }), [camera]);

  return <BoothContext.Provider value={api}>{children}</BoothContext.Provider>;
};

export const useBoothContext = () => {
  const context = useContext(BoothContext);
  if (!context) {
    throw new Error("useBoothContext must be used within BoothProvider");
  }
  return context;
};
