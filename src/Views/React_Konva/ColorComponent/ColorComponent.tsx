import { useRef } from 'react';
import { SketchPicker } from '@hello-pangea/color-picker';
import { ColorComponentProps } from './types';

function ColorComponent({
  selectedColor,
  handleColorChange,
  handleFileUpload,
  backgroundImage,
  setBackgroundImage,
  setSelectedColor,
}: ColorComponentProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="color-picker-container">
      <div className="add-colors">
        <h4 className="color-title">Color</h4>
        <SketchPicker
          color={selectedColor}
          onChangeComplete={handleColorChange}
        />
      </div>
      <div className="background-image-upload">
        <h4 className="color-title">Background Image</h4>
        <div className="upload-wrapper">
          <input
            ref={fileInputRef}
            className="choose-file"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e.target.files)}
          />
          {backgroundImage && (
            <button
              type="button"
              onClick={() => {
                setBackgroundImage(null);
                setSelectedColor('#ffffff');
                if (fileInputRef.current) {
                  fileInputRef.current.value = '';
                }
              }}
              className="delete-btn"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ColorComponent;
