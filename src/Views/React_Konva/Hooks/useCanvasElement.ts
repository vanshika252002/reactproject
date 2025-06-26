import { useState } from 'react';
import { ShapeData, ImageData, TextState } from '../types';

export const useCanvasElements = () => {
  const [text, setText] = useState<TextState[]>([]);
  const [shapes, setShapes] = useState<ShapeData[]>([]);
  const [images, setImages] = useState<ImageData[]>([]);
  
  const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);

  // Add elements
  const addText = (newText: TextState) => setText(prev => [...prev, newText]);
  const addShape = (newShape: ShapeData) => setShapes(prev => [...prev, newShape]);
  const addImage = (newImage: ImageData) => setImages(prev => [...prev, newImage]);

  // Delete elements
  const deleteText = (id: string) => setText(prev => prev.filter(t => t.id !== id));
  const deleteShape = (id: string) => setShapes(prev => prev.filter(s => s.id !== id));
  const deleteImage = (id: string) => setImages(prev => prev.filter(i => i.id !== id));

  // Update elements
  const updateText = (id: string, updates: Partial<TextState>) => setText(prev => 
    prev.map(t => t.id === id ? {...t, ...updates} : t)
  );
  const updateShape = (id: string, updates: Partial<ShapeData>) => setShapes(prev => 
    prev.map(s => s.id === id ? {...s, ...updates} : s)
  );
  const updateImage = (id: string, updates: Partial<ImageData>) => setImages(prev => 
    prev.map(i => i.id === id ? {...i, ...updates} : i)
  );

  // Selection handlers
  const selectText = (id: string | null) => {
    setSelectedTextId(id);
    setSelectedShapeId(null);
    setSelectedImageId(null);
  };

  const selectShape = (id: string | null) => {
    setSelectedShapeId(id);
    setSelectedTextId(null);
    setSelectedImageId(null);
  };

  const selectImage = (id: string | null) => {
    setSelectedImageId(id);
    setSelectedTextId(null);
    setSelectedShapeId(null);
  };

  return {
    text, shapes, images,
    selectedTextId, selectedShapeId, selectedImageId,
    addText, addShape, addImage,
    deleteText, deleteShape, deleteImage,
    updateText, updateShape, updateImage,
    selectText, selectShape, selectImage,
    setText, setShapes, setImages
  };
};



export default useCanvasElements;