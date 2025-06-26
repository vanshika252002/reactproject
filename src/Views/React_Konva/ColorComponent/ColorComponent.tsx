import { SketchPicker } from '@hello-pangea/color-picker';
const ColorComponent = ({
  selectedColor,
  handleColorChange,
  handleFileUpload,
  backgroundImage,
  setBackgroundImage,
  setSelectedColor,
}: any) => {
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
            className="choose-file"
            type="file"
            accept="image/*"
            onChange={(e) => handleFileUpload(e.target.files)}
          />
          {backgroundImage && (
            <button
              onClick={() => {
                setBackgroundImage(null);
                setSelectedColor('#ffffff');
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
};

export default ColorComponent;
