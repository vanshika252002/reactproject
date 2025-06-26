import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import DocumentTitle from './DocumentTitle';
import { authenticatedRoutes, guestRoutes } from './config';
import AppLayout from '../Components/Layouts/AppLayout';
import type { RootState } from '../Store';

function RootRouter() {
  const guest = useRoutes(authenticatedRoutes); //useRoutes(guestRoutes);
  const authenticated = useRoutes(guestRoutes); // useRoutes(authenticatedRoutes);
  console.log('use route');

  const token = useSelector((state: RootState) => state?.common?.token);
  const isAuthenticated = true; //!!token;
  return (
    <>
      <DocumentTitle isAuthenticated={isAuthenticated} />
      <AppLayout isAuthenticated={isAuthenticated}>
        {token ? authenticated : guest}
      </AppLayout>
    </>
  );
}

export default RootRouter;
