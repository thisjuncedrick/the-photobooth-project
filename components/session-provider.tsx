"use client";

import { useImageStore } from "@/stores/image-store";
import { useSettingsStore } from "@/stores/settings-store";
import type { BoothSettings } from "@/types";
import { useEffect } from "react";

interface SessionProviderProps {
  children: React.ReactNode;
  boothSettings: BoothSettings;
}

const SessionProvider = ({ children, boothSettings }: SessionProviderProps) => {
  useEffect(() => {
    return () => useImageStore.getState().clearImages();
  }, []);

  useEffect(() => {
    useSettingsStore.getState().resetSettings(boothSettings);
  }, [boothSettings]);

  return children;
};

export { SessionProvider };
