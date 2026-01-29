import { site } from "@/config/site";
import { type FooterStyle } from "@/types";
import { create } from "zustand";

export interface CustomizeStoreState {
  color: string;
  isRounded: boolean;
  footerText: string;
  footerStyle: FooterStyle[];
  isSupported: boolean;
  isWhiteText: boolean;
  hasTimestamp: boolean;
}

export interface CustomizeStoreActions {
  setColor: (color: string) => void;
  setIsRounded: (isRounded: boolean) => void;
  setFooterText: (footerText: string) => void;
  setFooterStyle: (footerStyle: FooterStyle[]) => void;
  setIsSupported: (isSupported: boolean) => void;
  setIsWhiteText: (isWhiteText: boolean) => void;
  setHasTimestamp: (hasTimestamp: boolean) => void;
}

export const useCustomizeStore = create<CustomizeStoreState & CustomizeStoreActions>(
  (set) => ({
    color: "#ffffff",
    sticker: "",
    isRounded: false,
    footerText: site.name,
    footerStyle: ["isBold", "isUppercase"],
    isSupported: true,
    isWhiteText: false,
    hasTimestamp: false,

    setColor: (color) => set({ color }),
    setIsRounded: (isRounded) => set({ isRounded }),
    setFooterText: (footerText) => set({ footerText }),
    setFooterStyle: (footerStyle) => set({ footerStyle }),
    setIsSupported: (isSupported) => set({ isSupported }),
    setIsWhiteText: (isWhiteText) => set({ isWhiteText }),
    setHasTimestamp: (hasTimestamp) => set({ hasTimestamp }),
  }),
);
