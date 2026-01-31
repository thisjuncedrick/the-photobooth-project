"use client";

import { IconPhotoFilled, IconTrashFilled } from "@tabler/icons-react";
import React, { HTMLAttributes, InputHTMLAttributes, useRef } from "react";

import { Button } from "../ui/button";

import { cn } from "@/lib/utils";

const UploadItem = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const acceptedFileType: InputHTMLAttributes<HTMLInputElement>["accept"] =
    "image/png,image/jpeg,image/jpg";

  const onFileClick = () => {
    inputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const validTypes = acceptedFileType.split(",");
    const isValid = validTypes.includes(file.type);

    if (isValid) {
      alert("VALID");
    } else {
      alert("Please upload a valid image file");
    }

    e.target.value = "";
  };

  return (
    <li className='group bg-secondary relative aspect-4/3'>
      <button
        type='button'
        className={cn(
          "text-muted-foreground size-full outline-none",
          "flex flex-col items-center justify-center p-3",
          "border-muted-foreground/60 bg-muted/40 border-2 border-dashed",
          "hover:bg-muted/90 hover:border-primary/50 hover:text-primary",
          "focus-visible:bg-muted/90 focus-visible:border-primary/50 focus-visible:text-primary focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "transition-colors duration-200",
        )}
        onClick={onFileClick}
        aria-label='Upload a photo - opens file picker'
      >
        <IconPhotoFilled aria-hidden='true' className='mb-2' />
        <span className='text-xs font-medium tracking-[0.08em]'>Add Photo</span>
      </button>

      <input
        ref={inputRef}
        tabIndex={-1}
        type='file'
        className='sr-only'
        accept={acceptedFileType}
        onChange={onFileChange}
      />
    </li>
  );
};

const DeleteOverlayButton = ({
  onDelete,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  onDelete: () => void;
}) => (
  <div
    className={cn(
      "absolute top-2 right-2",

      /* Mobile: always visible */
      "opacity-100",

      /* Desktop: hover / focus reveal */
      "lg:bg-background/80 lg:inset-0",
      "lg:flex lg:items-center lg:justify-center",
      "lg:opacity-0 lg:group-hover:opacity-100",
      "lg:transition-opacity lg:duration-200",
      "lg:group-focus-within:opacity-100",

      className,
    )}
    {...props}
  >
    <Button size='icon' aria-label='Delete image' onClick={onDelete}>
      <IconTrashFilled aria-hidden='true' />
    </Button>
  </div>
);

const GalleryItem = ({
  className,
  onDelete,
  ...props
}: React.ComponentProps<"img"> & { onDelete: () => void }) => (
  <li className='group bg-secondary focus-within:ring-ring/50 relative aspect-4/3 outline-none focus-within:ring-[3px]'>
    <DeleteOverlayButton onDelete={onDelete} />
    <img className={cn("size-full object-cover object-center", className)} {...props} />
  </li>
);

export { GalleryItem, UploadItem };
