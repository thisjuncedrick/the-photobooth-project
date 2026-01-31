import { CSSProperties } from "react";

import { CountdownLabel, FilterLabel } from "@/components/molecules/labels";
import { VideoFeed } from "@/components/molecules/video-feed";
import { CameraControls } from "@/components/organisms/camera-controls";
import { FiltersList } from "@/components/organisms/filters-list";
import { SessionGallery } from "@/components/organisms/session-gallery";

import { LinkButton } from "@/components/atoms/link-button";
import { cn } from "@/lib/utils";
import { IconArrowLeft } from "@tabler/icons-react";

export default function BoothPage() {
  return (
    <div
      className='relative flex flex-col lg:h-dvh'
      style={
        {
          "--panel-min-height": "300px",
          "--panel-header-height": "40px",
          "--filter-card-size": "130px",
        } as CSSProperties
      }
    >
      <LinkButton
        href='/'
        variant='ghost'
        className='text-primary hover:text-primary absolute top-3 left-3 z-10 w-fit justify-start lg:top-6 lg:left-6'
      >
        <IconArrowLeft aria-hidden='true' />
        <span>Return to Home</span>
      </LinkButton>
      <div className='flex min-h-0 flex-1 flex-col border-b lg:flex-row'>
        <main
          className={cn(
            "min-h-(--panel-min-height) overflow-hidden lg:min-h-0 lg:flex-8",
            "border-b lg:border-r lg:border-b-0",
            "flex items-center justify-center",
          )}
          aria-label='Camera feed'
        >
          <div className='relative aspect-4/3 w-full max-w-2xl bg-black'>
            <CountdownLabel />
            <FilterLabel />
            <CameraControls />
            <VideoFeed />
          </div>
        </main>

        <SessionGallery />
      </div>

      <FiltersList />
    </div>
  );
}
