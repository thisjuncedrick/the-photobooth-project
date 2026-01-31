"use client";

import { RefObject, useCallback, useEffect, useRef } from "react";
import { useShallow } from "zustand/shallow";

import { CameraError } from "@/config/options";
import { useCameraStore } from "@/stores/camera-store";

export interface UseCameraApi {
  startStream: (deviceId?: MediaDeviceInfo["deviceId"]) => Promise<void>;
  stopStream: () => void;
  refreshDevices: () => void;
}

export const useCamera = (videoRef: RefObject<HTMLVideoElement | null>): UseCameraApi => {
  const streamRef = useRef<MediaStream | null>(null);

  const {
    activeDeviceId,
    setActiveDeviceId,
    setDevices,
    setIsVideoReady,
    setIsRefreshing,
    setError,
  } = useCameraStore(
    useShallow((s) => ({
      activeDeviceId: s.activeDeviceId,
      setActiveDeviceId: s.setActiveDeviceId,
      setDevices: s.setDevices,
      setIsVideoReady: s.setIsVideoReady,
      setIsRefreshing: s.setIsRefreshing,
      setError: s.setError,
    })),
  );

  const startStream = useCallback(
    async (deviceId?: MediaDeviceInfo["deviceId"]) => {
      try {
        if (streamRef.current) {
          streamRef.current.getTracks().forEach((t) => t.stop());
        }

        const constraints: MediaStreamConstraints = {
          video: deviceId ? { deviceId: { exact: deviceId } } : { facingMode: "user" },
          audio: false,
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.onloadedmetadata = () => {
            videoRef.current?.play().catch(() => {
              console.warn("Autoplay blocked: user interaction required.");
            });
            setIsVideoReady(true);
          };
        }

        const videoTrack = stream.getVideoTracks()[0];
        const actualId = videoTrack?.getSettings().deviceId || deviceId || null;
        setActiveDeviceId(actualId);
        setError(null);
      } catch (err: any) {
        const cameraError =
          err.name === "NotAllowedError"
            ? CameraError.PERMISSION_DENIED
            : CameraError.FAILED_TO_START_STREAM;
        setError(cameraError);
        setIsVideoReady(false);
        throw err;
      }
    },
    [videoRef, setActiveDeviceId, setError, setIsVideoReady],
  );

  const stopStream = useCallback(() => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (videoRef.current) videoRef.current.srcObject = null;

    setActiveDeviceId(null);
    setIsVideoReady(false);
  }, [setActiveDeviceId, setIsVideoReady, videoRef]);

  const refreshDevices = useCallback(async () => {
    setIsRefreshing(true);
    try {
      if (!streamRef.current) await startStream();

      const allDevices = await navigator.mediaDevices.enumerateDevices();
      const videoDevices = allDevices.filter(
        (d) => d.kind === "videoinput" && d.deviceId !== "",
      );
      setDevices(videoDevices);
    } catch {
      setDevices([]);
    } finally {
      setIsRefreshing(false);
    }
  }, [startStream, setDevices, setIsRefreshing]);

  useEffect(() => {
    if (!activeDeviceId) {
      refreshDevices().catch(() => {});
    }
    return () => stopStream();
  }, []);

  return {
    startStream,
    stopStream,
    refreshDevices,
  };
};
