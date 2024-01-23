import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Users from "./pages/users.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error-page.jsx';
import UserDetails from './pages/userDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/React-Router-Seo/",
    element: <App/>,
  
  //   children:[
  //     {
  //   path: "/React-Router-Seo/users",
  //   element: <Users/>,
  // },
  // {
  //   path: "/React-Router-Seo/user/:userId",
  //   element: <UserDetails />,
  // },
  //   ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/React-Router-Seo/users",
    element: <Users/>,
  },
  {
    path: "/React-Router-Seo/user/:userId",
    element: <UserDetails />,
  },

]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
