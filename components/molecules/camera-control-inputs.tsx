"use client";

import {
  IconBulb,
  IconCameraFilled,
  IconCheck,
  IconFlipVertical,
  IconRotateClockwise,
} from "@tabler/icons-react";
import { useShallow } from "zustand/shallow";

import { LinkButton } from "../atoms/link-button";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

import { cn } from "@/lib/utils";
import { useCameraStore } from "@/stores/camera-store";
import { useImageStore } from "@/stores/image-store";
import { useSettingsStore } from "@/stores/settings-store";

const FlipToggle = () => {
  const { value, setValue } = useSettingsStore(
    useShallow((s) => ({
      value: s.settings.isMirrored,
      setValue: s.setSetting,
    })),
  );

  return (
    <Toggle
      type='button'
      size='sm'
      className='rounded-full'
      aria-label='Flip image'
      pressed={value}
      onPressedChange={(v) => setValue("isMirrored", v)}
    >
      <IconFlipVertical className='size-5' aria-hidden='true' />
    </Toggle>
  );
};

const FlashToggle = () => {
  const { value, setValue } = useSettingsStore(
    useShallow((s) => ({
      value: s.settings.isFlashing,
      setValue: s.setSetting,
    })),
  );

  return (
    <Toggle
      type='button'
      size='sm'
      className='rounded-full'
      aria-label='Toggle flash'
      pressed={value}
      onPressedChange={(v) => setValue("isFlashing", v)}
    >
      <IconBulb className='size-5' aria-hidden='true' />
    </Toggle>
  );
};

const ActionControls = () => {
  const { clearImages, imageCount } = useImageStore(
    useShallow((s) => ({ clearImages: s.clearImages, imageCount: s.images.length })),
  );
  const photoCount = useSettingsStore((s) => s.settings.photoCount);

  if (photoCount === undefined || imageCount < Number(photoCount)) return null;

  return (
    <>
      <Button
        variant='secondary'
        size='icon'
        className='rounded-full'
        onClick={clearImages}
      >
        <IconRotateClockwise aria-hidden='true' />
      </Button>
      <LinkButton href='/print' size='icon' className='rounded-full'>
        <IconCheck aria-hidden='true' />
      </LinkButton>
    </>
  );
};

const CameraControls = () => {
  const photoCount = useSettingsStore((s) => s.settings.photoCount);

  const { error, isVideoReady } = useCameraStore(
    useShallow((s) => ({ error: s.error, isVideoReady: s.isVideoReady })),
  );

  const imageCount = useImageStore((s) => s.images.length);

  const hasEnoughImages = imageCount >= Number(photoCount);
  const canCapture = !error && isVideoReady && !hasEnoughImages;

  if (!canCapture) return null;

  return (
    <>
      <FlipToggle />

      <button
        type='button'
        className={cn(
          "bg-primary text-primary-foreground size-12",
          "flex items-center justify-center rounded-full",
          "focus-visible:ring-ring outline-none focus-visible:ring-[3px]",
        )}
        aria-label='Capture photo'
      >
        <IconCameraFilled aria-hidden='true' />
      </button>

      <FlashToggle />
    </>
  );
};

export { ActionControls, CameraControls };
