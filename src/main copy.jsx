import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Users from "./pages/users.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorPage from "./error-page.jsx";
import UserDetails from "./pages/userDetails.jsx";
import { Helmet, HelmetProvider } from "react-helmet-async";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,

//   //   children:[
//   //     {
// path: "/users",
// element: <Users/>,
//   // },
//   // {
//   //   path: "/user/:userId",
//   //   element: <UserDetails />,
//   // },
//   //   ],
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/users",
//     element: <Users/>,
//   },
//   {
// path: "/user/:userId",
// element: <UserDetails />,
//   },

// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:userId" element={<UserDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  </React.StrictMode>
);