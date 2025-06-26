// import CardWrapper from '../../../Views/CardWrapper';
import { AppLayoutProps } from '../AppLayout.d';
import '../../../App.css';
// import Navbar from '../Public/Navbar';

function PrivateLayout({ children }: AppLayoutProps): JSX.Element {
  console.log(children);
  return <div className="root">{children}</div>;
}

export default PrivateLayout;
