import { useLocation } from 'react-router-dom';
// import '../../App.css';

function CustomizeCard() {
  const location = useLocation();
  const { srcUrl } = location.state || {};

  if (!srcUrl) return <div>No image selected.</div>;

  return (
    <div className="customize-card-wrapper">
      <div className="customize-content">customize it</div>
      <div className="customize-image">
        <img src={srcUrl} alt="Customized Card" />
      </div>
    </div>
  );
}
export default CustomizeCard;
