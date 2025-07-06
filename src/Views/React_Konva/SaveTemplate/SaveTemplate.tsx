import { useState, useEffect } from 'react';
import { SaveTemplateProps } from './types';

function SaveTemplate({
  templateName,
  setTemplateName,
  handleSaveTemplate,
  isLoading,
  stageRef,
  generateThumbnail,
}: SaveTemplateProps) {
  const [previewThumbnail, setPreviewThumbnail] = useState<string | null>(null);

  const generatePreview = () => {
    if (stageRef?.current) {
      const thumbnail = generateThumbnail(stageRef);
      setPreviewThumbnail(thumbnail);
    }
  };

  useEffect(() => {
    const timer = setTimeout(generatePreview, 500);
    return () => clearTimeout(timer);
  }, [stageRef]);

  return (
    <div className="save-template-container">
      {previewThumbnail && (
        <div className="template-preview">
          <h5>Preview:</h5>
          <img
            src={previewThumbnail}
            alt="Template preview"
            className="preview-thumbnail"
          />
        </div>
      )}

      <div className="save-form">
        <input
          type="text"
          placeholder="Enter template name"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          className="template-name-input"
          maxLength={50}
        />
        <button
        type="button"
          onClick={handleSaveTemplate}
          disabled={isLoading || !templateName.trim()}
          className="save-btn"
        >
          {isLoading ? 'Saving...' : 'Save Template'}
        </button>
      </div>
    </div>
  );
}

export default SaveTemplate;
