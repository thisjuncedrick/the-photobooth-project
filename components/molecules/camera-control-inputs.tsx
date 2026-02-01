"use client";

import {
  IconBulb,
  IconCameraFilled,
  IconCheck,
  IconFlipVertical,
  IconPlayerStopFilled,
  IconRotateClockwise,
} from "@tabler/icons-react";
import { useCallback } from "react";
import { useShallow } from "zustand/shallow";

import { LinkButton } from "../atoms/link-button";
import { useBoothContext } from "../booth-provider";
import { Button } from "../ui/button";
import { Toggle } from "../ui/toggle";

import { cn } from "@/lib/utils";
import { useCameraStore } from "@/stores/camera-store";
import { useCaptureStore } from "@/stores/capture-store";
import { useImageStore } from "@/stores/image-store";
import { useSettingsStore } from "@/stores/settings-store";

const CaptureButton = () => {
  const { capture } = useBoothContext();

  const status = useCaptureStore((s) => s.status);
  const requestCapture = useCaptureStore((s) => s.requestCapture);
  const cancel = useCaptureStore((s) => s.cancel);

  const { isBurstMode, photoCount } = useSettingsStore(
    useShallow((s) => ({
      isBurstMode: s.settings.isBurstMode,
      photoCount: parseInt(s.settings.photoCount),
    })),
  );

  const imageCount = useImageStore((s) => s.images.length);

  const onClick = useCallback(async () => {
    if (status === "counting") {
      cancel();
      return;
    }

    if (status !== "idle") return;

    const remainingShots = Math.max(photoCount - imageCount, 0);
    if (remainingShots === 0) return;

    if (!isBurstMode || remainingShots === 1) {
      try {
        await requestCapture(capture);
      } catch (err) {
        if (err instanceof Error && err.message === "Capture already in progress") {
          console.warn("Capture already in progress");
          return;
        }
        console.error("Capture failed:", err);
        alert(err instanceof Error ? err.message : "Capture failed");
      }
      return;
    }

    for (let i = 0; i < remainingShots; i++) {
      try {
        await requestCapture(capture);
      } catch (err) {
        if (err instanceof Error && err.message === "Capture already in progress") {
          console.warn("Capture already in progress");
          return;
        }
        console.error("Burst capture failed:", err);
        alert(err instanceof Error ? err.message : "Burst capture failed");
        break;
      }

      if (i < remainingShots - 1) await new Promise((res) => setTimeout(res, 300));
    }
  }, [status, imageCount, photoCount, isBurstMode, capture]);

  return (
    <button
      type='button'
      className={cn(
        "bg-primary text-primary-foreground size-12",
        "flex items-center justify-center rounded-full",
        "focus-visible:ring-ring outline-none focus-visible:ring-[3px]",
        status === "counting"
          ? "bg-primary-foreground text-primary scale-90"
          : "bg-destructive hover:scale-105",
      )}
      aria-label={status === "counting" ? "Cancel capture" : "Take photo"}
      onClick={onClick}
    >
      {status === "counting" ? (
        <IconPlayerStopFilled aria-hidden='true' />
      ) : (
        <IconCameraFilled aria-hidden='true' />
      )}
    </button>
  );
};

const FlipToggle = () => {
  const value = useSettingsStore((s) => s.settings.isMirrored);
  const setValue = useSettingsStore((s) => s.setSetting);

  return (
    <Toggle
      type='button'
      size='sm'
      className='bg-muted/50 rounded-full'
      aria-label='Flip image'
      pressed={value}
      onPressedChange={(v) => setValue("isMirrored", v)}
    >
      <IconFlipVertical className='size-5' aria-hidden='true' />
    </Toggle>
  );
};

const FlashToggle = () => {
  const value = useSettingsStore((s) => s.settings.isFlashing);
  const setValue = useSettingsStore((s) => s.setSetting);

  return (
    <Toggle
      type='button'
      size='sm'
      className='bg-muted/50 rounded-full'
      aria-label='Toggle flash'
      pressed={value}
      onPressedChange={(v) => setValue("isFlashing", v)}
    >
      <IconBulb className='size-5' aria-hidden='true' />
    </Toggle>
  );
};

const ActionControls = () => {
  const imageCount = useImageStore((s) => s.images.length);
  const clearImages = useImageStore((s) => s.clearImages);

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

  const hasEnoughImages = useImageStore((s) => s.images.length >= Number(photoCount));
  const canCapture = !error && isVideoReady && !hasEnoughImages;

  if (!canCapture) return null;

  return (
    <>
      <FlipToggle />
      <CaptureButton />
      <FlashToggle />
    </>
  );
};

export { ActionControls, CameraControls };
