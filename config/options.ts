import { type CustomizeStoreState } from "@/stores/customize-store";
import type { BoothSettings } from "@/types";
import { site } from "./site";

export const Settings: BoothSettings = {
  isBurstMode: false,
  isMirrored: false,
  photoCount: "3",
  timer: "Off",
  isFlashing: false,
};

export const CustomizerSettings: CustomizeStoreState = {
  color: "#FFFFFF",
  isRounded: false,
  footerText: site.name,
  footerStyle: ["isBold"],
  isSupported: true,
  isWhiteText: false,
  hasTimestamp: false,
};

const PresetColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#660000",
  "#993D00",
  "#8B6914",
  "#0D3D0D",
  "#001A33",
];

export const PrintOptions = {
  Color: PresetColors,
};
