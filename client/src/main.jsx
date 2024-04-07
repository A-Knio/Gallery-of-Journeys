import ReactDOM from 'react-dom/client';
import Landingpage from './pages/landingpage';
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Profile from './pages/profile';
import Signupform from './components/signupform';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import '/src/style.css';
import Auth from './utils/auth';
import { Navigate } from 'react-router';

const router = createBrowserRouter([
    {

      path: '/',
      element: Auth.loggedIn() ? <Navigate to='/Profile' replace='true'/> : <App />,
      children: [
        {
          index: true, 
          element: <Landingpage />
        },
        {
          path: '/profile',
          element: Auth.loggedIn() ? (
            Auth.hasUser() ? (
              Auth.hasPhoto() ? (
                <Profile />
              ) : (
                <Navigate to="/subscribe" />
              )
            ) : (
              <Navigate to="/login" />
            )
          ) : (
            <Navigate to="/" />
          )
        },
       {
          path: '/login',
          element: <Login />
        },
{
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
