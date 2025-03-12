import PrivateLayout from './Private/PrivateLayout';
import PublicLayout from './Public/PublicLayout';
import { AppLayoutProps } from './AppLayout.d';
import Header from '../../Views/Header';
function AppLayout({ isAuthenticated, children }: AppLayoutProps) {
  return(<div>
    <Header/>
   { isAuthenticated ? 
    <PrivateLayout>{children}</PrivateLayout>
   : 
    <PublicLayout>{children}</PublicLayout>}
  
  </div>)
}

export default AppLayout;
