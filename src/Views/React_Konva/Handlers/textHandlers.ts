import { TextState } from '../types';

export const addText = (
  textInput: string,
  shapes: { zIndex: number }[],
  images: { zIndex: number }[],
  text: TextState[],
  textFontSize: number,
  textFontFamily: string,
  textFontWeight: string,
  textColor: string
): TextState | null => {
  if (!textInput.trim()) return null;

  const maxZIndex = Math.max(
    ...shapes.map((s) => s.zIndex),
    ...images.map((i) => i.zIndex),
    ...text.map((t) => t.zIndex),
    0
  );

  return {
    id: Date.now().toString(),
    text: textInput,
    x: Math.random() * 400 + 100,
    y: Math.random() * 500 + 100,
    fontSize: textFontSize,
    fontFamily: textFontFamily,
    fontStyle: textFontWeight,
    fill: textColor,
    zIndex: maxZIndex + 1,
    width: 200,
  };
};

export const handleTextDragEnd = (
  e: any, // KonvaEventObject<DragEvent>,
  textId: string,
  text: TextState[]
): TextState[] => {
  return text.map((textItem) => {
    if (textItem.id === textId) {
      return {
        ...textItem,
        x: e.target.x(),
        y: e.target.y(),
      };
    }
    return textItem;
  });
};

export const updateTextProperty = (
  text: TextState[],
  selectedTextId: string | null,
  property: keyof TextState,
  value: any
): TextState[] => {
  if (!selectedTextId) return text;
  
  return text.map((textItem) =>
    textItem.id === selectedTextId ? { ...textItem, [property]: value } : textItem
  );
};

export const deleteSelectedText = (
  text: TextState[],
  selectedTextId: string | null
): { text: TextState[]; selectedTextId: string | null } => {
  if (!selectedTextId) return { text, selectedTextId };
  
  return {
    text: text.filter((textItem) => textItem.id !== selectedTextId),
    selectedTextId: null,
  };
};