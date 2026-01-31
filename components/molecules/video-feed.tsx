"use client";

import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/stores/settings-store";
import { useBoothContext } from "../booth-provider";

const VideoFeed = () => {
  const { videoRef } = useBoothContext();
  const isMirrored = useSettingsStore((s) => s.settings.isMirrored);

  return (
    <div className='size-full'>
      <video
        tabIndex={-1}
        ref={videoRef}
        className={cn(
          "size-full object-cover object-center transition-transform duration-200",
          { "-scale-x-100": isMirrored },
        )}
        aria-label='Live camera feed'
        autoPlay
        playsInline
        muted
      />
    </div>
  );
};

export { VideoFeed };
