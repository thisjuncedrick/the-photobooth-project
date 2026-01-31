import { create } from "zustand";

interface ImageStoreState {
  images: string[];
}

interface ImageStoreActions {
  addImage: (blobUrl: string) => void;
  deleteImage: (index: number) => void;
  clearImages: () => void;
}

export const useImageStore = create<ImageStoreState & ImageStoreActions>((set, get) => ({
  images: [],
  addImage: (blobUrl) => set((state) => ({ images: [...state.images, blobUrl] })),
  deleteImage: (index) =>
    set((state) => {
      const img = state.images[index];
      if (img) URL.revokeObjectURL(img);
      const images = state.images.filter((_, i) => i !== index);
      return { images };
    }),
  clearImages: () => {
    const images = get().images;
    images.forEach((url) => URL.revokeObjectURL(url));
    set({ images: [] });
  },
}));
