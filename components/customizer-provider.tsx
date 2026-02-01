"use client";

import { redirect } from "next/navigation";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";

import { useExport, type UseExportApi } from "@/hooks/use-export";
import { CustomizeStoreState, useCustomizeStore } from "@/stores/customize-store";
import { useImageStore } from "@/stores/image-store";

interface CustomizerProviderProps {
  children: React.ReactNode;
  initialSettings: CustomizeStoreState;
}

interface CustomizerContextValue extends UseExportApi {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const CustomizerContext = createContext<CustomizerContextValue | undefined>(undefined);

export const CustomizerProvider = ({
  children,
  initialSettings,
}: CustomizerProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const exportApi = useExport(containerRef);

  const images = useImageStore.getState().images;

  if (images.length === 0) {
    redirect("/");
  }

  useEffect(() => {
    useCustomizeStore.getState().resetSettings(initialSettings);
  }, [initialSettings]);

  const api = useMemo(() => ({ containerRef, ...exportApi }), [exportApi]);

  return <CustomizerContext.Provider value={api}>{children}</CustomizerContext.Provider>;
};

export const useCustomizerContext = () => {
  const context = useContext(CustomizerContext);
  if (!context) {
    throw new Error("useCustomizerContext must be used within CustomizerProvider");
  }
  return context;
};
