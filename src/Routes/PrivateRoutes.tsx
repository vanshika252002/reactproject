import { Navigate } from 'react-router-dom';
import { ROUTES_CONFIG, WILDCARD_ROUTES } from '../Shared/Constants';
// import CardWrapper from '../Views/CardWrapper';
import { CustomRouter } from './RootRoutes';
import CustomizeCard from '../Views/DynamicCss/CustomizeCard';
// import CustomizeImage from '../Views/DynamicCss/CustomizeImage';
import CardWrapper from '../Views/React_Konva/CardWrapper/CardWrapper';
import ChooseTemplateSize from '../Views/React_Konva/ChooseTemplateSize/ChooseTemplateSize';

// eslint-disable-next-line import/prefer-default-export
export const PRIVATE_ROUTES: Array<CustomRouter> = [
  {
    path: ROUTES_CONFIG.ABOUT.path,
    element: '<ABOUT />',
    title: ROUTES_CONFIG.ABOUT.title,
  },
  {
    path: '/wishlist',
    element: 'Your wishlist here',
    title: 'Dashboard',
  },
  // {
  //   path: ROUTES_CONFIG.CARD_WRAPPER.path,
  //   title: ROUTES_CONFIG.CARD_WRAPPER.title,
  //   element: <CardWrapper />,
  // },
  {
    path: ROUTES_CONFIG.CUSTOMIZE.path,
    title: ROUTES_CONFIG.CUSTOMIZE.title,
    element: <CustomizeCard />,
  },
  {
    path: ROUTES_CONFIG.KONVA.path,
    title: ROUTES_CONFIG.KONVA.title,
    element: <CardWrapper />,
  },
  {
    path: ROUTES_CONFIG.TEMPLATE.path,
    title: ROUTES_CONFIG.TEMPLATE.title,
    element: <ChooseTemplateSize />,
  },
  // {
  //   path: ROUTES_CONFIG.CUSTOMIZE_IMAGE.path,
  //   title: ROUTES_CONFIG.CUSTOMIZE_IMAGE.title,
  //   element: <CustomizeImage />,
  // },
  {
    path: '*',
    element: <Navigate to={WILDCARD_ROUTES.PRIVATE} />,
    title: 'Rendering wildcard',
  },
];
