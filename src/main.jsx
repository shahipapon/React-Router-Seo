import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Users from "./routes/users.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from './error-page.jsx';
import UserDetails from './routes/userDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path: "user/:userId",
    element: <UserDetails />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
