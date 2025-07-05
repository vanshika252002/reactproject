import './backgroundmenu.css';

function BackgroundMenu() {
  return (
    <div className="background-menu">
      <div className="background-op">
        <button type="button" className="btn-background">
          Solid
        </button>
        <button type="button" className="btn-background">
          Gradient
        </button>
        <button type="button" className="btn-background">
          My Backgrounds
        </button>
      </div>
    </div>
  );
}
export default BackgroundMenu;
