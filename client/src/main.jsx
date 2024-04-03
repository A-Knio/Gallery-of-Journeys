import ReactDOM from 'react-dom/client';
import Subscription from "./pages/subscription";
import Login from "./pages/login";
import Signup from "./pages/signup";
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    },
    {
        path:'/signup',
        element:<Signup />
    },
    {
        path:'/subsctibe',
        element:<Subscription />
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
)
