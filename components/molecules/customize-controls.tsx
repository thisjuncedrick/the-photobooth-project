"use client";

import {
  IconBold,
  IconDownload,
  IconGif,
  IconItalic,
  IconLetterCase,
  IconPrinter,
  IconTypography,
} from "@tabler/icons-react";
import React from "react";
import { useShallow } from "zustand/shallow";

import { Button } from "../ui/button";
import { Field, FieldLabel, FieldLegend, FieldSet } from "../ui/field";
import { Input } from "../ui/input";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Label } from "../ui/label";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { CustomizeControl } from "./customize-option";
import { SwitchField } from "./switch-field";

import { PrintOptions } from "@/config/options";
import {
  type CustomizeStoreActions,
  type CustomizeStoreState,
  useCustomizeStore,
} from "@/stores/customize-store";

const ColorInput = () => {
  const { color, setColor } = useCustomizeStore(
    useShallow((s) => ({
      color: s.color,
      setColor: s.setColor,
    })),
  );

  return (
    <Field>
      <FieldLabel htmlFor='custom-color' className='sr-only'>
        Custom background color
      </FieldLabel>
      <Input
        id='custom-color-input'
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className='h-10 p-0'
        aria-label='Select custom paper color'
      />
    </Field>
  );
};

const ColorPreset = () => {
  const setColor = useCustomizeStore((s) => s.setColor);

  return (
    <div className='grid grid-cols-5 gap-2' aria-label='Preset paper colors'>
      {PrintOptions.Color.map((color, i) => (
        <button
          key={`${color}-${i}`}
          type='button'
          className='focus-visible:border-ring border-border focus-visible:ring-ring/50 h-10 flex-1 rounded-md transition-all outline-none focus-visible:ring-[3px]'
          style={{ backgroundColor: color }}
          aria-label={`Select ${color} background`}
          onClick={() => setColor(color)}
        >
          <span className='sr-only'>{color}</span>
        </button>
      ))}
    </div>
  );
};

const StripColorControl = () => {
  return (
    <CustomizeControl label='Strip Background'>
      <FieldSet className='m-0 flex min-w-0 flex-col gap-2 border-0 p-0'>
        <FieldLegend className='sr-only'>Strip background color</FieldLegend>
        <ColorPreset />
        <ColorInput />
      </FieldSet>
    </CustomizeControl>
  );
};

/* ----------------------------------------------------------------------- */

const FooterText = () => {
  const { footerText, setFooterText } = useCustomizeStore(
    useShallow((s) => ({ footerText: s.footerText, setFooterText: s.setFooterText })),
  );

  return (
    <InputGroup className='h-10'>
      <InputGroupAddon aria-hidden='true'>
        <IconTypography />
      </InputGroupAddon>
      <InputGroupInput
        aria-describedby='footer-formatting'
        id='footer-text'
        maxLength={80}
        type='text'
        value={footerText}
        onChange={(e) => setFooterText(e.target.value)}
      />
    </InputGroup>
  );
};

const FooterTextStyle = () => {
  const { footerStyle, setFooterStyle } = useCustomizeStore(
    useShallow((s) => ({ footerStyle: s.footerStyle, setFooterStyle: s.setFooterStyle })),
  );

  return (
    <ToggleGroup
      aria-label='Footer text formatting options'
      className='w-full'
      id='footer-formatting'
      size='lg'
      type='multiple'
      variant='outline'
      value={footerStyle}
      onValueChange={setFooterStyle}
    >
      <ToggleGroupItem value='isBold' className='flex-1' aria-label='Bold text'>
        <IconBold aria-hidden='true' />
      </ToggleGroupItem>
      <ToggleGroupItem value='isItalic' className='flex-1' aria-label='Italic text'>
        <IconItalic aria-hidden='true' />
      </ToggleGroupItem>
      <ToggleGroupItem value='isUppercase' className='flex-1' aria-label='Uppercase text'>
        <IconLetterCase aria-hidden='true' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const FooterTextControl = () => (
  <CustomizeControl label='Footer Text'>
    <div className='flex flex-col gap-2'>
      <Label htmlFor='footer-text' className='sr-only'>
        Footer text
      </Label>
      <FooterText />
      <FooterTextStyle />
    </div>
  </CustomizeControl>
);

/* ----------------------------------------------------------------------- */

interface SwitchProps extends React.ComponentProps<typeof SwitchField> {
  actionKey: keyof Pick<
    CustomizeStoreActions,
    "setIsWhiteText" | "setIsRounded" | "setHasTimestamp" | "setIsSupported"
  >;
  stateKey: keyof Pick<
    CustomizeStoreState,
    "isWhiteText" | "isRounded" | "hasTimestamp" | "isSupported"
  >;
}

const Switch = React.memo(({ stateKey, actionKey, ...props }: SwitchProps) => {
  const { value, setValue } = useCustomizeStore(
    useShallow((s) => ({ value: s[stateKey], setValue: s[actionKey] })),
  );

  return <SwitchField checked={value} onCheckedChange={setValue} {...props} />;
});

const MetadataControls = () => (
  <CustomizeControl label='Metadata Options'>
    <Switch label='White Text' stateKey='isWhiteText' actionKey='setIsWhiteText' />
    <Switch label='Rounded Frame' stateKey='isRounded' actionKey='setIsRounded' />
    <Switch label='Add Timestamp' stateKey='hasTimestamp' actionKey='setHasTimestamp' />
    <Switch label='Support Project' stateKey='isSupported' actionKey='setIsSupported' />
  </CustomizeControl>
);

/* ------------------------------------------------------------------------ */

const ExportControls = () => {
  return (
    <section aria-labelledby='export-heading' className='flex flex-col gap-1.5'>
      <h3 id='export-heading' className='sr-only'>
        Export options
      </h3>

      <Button size='lg' className='uppercase' aria-label='Download as PNG file'>
        <IconDownload aria-hidden='true' />
        <span>Download .png</span>
      </Button>
      <div className='flex items-center gap-3'>
        <Button
          size='sm'
          variant='outline'
          className='flex-1'
          aria-label='Print document'
        >
          <IconPrinter aria-hidden='true' />
          <span>Print</span>
        </Button>

        <Button
          size='sm'
          variant='outline'
          className='flex-1'
          aria-label='Download as GIF file'
        >
          <IconGif aria-hidden='true' />
          <span>Download .GIF</span>
        </Button>
      </div>
    </section>
  );
};

export { ExportControls, FooterTextControl, MetadataControls, StripColorControl };
