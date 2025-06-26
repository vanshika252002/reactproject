import { ImageData } from '../types';

export const handleFileUpload = (
  files: FileList | null,
  shapes: { zIndex: number }[],
  images: ImageData[],
  text: { zIndex: number }[],
  activeFilter: string,
  setBackgroundImage: (img: HTMLImageElement | null) => void,
  setSelectedColor: (color: string) => void
): Promise<ImageData[]> => {
  return new Promise((resolve) => {
    if (!files) {
      resolve([]);
      return;
    }

    if (activeFilter === 'color') {
      const file = files[0];
      if (file?.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            setBackgroundImage(img);
            setSelectedColor('transparent');
            resolve([]);
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
      return;
    }

    const newImages: ImageData[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const maxZIndex = Math.max(
              ...shapes.map((s) => s.zIndex),
              ...images.map((i) => i.zIndex),
              ...text.map((t) => t.zIndex),
              0
            );
            
            newImages.push({
              id: Date.now().toString() + Math.random(),
              src: e.target?.result as string,
              x: Math.random() * 400 + 100,
              y: Math.random() * 400 + 100,
              width: Math.min(img.width, 200),
              height: Math.min(img.height, 200),
              originalWidth: img.width,
              originalHeight: img.height,
              brightness: 1,
              contrast: 1,
              saturation: 1,
              opacity: 1,
              zIndex: maxZIndex + 1,
              imageElement: img,
            });

            if (newImages.length === Array.from(files).length) {
              resolve(newImages);
            }
          };
          img.src = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    });
  });
};

export const handleImageDragEnd = (
  e: any, // KonvaEventObject<DragEvent>,
  imageId: string,
  images: ImageData[]
): ImageData[] => {
  return images.map((image) => {
    if (image.id === imageId) {
      return {
        ...image,
        x: e.target.x(),
        y: e.target.y(),
      };
    }
    return image;
  });
};

export const updateImageProperty = (
  images: ImageData[],
  selectedImageId: string | null,
  property: keyof ImageData,
  value: any
): ImageData[] => {
  if (!selectedImageId) return images;
  
  return images.map((image) =>
    image.id === selectedImageId ? { ...image, [property]: value } : image
  );
};

export const deleteSelectedImage = (
  images: ImageData[],
  selectedImageId: string | null
): { images: ImageData[]; selectedImageId: string | null } => {
  if (!selectedImageId) return { images, selectedImageId };
  
  return {
    images: images.filter((image) => image.id !== selectedImageId),
    selectedImageId: null,
  };
};