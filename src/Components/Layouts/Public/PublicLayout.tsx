// import CardWrapper from '../../../Views/CardWrapper';
import { AppLayoutProps } from '../AppLayout.d';
// import Navbar from './Navbar';

function PublicLayout({ children }: AppLayoutProps): JSX.Element {
  console.log('here i am ');
  return (
    <>
      {children}
      {/* <Footer /> */}
    </>
  );
}

export default PublicLayout;
