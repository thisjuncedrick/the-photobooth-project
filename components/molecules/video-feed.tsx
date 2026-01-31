"use client";

import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/stores/settings-store";

const VideoFeed = () => {
  const isMirrored = useSettingsStore((s) => s.settings.isMirrored);

  return (
    <video
      tabIndex={-1}
      className={cn(
        'size-full bg-[url("https://images.unsplash.com/photo-1761839258605-d1b118266ccc?q=80&w=870")] bg-cover bg-center object-cover object-center transition-transform duration-200',
        { "-scale-x-100": isMirrored },
      )}
      aria-label='Live camera feed'
    ></video>
  );
};

export { VideoFeed };
