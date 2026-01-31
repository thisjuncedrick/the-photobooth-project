import { create } from "zustand";

import type { BoothSettings } from "@/types";

interface SettingsStore {
  settings: BoothSettings;
  setSetting: <K extends keyof BoothSettings>(key: K, value: BoothSettings[K]) => void;
  resetSettings: (initial?: BoothSettings) => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  settings: {} as BoothSettings,
  setSetting: (key, value) =>
    set((state) => ({
      settings: { ...state.settings, [key]: value },
    })),
  resetSettings: (initial) =>
    set({
      settings: initial ?? ({} as BoothSettings),
    }),
}));
