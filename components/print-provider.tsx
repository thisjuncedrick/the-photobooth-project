"use client";

import { CustomizeStoreState, useCustomizeStore } from "@/stores/customize-store";
import { useImageStore } from "@/stores/image-store";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

interface PrintProviderProps {
  children: React.ReactNode;
  initialSettings: CustomizeStoreState;
}

const PrintProvider = ({ children, initialSettings }: PrintProviderProps) => {
  const hasImage = useImageStore(useShallow((s) => s.images.length <= 0));
  if (hasImage) redirect("/");

  useEffect(() => {
    useCustomizeStore.getState().resetSettings(initialSettings);
  }, [initialSettings]);

  return children;
};

export { PrintProvider };
