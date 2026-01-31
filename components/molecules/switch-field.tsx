"use client";

import React, { useId } from "react";

import { Field, FieldLabel } from "../ui/field";
import { Switch } from "../ui/switch";

const SwitchField = ({
  className,
  label,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof Switch> &
  Pick<React.ComponentProps<typeof Field>, "orientation"> & { label: string }) => {
  const id = useId();
  const labelId = `${id}-label`;

  return (
    <Field orientation={orientation}>
      <Switch id={id} aria-describedby={labelId} {...props} />
      <FieldLabel htmlFor={id} id={labelId}>
        {label}
      </FieldLabel>
    </Field>
  );
};

export { SwitchField };
