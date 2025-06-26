export const handleColorChange = (color: any, setSelectedColor: (color: string) => void) => {
    setSelectedColor(color.hex);
  };
  
  export const handleDragOver = (
    e: React.DragEvent,
    setDragOver: (value: boolean) => void
  ) => {
    e.preventDefault();
    setDragOver(true);
  };
  
  export const handleDragLeave = (
    e: React.DragEvent,
    setDragOver: (value: boolean) => void
  ) => {
    e.preventDefault();
    setDragOver(false);
  };
  
  export const handleDrop = (
    e: React.DragEvent,
    setDragOver: (value: boolean) => void,
    handleFileUpload: (files: FileList | null) => void
  ) => {
    e.preventDefault();
    setDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };