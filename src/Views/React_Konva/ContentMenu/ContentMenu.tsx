import './constentmenu.css';

function ContentMenu() {
  return (
    <div className="menu">
      <div className="layers-controlling">
        <button type="button" className="send-backward">
          Send Backward
        </button>
        <button type="button" className="send-to-bottom">
          Send to Bottom
        </button>
        <button type="button" className="bring-forward">
          Bring Forward
        </button>
        <button type="button" className="bring to top">
          Bring to Top
        </button>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
}
export default ContentMenu;
