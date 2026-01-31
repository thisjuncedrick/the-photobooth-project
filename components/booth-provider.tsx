"use client";

import React, { createContext, useContext, useMemo, useRef } from "react";

interface BoothProviderProps {
  children: React.ReactNode;
}

interface BoothContextValue {
  videoRef: React.RefObject<HTMLVideoElement | null>;
}

const BoothContext = createContext<BoothContextValue | undefined>(undefined);

export const BoothProvider = ({ children }: BoothProviderProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const api = useMemo(() => ({ videoRef }), []);

  return <BoothContext.Provider value={api}>{children}</BoothContext.Provider>;
};

export const useBoothContext = () => {
  const context = useContext(BoothContext);
  if (!context) {
    throw new Error("useBoothContext must be used within BoothProvider");
  }
  return context;
};
