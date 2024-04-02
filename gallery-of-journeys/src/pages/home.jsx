// import { RouterProvider, createBrowserRouter } from "react-router-dom";
import background from "./images/homebg.svg";
import React from "react";

export const Home = () => {
    return (
<div style= {{ backgroundImage: `url(${background})` }}>
    
    <div className="container">

    </div>
</div>
);
}
// export const Wrapper = ({ children }) => (
//     <RouterProvider router={createBrowserRouter([{path: '*', element: children}])} />
//   );
