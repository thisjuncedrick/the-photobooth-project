"use client";

import { IconBulb, IconCameraFilled, IconFlipVertical } from "@tabler/icons-react";
import { useShallow } from "zustand/shallow";

import { Toggle } from "../ui/toggle";

import { cn } from "@/lib/utils";
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

const DefaultControls = () => {
  return (
    <div
      className='flex size-full items-center justify-evenly gap-3'
      role='toolbar'
      aria-label='Camera controls'
    >
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
    </div>
  );
};

export { DefaultControls };
