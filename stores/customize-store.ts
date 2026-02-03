import { CustomizerSettings } from "@/config/options";
import { type FooterStyle } from "@/types";
import { CSSProperties } from "react";
import { create } from "zustand";

export interface CustomizeStoreState {
  background: CSSProperties["background"];
  color: string;
  isRounded: boolean;
  footerText: string;
  footerStyle: FooterStyle[];
  isSupported: boolean;
  isWhiteText: boolean;
  hasTimestamp: boolean;
}

export interface CustomizeStoreActions {
  setBackground: (background: CSSProperties["background"]) => void;
  setColor: (color: string) => void;
  setIsRounded: (isRounded: boolean) => void;
  setFooterText: (footerText: string) => void;
  setFooterStyle: (footerStyle: FooterStyle[]) => void;
  setIsSupported: (isSupported: boolean) => void;
  setIsWhiteText: (isWhiteText: boolean) => void;
  setHasTimestamp: (hasTimestamp: boolean) => void;
  resetSettings: (state: CustomizeStoreState) => void;
}

export const useCustomizeStore = create<CustomizeStoreState & CustomizeStoreActions>(
  (set) => ({
    ...CustomizerSettings,

    setBackground: (background) => set({ background }),
    setColor: (color) => set({ color }),
    setIsRounded: (isRounded) => set({ isRounded }),
    setFooterText: (footerText) => set({ footerText }),
    setFooterStyle: (footerStyle) => set({ footerStyle }),
    setIsSupported: (isSupported) => set({ isSupported }),
    setIsWhiteText: (isWhiteText) => set({ isWhiteText }),
    setHasTimestamp: (hasTimestamp) => set({ hasTimestamp }),
    resetSettings: (customizerState) => set(customizerState),
  }),
);
