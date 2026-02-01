import { create } from "zustand";

import { useImageStore } from "./image-store";
import { useSettingsStore } from "./settings-store";

type CaptureStatus = "idle" | "counting" | "capturing";

interface CaptureStoreState {
  status: CaptureStatus;
  remaining: number | null;
  _timerId: number | null;
  _isExecuting: boolean;
}

interface CaptureStoreActions {
  requestCapture: (captureFn: () => Promise<string | null>) => Promise<void>;
  cancel: () => void;
}

export const useCaptureStore = create<CaptureStoreState & CaptureStoreActions>(
  (set, get) => ({
    status: "idle",
    remaining: null,
    _timerId: null,
    _isExecuting: false,
    requestCapture: (captureFn) =>
      new Promise<void>((resolve, reject) => {
        if (get()._isExecuting) {
          reject(new Error("Capture already in progress"));
          return;
        }

        set({ _isExecuting: true });
        const { timer, isBurstMode } = useSettingsStore.getState().settings;

        let countdown: number | null = null;

        if (timer !== "Off") {
          const t = parseInt(timer, 10);
          if (!isNaN(t) && t > 0) countdown = t;
        } else if (isBurstMode) {
          countdown = 3;
        }

        const executeCapture = () => {
          set({ status: "capturing" });

          setTimeout(() => {
            captureFn()
              .then((img) => {
                if (img) useImageStore.getState().addImage(img);

                set({
                  status: "idle",
                  remaining: null,
                  _isExecuting: false,
                });
                resolve();
              })
              .catch((err) => {
                set({ status: "idle", _isExecuting: false });
                reject(err);
              });
          }, 600);
        };

        if (!countdown) {
          executeCapture();
          return;
        }

        set({ status: "counting", remaining: countdown });

        const id = window.setInterval(() => {
          const current = get().remaining;

          if (current === null || current <= 1) {
            clearInterval(get()._timerId!);
            set({ remaining: null, _timerId: null });
            executeCapture();
          } else {
            set({ remaining: current - 1 });
          }
        }, 1000);

        set({ _timerId: id });
      }),
    cancel: () => {
      const { _timerId } = get();
      if (_timerId) clearInterval(_timerId);

      set({
        status: "idle",
        remaining: null,
        _timerId: null,
        _isExecuting: false,
      });
    },
  }),
);
