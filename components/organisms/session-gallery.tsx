"use client";

import { GalleryItem, UploadItem } from "../molecules/gallery-item";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { SettingsModal } from "./settings-modal";

import { useImageStore } from "@/stores/image-store";
import { useSettingsStore } from "@/stores/settings-store";

const GalleryList = () => {
  const images = useImageStore((s) => s.images);
  const deleteImage = useImageStore((s) => s.deleteImage);

  const photoCount = useSettingsStore((s) => s.settings.photoCount);
  const maxReached = images.length >= Number(photoCount);

  return (
    <ul className='grid grid-cols-2 gap-3 p-3 sm:grid-cols-3 lg:grid-cols-1 lg:gap-6 lg:p-6'>
      {images.map((src, i) => (
        <GalleryItem key={src} src={src} index={i} onDelete={deleteImage} />
      ))}
      {!maxReached && <UploadItem />}
    </ul>
  );
};

const SectionHeader = () => (
  <header className='text-primary flex h-(--panel-header-height) shrink-0 items-center justify-between gap-3 px-3 lg:h-[calc(var(--panel-header-height)*1.5)] lg:px-6'>
    <h2 id='session-gallery-title' className='text-sm font-bold uppercase'>
      Session Gallery
    </h2>

    <SettingsModal />
  </header>
);

const SectionFooter = () => {
  const clearImages = useImageStore((s) => s.clearImages);
  const hasImage = useImageStore((s) => s.images.length > 0);

  return (
    <footer className='text-primary flex h-(--panel-header-height) shrink-0 items-center justify-center gap-3 px-3 lg:h-[calc(var(--panel-header-height)*1.5)] lg:px-6'>
      <Button
        type='button'
        onClick={clearImages}
        className='text-[10px] font-bold uppercase'
        size='xs'
        variant='ghost'
        disabled={!hasImage}
      >
        Clear All Images
      </Button>
    </footer>
  );
};

const SessionGallery = () => {
  return (
    <aside
      className='flex h-(--panel-min-height) flex-col divide-y lg:h-auto lg:min-h-0 lg:flex-2'
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
        <GalleryList />
      </ScrollArea>

      <SectionFooter />
    </aside>
  );
};

export { SessionGallery };
