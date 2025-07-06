import { IMAGES } from '../../../assets';
import { FilterButtonsProps } from './types';

function FilterButtons({
  activeFilter,
  setActiveFilter,
  handleDownload,
}: FilterButtonsProps) {
  return (
    <div className="filters">
      <button
        className={`filter-btn${activeFilter === 'save' ? '-active' : ''}`}
        onClick={() => setActiveFilter(activeFilter === 'save' ? null : 'save')}
      >
      <img src={IMAGES.SAVE}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'save' ? null : '-active'
          }`}
        >
          Save
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'download' ? '-active' : ''}`}
        onClick={() => {
          setActiveFilter(activeFilter === 'download' ? null : 'download');
          handleDownload();
        }}
      >
        <img src={IMAGES.DOWNLOAD}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'download' ? null : '-active'
          }`}
        >
          Download
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'color' ? '-active' : ''}`}
        onClick={() =>
          setActiveFilter(activeFilter === 'color' ? null : 'color')
        }
      >
       <img src={IMAGES.BACKGROUND}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'color' ? null : '-active'
          }`}
        >
          Background
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'shape' ? '-active' : ''}`}
        onClick={() =>
          setActiveFilter(activeFilter === 'shape' ? null : 'shape')
        }
      >
        <img src={IMAGES.SHAPES}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'shape' ? null : '-active'
          }`}
        >
          Shapes
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'image' ? '-active' : ''}`}
        onClick={() =>
          setActiveFilter(activeFilter === 'image' ? null : 'image')
        }
      >
        <img  src={IMAGES.UPLOAD}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'image' ? null : '-active'
          }`}
        >
          Upload
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'text' ? '-active' : ''}`}
        onClick={() => setActiveFilter(activeFilter === 'text' ? null : 'text')}
      >
       <img src={IMAGES.TEXT}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'text' ? null : '-active'
          }`}
        >
          Text
        </span>
      </button>
      <button
        className={`filter-btn${activeFilter === 'template' ? '-active' : ''}`}
        onClick={() =>
          setActiveFilter(activeFilter === 'template' ? null : 'template')
        }
      >
       <img src={IMAGES.TEMPLATE}/>
        <span
          className={`filter-btn-title${
            activeFilter === 'template' ? null : '-active'
          }`}
        >
          Templates
        </span>
      </button>
    </div>
  );
}

export default FilterButtons;
