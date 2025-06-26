import { SketchPicker } from '@hello-pangea/color-picker';
import { useEffect, useRef } from 'react';
import { Text as KonvaText } from 'konva/lib/shapes/Text';
import Konva from 'konva';

const TextComponent = ({
  deleteSelectedText,
  handleTextClick,
  text,
  bringToFront,
  moveForward,
  moveBackward,
  sendToBack,
  selectedText,
  textInput,
  setTextInput,
  addText,
  textFontSize,
  setTextFontSize,
  selectedTextId,
  updateTextProperty,
  textFontWeight,
  setTextFontWeight,
  textFontFamily,
  setTextFontFamily,
  textColor,
  handleTextColorChange,
}: any) => {
  const textRef = useRef<KonvaText>(null);
  const transformerRef = useRef<Konva.Transformer>(null);

  // Update transformer when selected text changes
  useEffect(() => {
    if (selectedTextId && transformerRef.current && textRef.current) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer()?.batchDraw();
    } else if (transformerRef.current) {
      transformerRef.current.nodes([]);
      transformerRef.current.getLayer()?.batchDraw();
    }
  }, [selectedTextId]);
  return (
    <div className="text-options">
      <h4>Add Text</h4>

      <div className="text-input-section">
        <div className="input-group">
          <label>Enter Text:</label>
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder="Type your text here..."
            onKeyPress={(e) => {
              if (e.key === 'Enter' && textInput.trim()) {
                addText();
              }
            }}
          />
          <button
            className="add-text-btn"
            onClick={addText}
            disabled={!textInput.trim()}
          >
            Add Text
          </button>
        </div>
      </div>

      <div className="text-properties">
        <h4>Text Properties</h4>

        <div className="property-group">
          <label>Font Size:</label>
          <div className="text-property">
            <input
              className="input-font-size"
              type="number"
              min="8"
              max="100"
              value={textFontSize}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setTextFontSize(value);
                if (selectedTextId) {
                  updateTextProperty('fontSize', value);
                }
              }}
            />
            <span>px</span>
          </div>
        </div>

        <div className="property-group">
          <label>Font Weight:</label>
          <select
            className="font-weight-property"
            value={textFontWeight}
            onChange={(e) => {
              setTextFontWeight(e.target.value);
              if (selectedTextId) {
                updateTextProperty('fontStyle', e.target.value);
              }
            }}
          >
            <option value="normal">Normal</option>
            <option value="bold">Bold</option>
            <option value="lighter">Light</option>
            <option value="bolder">Extra Bold</option>
          </select>
        </div>

        <div className="property-group">
          <label>Font Family:</label>
          <select
            className="font-family-property"
            value={textFontFamily}
            onChange={(e) => {
              setTextFontFamily(e.target.value);
              if (selectedTextId) {
                updateTextProperty('fontFamily', e.target.value);
              }
            }}
          >
            <option value="Arial">Arial</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Verdana">Verdana</option>
            <option value="Courier New">Courier New</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Impact">Impact</option>
            <option value="Trebuchet MS">Trebuchet MS</option>
            <option value="Palatino">Palatino</option>
          </select>
        </div>

        <div className="color-controls">
          <label>Color:</label>
          <SketchPicker
            color={textColor}
            onChangeComplete={handleTextColorChange}
          />
        </div>
      </div>

      {selectedText && (
        <div className="selected-text">
          <h4>Selected Text: "{selectedText.text}"</h4>

          <div className="property-group">
            <label>Edit Text:</label>
            <input
              type="text"
              value={selectedText.text}
              onChange={(e) => updateTextProperty('text', e.target.value)}
              placeholder="Edit text content..."
            />
          </div>

          <div className="text-style-controls">
            <div className="property-group">
              <label>Font Size:</label>
              <div className="text-property">
                <input
                  className="input-font-size"
                  type="range"
                  min="8"
                  max="100"
                  value={selectedText.fontSize}
                  onChange={(e) =>
                    updateTextProperty('fontSize', parseInt(e.target.value))
                  }
                />
                <span>px</span>
              </div>
            </div>

            <div className="property-group">
              <label>Font Weight:</label>
              <select
                className="font-weight-property"
                value={selectedText.fontStyle}
                onChange={(e) =>
                  updateTextProperty('fontStyle', e.target.value)
                }
              >
                <option value="normal">Normal</option>
                <option value="bold">Bold</option>
                <option value="lighter">Light</option>
                <option value="bolder">Extra Bold</option>
              </select>
            </div>

            <div className="property-group">
              <label>Font Family:</label>
              <select
                value={selectedText.fontFamily}
                onChange={(e) =>
                  updateTextProperty('fontFamily', e.target.value)
                }
              >
                <option value="Arial">Arial</option>
                <option value="Helvetica">Helvetica</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Verdana">Verdana</option>
                <option value="Courier New">Courier New</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Impact">Impact</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Palatino">Palatino</option>
              </select>
            </div>
          </div>

          <div className="z-index-controls">
            <h4>Layer Controls</h4>
            <div className="z-index-buttons">
              <button onClick={bringToFront} className="layer-btn">
                Bring to Front
              </button>
              <button onClick={moveForward} className="layer-btn">
                Move Forward
              </button>
              <button onClick={moveBackward} className="layer-btn">
                Move Backward
              </button>
              <button onClick={sendToBack} className="layer-btn">
                Send to Back
              </button>
            </div>
            <div className="property-group">
              <label>Z-Index:</label>
              <input
                type="number"
                value={selectedText.zIndex}
                onChange={(e) =>
                  updateTextProperty('zIndex', parseInt(e.target.value))
                }
                style={{ width: '60px', marginLeft: '8px' }}
              />
            </div>
          </div>

          <div className="delete-text">
            <button onClick={deleteSelectedText} className="delete-btn">
              Delete Text
            </button>
          </div>
        </div>
      )}

      {text.length > 0 && (
        <div className="text-list">
          <h4>Text Elements ({text.length})</h4>
          <div className="text-items">
            {text.map((textItem: any) => (
              <div
                key={textItem.id}
                className={`text-item ${
                  selectedTextId === textItem.id ? 'selected' : ''
                }`}
                onClick={() => handleTextClick(textItem.id)}
              >
                <div className="text-preview">
                  <span
                    style={{
                      fontFamily: textItem.fontFamily,
                      fontSize: `${Math.min(textItem.fontSize, 16)}px`,
                      fontWeight: textItem.fontStyle,
                      color: textItem.fill,
                    }}
                  >
                    {textItem.text.length > 20
                      ? textItem.text.substring(0, 20) + '...'
                      : textItem.text}
                  </span>
                </div>
                <div className="text-info">
                  <small>
                    {textItem.fontFamily} • {textItem.fontSize}px •{' '}
                    {textItem.fontStyle}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default TextComponent;
