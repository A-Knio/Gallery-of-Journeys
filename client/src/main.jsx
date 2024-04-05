import ReactDOM from 'react-dom/client';
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from './pages/profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import '/src/style.css';

const router = createBrowserRouter([
    {

      path: '/',
      element: <App />,
      children: [
        {
          path: '/profile',
          element: <Profile />
        },
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

