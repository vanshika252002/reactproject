import { AppLayoutProps } from '../AppLayout.d';
import Navbar from '../Public/Navbar';
import Body from '../../../Views/body/Body';

function PrivateLayout({ children }: AppLayoutProps): JSX.Element {
  return (
    <>
      <Navbar />
      <Body />
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PrivateLayout;
