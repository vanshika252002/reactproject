import { ShapeData, ImageData, TextState } from '../types';

const getMaxZIndex = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[]
): number => {
  return Math.max(
    ...shapes.map((s) => s.zIndex),
    ...images.map((i) => i.zIndex),
    ...text.map((t) => t.zIndex),
    0
  );
};

const getMinZIndex = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[]
): number => {
  return Math.min(
    ...shapes.map((s) => s.zIndex),
    ...images.map((i) => i.zIndex),
    ...text.map((t) => t.zIndex),
    0
  );
};

export const bringToFront = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[],
  selectedShapeId: string | null,
  selectedImageId: string | null,
  selectedTextId: string | null
): {
  shapes: ShapeData[];
  images: ImageData[];
  text: TextState[];
} => {
  const maxZIndex = getMaxZIndex(shapes, images, text);
  
  return {
    shapes: shapes.map((shape) =>
      shape.id === selectedShapeId ? { ...shape, zIndex: maxZIndex + 1 } : shape
    ),
    images: images.map((image) =>
      image.id === selectedImageId ? { ...image, zIndex: maxZIndex + 1 } : image
    ),
    text: text.map((textItem) =>
      textItem.id === selectedTextId ? { ...textItem, zIndex: maxZIndex + 1 } : textItem
    ),
  };
};

export const sendToBack = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[],
  selectedShapeId: string | null,
  selectedImageId: string | null,
  selectedTextId: string | null
): {
  shapes: ShapeData[];
  images: ImageData[];
  text: TextState[];
} => {
  const minZIndex = getMinZIndex(shapes, images, text);
  
  return {
    shapes: shapes.map((shape) =>
      shape.id === selectedShapeId ? { ...shape, zIndex: minZIndex - 1 } : shape
    ),
    images: images.map((image) =>
      image.id === selectedImageId ? { ...image, zIndex: minZIndex - 1 } : image
    ),
    text: text.map((textItem) =>
      textItem.id === selectedTextId ? { ...textItem, zIndex: minZIndex - 1 } : textItem
    ),
  };
};

export const moveForward = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[],
  selectedShapeId: string | null,
  selectedImageId: string | null,
  selectedTextId: string | null
): {
  shapes: ShapeData[];
  images: ImageData[];
  text: TextState[];
} => {
  return {
    shapes: shapes.map((shape) =>
      shape.id === selectedShapeId ? { ...shape, zIndex: shape.zIndex + 1 } : shape
    ),
    images: images.map((image) =>
      image.id === selectedImageId ? { ...image, zIndex: image.zIndex + 1 } : image
    ),
    text: text.map((textItem) =>
      textItem.id === selectedTextId ? { ...textItem, zIndex: textItem.zIndex + 1 } : textItem
    ),
  };
};

export const moveBackward = (
  shapes: ShapeData[],
  images: ImageData[],
  text: TextState[],
  selectedShapeId: string | null,
  selectedImageId: string | null,
  selectedTextId: string | null
): {
  shapes: ShapeData[];
  images: ImageData[];
  text: TextState[];
} => {
  return {
    shapes: shapes.map((shape) =>
      shape.id === selectedShapeId ? { ...shape, zIndex: shape.zIndex - 1 } : shape
    ),
    images: images.map((image) =>
      image.id === selectedImageId ? { ...image, zIndex: image.zIndex - 1 } : image
    ),
    text: text.map((textItem) =>
      textItem.id === selectedTextId ? { ...textItem, zIndex: textItem.zIndex - 1 } : textItem
    ),
  };
};