import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '/src/style.css';

import App from "./App";
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import Signup from "./pages/signup";


const router = createBrowserRouter([
    {

      path: '/',
      element: <App />,
      children: [
       {
          path: '/login',
          element: <Login />
        }, {
          path: '/signup',
          element: <Signup />
        },{
            path: '/subscribe',
            element: <Subscription />
          },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );


