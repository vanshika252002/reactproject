import { SketchPicker } from '@hello-pangea/color-picker';
import './fancytextpanel.css';

const FancyTextPanel = ({
  selectedTextId,
  updateTextProperty,
  setActivePanel,
}: {
  selectedTextId: string | null;
  updateTextProperty: (property: string, value: any) => void;
  setActivePanel: (panel: string) => void;
}) => {
  const fancyStyles = [
    { name: 'Button', value: 'button', previewClass: 'button-preview' },
    { name: 'STEEL', value: 'steel', previewClass: 'steel-preview' },
    { name: 'Candy', value: 'candy', previewClass: 'candy-preview' },
    { name: 'TECHNO', value: 'techno', previewClass: 'techno-preview' },
    { name: 'Gradient', value: 'gradient', previewClass: 'gradient-preview' },
    { name: 'PHP', value: 'php', previewClass: 'php-preview' },
    { name: 'FROZEN', value: 'frozen', previewClass: 'frozen-preview' },
  ];

  const fontFamilies = [
    'Firstream',
    '#rbatide Resin',
    'Berlpline Swash',
    'Bevan',
    'Big Apple',
    'BISTER TRAFFIC',
    'BOWLBY ONE',
    'Bree Serif',
    'Rabbit Bug',
  ];

  const applyStyle = (style: string) => {
    if (!selectedTextId) return;

    // Reset all fancy properties first
    updateTextProperty('outlineColor', '');
    updateTextProperty('outlineWidth', 0);
    updateTextProperty('shadowColor', '');
    updateTextProperty('shadowBlur', 0);
    updateTextProperty('shadowOffsetX', 0);
    updateTextProperty('shadowOffsetY', 0);
    updateTextProperty('fill', '#000000');

    // Apply specific style properties
    switch (style) {
      case 'button':
        updateTextProperty('outlineColor', '#000000');
        updateTextProperty('outlineWidth', 2);
        updateTextProperty('shadowColor', 'rgba(0,0,0,0.5)');
        updateTextProperty('shadowBlur', 5);
        updateTextProperty('shadowOffsetX', 2);
        updateTextProperty('shadowOffsetY', 2);
        break;
      case 'steel':
        updateTextProperty('fill', 'linear-gradient(#e6e6e6, #999999)');
        updateTextProperty('outlineColor', '#333333');
        updateTextProperty('outlineWidth', 1);
        break;
      case 'candy':
        updateTextProperty('fill', 'linear-gradient(#ff9a9e, #fad0c4)');
        updateTextProperty('shadowColor', 'rgba(255,154,158,0.5)');
        updateTextProperty('shadowBlur', 10);
        break;
      // Add other style cases...
      default:
        break;
    }
  };

  return (
    <div className="fancy-text-panel">
      <div className="panel-header">
        <h3>Fancy Text Styles</h3>
        <button onClick={() => setActivePanel('main')}>Back</button>
      </div>

      <div className="styles-grid">
        {fancyStyles.map((style) => (
          <div
            key={style.value}
            className="style-option"
            onClick={() => applyStyle(style.value)}
          >
            <div className={`style-preview ${style.previewClass}`}>
              {style.name}
            </div>
            <span>{style.name}</span>
          </div>
        ))}
      </div>

      <div className="font-family-section">
        <h4>Fonts</h4>
        <div className="font-list">
          {fontFamilies.map((font) => (
            <div
              key={font}
              className="font-option"
              onClick={() => updateTextProperty('fontFamily', font)}
              style={{ fontFamily: font }}
            >
              {font}
            </div>
          ))}
        </div>
      </div>

      <div className="text-properties">
        <h4>Text Properties</h4>
        <div className="color-picker">
          <label>Text Color:</label>
          <SketchPicker
            color={'#000000'}
            onChangeComplete={(color) => updateTextProperty('fill', color.hex)}
          />
        </div>
      </div>
    </div>
  );
};

export default FancyTextPanel;
