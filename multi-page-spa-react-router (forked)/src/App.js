import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetails';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';

// const routesDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={HomePage} />
//     <Route path="/products" element={ProductsPage} />
//   </Route>
// );

const router = createBrowserRouter([
  {
    path: '/root',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <HomePage /> },
      { path: 'products', element: <ProductsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
    ],
  },
]);

// const router = createBrowserRouter(routesDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
