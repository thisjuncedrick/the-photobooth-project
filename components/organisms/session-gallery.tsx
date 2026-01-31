"use client";

import { GalleryItem, UploadItem } from "../molecules/gallery-item";
import { ScrollArea } from "../ui/scroll-area";
import { SettingsModal } from "./settings-modal";

const SectionHeader = () => (
  <header className='text-primary flex h-(--panel-header-height) shrink-0 items-center justify-between gap-3 border-b px-3 lg:h-[calc(var(--panel-header-height)*1.5)] lg:px-6'>
    <h2
      id='session-gallery-title'
      className='text-sm font-medium tracking-[0.08em] uppercase'
    >
      Session Gallery
    </h2>

    <SettingsModal />
  </header>
);

const SessionGallery = () => {
  return (
    <aside
      className='flex h-(--panel-min-height) flex-col lg:h-auto lg:min-h-0 lg:flex-2'
      aria-labelledby='session-gallery-title'
    >
      <SectionHeader />

      <ScrollArea
        tabIndex={-1}
        type='always'
        className='min-h-0 flex-1'
        role='region'
        aria-label='Session photo list'
      >
        <ul className='grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6 lg:p-6'>
          {Array.from({ length: 3 }).map((_, i) => (
            <GalleryItem
              key={i}
              src='https://placehold.co/600x400/orange/white'
              onDelete={() => alert("OKAY")}
            />
          ))}
          <UploadItem />
        </ul>
      </ScrollArea>
    </aside>
  );
};

export { SessionGallery };
