import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import RootRouter from './Routes/RootRouter';
import Header from './Views/Header';

const baseName = import.meta.env.VITE_BASE_NAME;

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<RootRouter />} />),
  { basename: baseName }
);

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
   <div>
    
     <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HelmetProvider>
          <RouterProvider router={router} />
          <Header/>
        </HelmetProvider>
      </PersistGate>
    </Provider>
   </div>
  );
}

export default App;
