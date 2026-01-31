"use client";

import { IconSettingsFilled } from "@tabler/icons-react";

import {
  CameraSelectInput,
  PhotoCount,
  ShootingMode,
  Timer,
} from "../molecules/settings-inputs";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Separator } from "../ui/separator";

import { site } from "@/config/site";

const SettingsModal = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button
        variant='ghost'
        size='icon-sm'
        className='hover:text-primary'
        aria-label='Gallery settings'
      >
        <IconSettingsFilled aria-hidden='true' />
      </Button>
    </DialogTrigger>
    <DialogContent
      className='max-w-md gap-4'
      onInteractOutside={(e) => e.preventDefault()}
    >
      <DialogHeader className='gap-0.5'>
        <DialogTitle className='text-primary leading-[0.9] font-bold text-pretty uppercase sm:text-lg lg:text-xl'>
          {site.name}
        </DialogTitle>
        <DialogDescription>Change session settings</DialogDescription>
      </DialogHeader>

      <Separator decorative={true} />

      <div className='flex flex-col gap-6'>
        <CameraSelectInput />
        <ShootingMode />
        <PhotoCount />
        <Timer />
      </div>
    </DialogContent>
  </Dialog>
);

export { SettingsModal };
