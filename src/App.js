

import './App.css';
import Protected from './features/auth/componets/Protected';

import ProductDetail from "./features/product -list/components/ProductDetail";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import ProductDetailPage from './pages/ProductDetailPage';
import Signuppage from './pages/Signuppage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Protected>
      <Home></Home>
    </Protected>,
  },
  {
    path: "/login",
    element: <Loginpage></Loginpage>
  },
  {
    path: "/signup",
    element: <Signuppage></Signuppage>
  },
  {
    path: "/cart",
    element: <Protected><CartPage></CartPage></Protected>,
  },
  {
    path: "/checkout",
    element:<Protected> <Checkout></Checkout></Protected>
  },
  {
    path: "/product-detail/:id",
    element:<Protected> <ProductDetailPage></ProductDetailPage></Protected>
  },
]);




function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />

      

    </div>
  )
}

export default App;
