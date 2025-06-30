import './constentmenu.css';

const ContentMenu = () => {
  return (
    <div className="menu">
      <div className="layers-controlling">
        <button className="send-backward">Send Backward</button>
        <button className="send-to-bottom">Send to Bottom</button>
        <button className="bring-forward">Bring Forward</button>
        <button className="bring to top">Bring to Top</button>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};
export default ContentMenu;
