import { Provider } from 'react-redux';
import './App.css';
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
import '@fortawesome/fontawesome-free/css/all.min.css';
const baseName = import.meta.env.VITE_BASE_NAME;

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="*" element={<RootRouter />} />),
  { basename: baseName }
);

function App() {
  // const [count, setCount] = useState<number>(0);
  return (
    <div className="outer-root">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <HelmetProvider>
            <RouterProvider router={router} />
          </HelmetProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
