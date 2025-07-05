// import { ShapeData, ImageData, TextState } from '../types';

// export const useZIndexManager = (
//   shapes: ShapeData[],
//   images: ImageData[],
//   text: TextState[],
//   selectedShapeId: string | null,
//   selectedImageId: string | null,
//   selectedTextId: string | null,
//   updateShape: (id: string, updates: Partial<ShapeData>) => void,
//   updateImage: (id: string, updates: Partial<ImageData>) => void,
//   updateText: (id: string, updates: Partial<TextState>) => void
// ) => {
//   const getMaxZIndex = () => {
//     return Math.max(
//       ...shapes.map(s => s.zIndex),
//       ...images.map(i => i.zIndex),
//       ...text.map(t => t.zIndex),
//       0
//     );
//   };

//   const getMinZIndex = () => {
//     return Math.min(
//       ...shapes.map(s => s.zIndex),
//       ...images.map(i => i.zIndex),
//       ...text.map(t => t.zIndex),
//       0
//     );
//   };

//   const bringToFront = () => {
//     const maxZIndex = getMaxZIndex();
//     if (selectedShapeId) {
//       updateShape(selectedShapeId, { zIndex: maxZIndex + 1 });
//     } else if (selectedImageId) {
//       updateImage(selectedImageId, { zIndex: maxZIndex + 1 });
//     } else if (selectedTextId) {
//       updateText(selectedTextId, { zIndex: maxZIndex + 1 });
//     }
//   };

//   const sendToBack = () => {
//     const minZIndex = getMinZIndex();
//     if (selectedShapeId) {
//       updateShape(selectedShapeId, { zIndex: minZIndex - 1 });
//     } else if (selectedImageId) {
//       updateImage(selectedImageId, { zIndex: minZIndex - 1 });
//     } else if (selectedTextId) {
//       updateText(selectedTextId, { zIndex: minZIndex - 1 });
//     }
//   };

//   const moveForward = () => {
//     if (selectedShapeId) {
//       const currentShape = shapes.find(s => s.id === selectedShapeId);
//       if (currentShape) {
//         updateShape(selectedShapeId, { zIndex: currentShape.zIndex + 1 });
//       }
//     } else if (selectedImageId) {
//       const currentImage = images.find(i => i.id === selectedImageId);
//       if (currentImage) {
//         updateImage(selectedImageId, { zIndex: currentImage.zIndex + 1 });
//       }
//     } else if (selectedTextId) {
//       const currentText = text.find(t => t.id === selectedTextId);
//       if (currentText) {
//         updateText(selectedTextId, { zIndex: currentText.zIndex + 1 });
//       }
//     }
//   };

//   const moveBackward = () => {
//     if (selectedShapeId) {
//       const currentShape = shapes.find(s => s.id === selectedShapeId);
//       if (currentShape) {
//         updateShape(selectedShapeId, { zIndex: currentShape.zIndex - 1 });
//       }
//     } else if (selectedImageId) {
//       const currentImage = images.find(i => i.id === selectedImageId);
//       if (currentImage) {
//         updateImage(selectedImageId, { zIndex: currentImage.zIndex - 1 });
//       }
//     } else if (selectedTextId) {
//       const currentText = text.find(t => t.id === selectedTextId);
//       if (currentText) {
//         updateText(selectedTextId, { zIndex: currentText.zIndex - 1 });
//       }
//     }
//   };

//   return {
//     bringToFront,
//     sendToBack,
//     moveForward,
//     moveBackward,
//   };
// };
