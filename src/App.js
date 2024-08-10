

import './App.css';
import Protected from './features/auth/componets/Protected';

import ProductDetail from "./features/product -list/components/ProductDetail";
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
import ProductDetailPage from './pages/ProductDetailPage';
import Signuppage from './pages/Signuppage';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';

import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilepage';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import { fetchLoggedInUserAsync } from './features/User/userSlice';

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
  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
    ),
  },
  {
    path: '/profile',
    element: (
       <UserProfilePage> </UserProfilePage>

    ),
  },
  {
    path: '*',
    element:(
    <PageNotFound></PageNotFound>
    ),
  },
]);




function App() {


const dispatch =useDispatch();
  const user = useSelector(selectLoggedInUser);
  useEffect(()=>{
    if(user){
    dispatch(fetchItemsByUserIdAsync(user.id))
    dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch,user])

  return (
    <div className="App">
      
      <RouterProvider router={router} />

      

    </div>
  )
}

export default App;
