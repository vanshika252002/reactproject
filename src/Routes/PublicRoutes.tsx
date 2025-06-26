import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
import Dashboard from '../Views/Dashboard/Dashboard';
import { CustomRouter } from './RootRoutes';

// import CardWrapper from '../Views/CardWrapper';

export const PUBLIC_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.HOMEPAGE.path,
    element: <Dashboard />,
    title: ROUTES_CONFIG.HOMEPAGE.title,
  },
  // {
  //   path: `${ROUTES_CONFIG.CARD_WRAPPER.path}`,
  //   title: ROUTES_CONFIG.CARD_WRAPPER.title,
  //   element: <CardWrapper />,
  // },
  // {
  //   path: ROUTES_CONFIG.SIGNUP.path,
  //   title: ROUTES_CONFIG.SIGNUP.title,
  //   element: <SignUp />,
  // },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PUBLIC} />,
    title: 'Rendering wildcard',
  },
];
