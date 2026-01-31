"use client";

import { IconRefresh } from "@tabler/icons-react";

import { useImageStore } from "@/stores/image-store";
import { useSettingsStore } from "@/stores/settings-store";
import { BoothSettings } from "@/types";
import React, { JSX, useId, useMemo } from "react";
import { useShallow } from "zustand/shallow";
import { Button } from "../ui/button";
import { ButtonGroup } from "../ui/button-group";
import { Field, FieldDescription, FieldError, FieldLabel } from "../ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Switch } from "../ui/switch";

interface FieldWrapperProps {
  label: string;
  description?: string;
  error?: string;
  orientation?: React.ComponentProps<typeof Field>["orientation"];
  children: (id: string) => React.ReactNode;
}

const FieldWrapper = React.memo(
  ({ label, description, error, orientation, children }: FieldWrapperProps) => {
    const id = useId();
    const descriptionId = `${id}-description`;

    return (
      <Field className='gap-1.5' orientation={orientation}>
        <div className='flex flex-col'>
          <FieldLabel
            htmlFor={id}
            className='text-primary leading-none font-bold tracking-wide uppercase'
          >
            {label}
          </FieldLabel>
          {description && (
            <FieldDescription id={descriptionId}>{description}</FieldDescription>
          )}
        </div>
        {children(id)}
        {error && (
          <FieldError className='text-destructive text-xs leading-tight'>
            {error}
          </FieldError>
        )}
      </Field>
    );
  },
);

interface RadioToggleProps<T extends string> {
  id: string;
  options: readonly T[];
  value: T;
  onValueChange: (value: T) => void;
  disabled?: boolean;
}

export const RadioToggle = React.memo(
  <T extends string>({
    id,
    options,
    value,
    onValueChange,
    disabled,
  }: RadioToggleProps<T>) => {
    return (
      <ButtonGroup id={id} className='w-full' aria-disabled={disabled} role='radiogroup'>
        {options.map((option) => {
          const isSelected = option === value;
          return (
            <Button
              aria-checked={isSelected}
              className='flex-1'
              disabled={disabled}
              key={option}
              onClick={() => onValueChange(option)}
              role='radio'
              type='button'
              variant={isSelected ? "default" : "outline"}
            >
              {option}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  },
) as <T extends string>(props: RadioToggleProps<T>) => JSX.Element;

/* ----------------------------------------------------------------------- */

const CameraSelectInput = () => {
  return (
    <FieldWrapper
      label='Camera Source'
      description='Primary video input for this session'
    >
      {(id) => (
        <div className='flex items-center gap-3'>
          <Select>
            <SelectTrigger id={id} className='flex-1'>
              <SelectValue placeholder='Select a camera' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='empty' aria-label='Refresh cameras' disabled>
                No camera found
              </SelectItem>
            </SelectContent>
          </Select>

          <Button size='icon' variant='outline' className='shadow-none'>
            <IconRefresh aria-hidden='true' />
          </Button>
        </div>
      )}
    </FieldWrapper>
  );
};

const ShootingMode = () => {
  const { value, setValue } = useSettingsStore(
    useShallow((s) => ({
      value: s.settings.isBurstMode,
      setValue: s.setSetting,
    })),
  );

  return (
    <FieldWrapper
      label='Shooting Mode'
      description='Toggle between single and continuous shot'
      orientation='horizontal'
    >
      {(id) => (
        <div className='flex flex-1 justify-end self-start'>
          <Switch
            id={id}
            checked={value}
            onCheckedChange={(v) => setValue("isBurstMode", v)}
          />
        </div>
      )}
    </FieldWrapper>
  );
};

const PhotoCount = () => {
  const { value, setValue } = useSettingsStore(
    useShallow((s) => ({
      value: s.settings.photoCount,
      setValue: s.setSetting,
    })),
  );

  const options: BoothSettings["photoCount"][] = ["1", "2", "3", "4"];

  const hasImages = useImageStore((s) => s.images.length > 0);
  const description = useMemo(
    () =>
      hasImages
        ? "Photo Count is lock when photo is already taken."
        : "Quantity of photos to take each session.",
    [hasImages],
  );

  return (
    <FieldWrapper label='Photo Count' description={description}>
      {(id) => (
        <RadioToggle<BoothSettings["photoCount"]>
          id={id}
          onValueChange={(v) => setValue("photoCount", v)}
          options={options}
          value={value}
        />
      )}
    </FieldWrapper>
  );
};

const Timer = () => {
  const { value, setValue } = useSettingsStore(
    useShallow((s) => ({
      value: s.settings.timer,
      setValue: s.setSetting,
    })),
  );

  const options: BoothSettings["timer"][] = ["Off", "3s", "5s", "8s"];

  return (
    <FieldWrapper
      label='Countdown Timer'
      description='Delay duration before shutter starts.'
    >
      {(id) => (
        <RadioToggle<BoothSettings["timer"]>
          id={id}
          onValueChange={(v) => setValue("timer", v)}
          options={options}
          value={value}
        />
      )}
    </FieldWrapper>
  );
};

export { CameraSelectInput, PhotoCount, ShootingMode, Timer };
