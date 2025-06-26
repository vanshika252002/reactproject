import { ShapeData } from '../types';

export const addShape = (
  type: ShapeData['type'],
  shapes: ShapeData[],
  images: { zIndex: number }[],
  text: { zIndex: number }[],
  shapeColor: string,
  strokeColor: string,
  strokeWidth: number
): ShapeData => {
  const maxZIndex = Math.max(
    ...shapes.map((s) => s.zIndex),
    ...images.map((i) => i.zIndex),
    ...text.map((t) => t.zIndex),
    0
  );
  
  return {
    id: Date.now().toString(),
    type,
    x: Math.random() * 400 + 100,
    y: Math.random() * 500 + 100,
    width: 100,
    height: 100,
    fill: shapeColor,
    stroke: strokeColor,
    strokeWidth,
    zIndex: maxZIndex + 1,
  };
};

export const handleShapeDragEnd = (
  e: any, // KonvaEventObject<DragEvent>,
  shapeId: string,
  shapes: ShapeData[]
): ShapeData[] => {
  return shapes.map((shape) => {
    if (shape.id === shapeId) {
      return {
        ...shape,
        x: e.target.x(),
        y: e.target.y(),
      };
    }
    return shape;
  });
};

export const updateShapeProperty = (
  shapes: ShapeData[],
  selectedShapeId: string | null,
  property: keyof ShapeData,
  value: any
): ShapeData[] => {
  if (!selectedShapeId) return shapes;
  
  return shapes.map((shape) =>
    shape.id === selectedShapeId ? { ...shape, [property]: value } : shape
  );
};

export const deleteSelectedShape = (
  shapes: ShapeData[],
  selectedShapeId: string | null
): { shapes: ShapeData[]; selectedShapeId: string | null } => {
  if (!selectedShapeId) return { shapes, selectedShapeId };
  
  return {
    shapes: shapes.filter((shape) => shape.id !== selectedShapeId),
    selectedShapeId: null,
  };
};