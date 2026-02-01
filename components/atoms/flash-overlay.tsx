"use client";

import { cn } from "@/lib/utils";
import { useCaptureStore } from "@/stores/capture-store";
import { useSettingsStore } from "@/stores/settings-store";

const FlashOverlay = () => {
  const isFlashing = useSettingsStore((s) => s.settings.isFlashing);
  const isCapturing = useCaptureStore((s) => s.status === "capturing");

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-60 bg-white opacity-0 transition-opacity duration-300",
        { "opacity-100": isFlashing && isCapturing },
      )}
    ></div>
  );
};

export { FlashOverlay };
