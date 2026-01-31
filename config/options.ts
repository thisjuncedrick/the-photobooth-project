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

export const CameraError = {
  PERMISSION_DENIED: {
    name: "PERMISSION_DENIED",
    message:
      "Permission denied. Please allow camera permissions in your browser settings to use this feature.",
  },
  FAILED_TO_START_STREAM: {
    name: "FAILED_TO_START_STREAM",
    message:
      "Could not connect to the camera. It might be in use by another application.",
  },
  FAILED_TO_ENUMERATE: {
    name: "FAILED_TO_ENUMERATE",
    message: "We couldn't list your available cameras. Try refreshing the page.",
  },
  NO_DEVICES_FOUND: {
    name: "NO_DEVICES_FOUND",
    message: "We couldn't find any video input devices connected to this device.",
  },
} as const satisfies Record<string, Error>;

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
