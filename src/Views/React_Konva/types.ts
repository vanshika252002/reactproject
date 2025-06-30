// src/Views/React_Konva/types.ts
export interface ShapeData {
  id: string;
  type: 'rectangle' | 'circle' | 'triangle' | 'star' | 'ellipse';
  x: number;
  y: number;
  width: number;
  height: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
  zIndex: number;
  rotation?: number;
  cornerRadius?: number; // For rectangles
}
export interface ImageData {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
  originalWidth: number;
  originalHeight: number;
  brightness: number;
  contrast: number;
  saturation: number;
  opacity: number;
  zIndex: number;
  imageElement: HTMLImageElement;
}

// Add to your existing TextState interface
export interface TextState {
  id: string;
  text: string;
  x: number;
  y: number;
  fontSize: number;
  fontFamily: string;
  fontStyle: string;
  fill: string;
  zIndex: number;
  width: number;
  isFancy?: boolean;
  fancyStyle?: string;
  outlineColor?: string;
  outlineWidth?: number;
  shadowColor?: string;
  shadowBlur?: number;
  shadowOffsetX?: number;
  shadowOffsetY?: number;
  height?: number;

  scaleX?: number; 
  scaleY?: number; 
  originalFontSize?: number; 
}
