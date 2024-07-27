

import './App.css';

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
    element: (<Home></Home>)

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
    element: <CartPage></CartPage>
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>
  },
  {
    path: "/product-detail",
    element: <ProductDetailPage></ProductDetailPage>
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
