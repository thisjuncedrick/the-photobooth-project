"use client";

import { useBoothContext } from "../booth-provider";

import { cn } from "@/lib/utils";
import { useSettingsStore } from "@/stores/settings-store";

const VideoFeed = () => {
  const { videoRef, studioRef, activeFilter } = useBoothContext();
  const isMirrored = useSettingsStore((s) => s.settings.isMirrored);

  return (
    <>
      <div
        className={cn("size-full transition-transform duration-200", activeFilter, {
          "-scale-x-100": isMirrored,
        })}
      >
        <video
          tabIndex={-1}
          ref={videoRef}
          className='size-full object-cover object-center'
          aria-label='Live camera feed'
          autoPlay
          playsInline
          muted
        />
      </div>
      <div className='pointer-events-none invisible absolute top-0 left-[9999px]'>
        <div
          ref={studioRef}
          className={cn(activeFilter, { "-scale-x-100": isMirrored })}
        />
      </div>
    </>
  );
};

export { VideoFeed };
