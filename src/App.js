

import './App.css';
import Cart from './features/cart/Cart';
import Home from './pages/Home';
import Loginpage from './pages/Loginpage';
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
    element: <Cart></Cart>
  }
]);




function App() {
  return (
    <div className="App">
      
      <RouterProvider router={router} />

      

    </div>
  )
}

export default App;
