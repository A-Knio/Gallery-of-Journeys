import ReactDOM from 'react-dom/client';
import Landingpage from './pages/landingpage';
import Explore from './pages/explore';
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import EditProfile from './pages/profile';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from "./App";
import '/src/style.css';
import Auth from './utils/auth';
import { Navigate } from 'react-router';
import Signupform from './components/signupform';

const router = createBrowserRouter([
    {

      path: '/',
      element: 
      // Auth.loggedIn() ? <Navigate to='/' replace='true'/> : 
      <App />,
      children: [
        {
          index: true, 
          element: <Landingpage />
        },
        {
          path: '/explore',
          element: <Explore />
        },
        {
          path: '/profile',
          element: Auth.loggedIn() ? (
            // Auth.hasUser() ? (
              <EditProfile />
              // Auth.hasPhoto() ? (
              //   <Profile />
              // ) : (
              //   <Navigate to="/subscribe" />
              // )
            ) : (
              <Navigate to="/login" />
            )
          // ) : (
          //   <Navigate to="/" />
          // )
        },
       {
          path: '/login',
          element: <Login />
        }, {
          path: '/signupform',
          element: <Signupform/>
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
