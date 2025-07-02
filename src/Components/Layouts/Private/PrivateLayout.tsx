// import CardWrapper from '../../../Views/CardWrapper';
import { AppLayoutProps } from '../AppLayout.d';
import { IMAGES } from '../../../assets';
import '../../../App.css';
// import Navbar from '../Public/Navbar';

function PrivateLayout({ children }: AppLayoutProps): JSX.Element {
  console.log(children);
  return (
    <div className="root">
      <div className="title-project">
        <img src={IMAGES.LOGO} />
      </div>
      {children}
    </div>
  );
}

export default PrivateLayout;
