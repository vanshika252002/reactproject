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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9l7 7v9a2 2 0 0 1-2 2z" />
          <polyline points="9 17 12 20 22 10" />
        </svg>

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <line x1="5" y1="3" x2="21" y2="19" />
          <line x1="3" y1="5" x2="19" y2="21" />
          <line x1="9" y1="3" x2="21" y2="15" />
          <line x1="3" y1="9" x2="15" y2="21" />
          <line x1="13" y1="3" x2="21" y2="11" />
          <line x1="3" y1="13" x2="11" y2="21" />
        </svg>

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="5 19 12 6 19 19" />

          <circle cx="6" cy="6" r="2" />

          <rect x="19" y="20" width="4" height="4" />
        </svg>

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18"
            fontFamily="sans-serif"
            fill="currentColor"
          >
            T
          </text>
        </svg>

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="7" height="18" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
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
