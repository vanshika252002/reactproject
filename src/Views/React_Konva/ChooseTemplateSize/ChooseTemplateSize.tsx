import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './choosetemplatesize.css';

type SizeOption = {
  name: string;
  width: number;
  height: number;
};

const sizeOptions: SizeOption[] = [
  { name: 'Logo', width: 600, height: 600 },
  { name: 'Business Card', width: 1050, height: 600 },
  { name: 'US Legal', width: 816, height: 800 },
  { name: 'A5', width: 559, height: 794 },
  { name: 'A6', width: 397, height: 559 },
  { name: 'Custom', width: 750, height: 750 },
];
function ChooseTemplateSize() {
  const [selectedSize, setSelectedSize] = useState<SizeOption | null>(null);
  const navigate = useNavigate();

  const handleSizeSelect = (size: SizeOption) => {
    setSelectedSize(size);
  };

  const handleStartDesigning = () => {
    navigate('/konva', { state: { size: selectedSize } });
  };

  return (
    <div className="container">
      <div className="choose-template-size">
        <div className="title">
          <span className="title">Get started with a design size</span>
        </div>

        <div className="grid">
          {sizeOptions.map((size, index) => (
            <div
              key={index}
              className={`sizeOption ${
                selectedSize?.name === size.name ? 'sizeOptionSelected' : ''
              }`}
              onClick={() => handleSizeSelect(size)}
            >
              <h3 className="sizeName">{size.name}</h3>
              <p className="sizeDimensions">
                {size.width} × {size.height}
              </p>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={handleStartDesigning}
          className={`button ${!selectedSize ? 'buttonDisabled' : ''}`}
          disabled={!selectedSize}
        >
          Start Designing
        </button>

        {selectedSize && (
          <div className="selectedInfo">
            Selected: {selectedSize.name} ({selectedSize.width} ×{' '}
            {selectedSize.height})
          </div>
        )}
      </div>
    </div>
  );
}

export default ChooseTemplateSize;
