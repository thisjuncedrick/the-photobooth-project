import { create } from "zustand";

interface CameraStoreState {
  devices: MediaDeviceInfo[];
  activeDeviceId: MediaDeviceInfo["deviceId"] | null;
  error: Error | null;
  isRefreshing: boolean;
  isVideoReady: boolean;
}

interface CameraStoreActions {
  setDevices: (devices: MediaDeviceInfo[]) => void;
  setActiveDeviceId: (device: MediaDeviceInfo["deviceId"] | null) => void;
  setError: (error: Error | null) => void;
  setIsRefreshing: (refreshing: boolean) => void;
  setIsVideoReady: (isReady: boolean) => void;
}

export const useCameraStore = create<CameraStoreState & CameraStoreActions>((set) => ({
  devices: [],
  activeDeviceId: null,
  error: null,
  isRefreshing: false,
  isVideoReady: false,

  setDevices: (devices) => set({ devices }),
  setActiveDeviceId: (activeDeviceId) => set({ activeDeviceId }),
  setError: (error) => set({ error }),
  setIsRefreshing: (isRefreshing) => set({ isRefreshing }),
  setIsVideoReady: (isVideoReady) => set({ isVideoReady }),
}));
