import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './choosetemplatesize.css';
type SizeOption = {
  name: string;
  width: string;
  height: string;
};

const sizeOptions: SizeOption[] = [
  { name: 'Flyer (US Letter)', width: '8.5in', height: '11in' },
  { name: 'Poster', width: '24in', height: '36in' },
  { name: 'Instagram Post', width: '1080px', height: '1080px' },
  { name: 'Instagram Reel', width: '1000px', height: '1920px' },
  { name: 'Album Cover', width: '1600px', height: '1600px' },
  { name: 'Logo', width: '600px', height: '600px' },
  { name: 'Business Card', width: '3.5in', height: '2in' },
];

const ChooseTemplateSize = () => {
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
      <h1 className="title">Choose Your Template Size</h1>

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
  );
};

export default ChooseTemplateSize;
