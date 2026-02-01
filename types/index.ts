import { type Icon } from "@tabler/icons-react";

export interface Content {
  icon: Icon;
  header: string;
  body: string;
}

export type FooterStyle = "isBold" | "isItalic" | "isUppercase";

export type BoothSettings = {
  isBurstMode: boolean;
  isMirrored: boolean;
  photoCount: "1" | "2" | "3" | "4";
  timer: "Off" | "3s" | "5s" | "8s";
  isFlashing: boolean;
};

export interface StripLayout {
  minW: number;
  maxW: number;
  minScale: number;
  maxScale: number;
}
