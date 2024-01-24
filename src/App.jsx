import React from "react";
// import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "./pages/users.jsx";

import { HelmetProvider } from "react-helmet-async";
import ErrorPage from "./error-page.jsx";
import Home from './pages/Home.jsx';
import UserDetails from "./pages/userDetails.jsx";
import './App.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,

    //   children:[
    //     {
    // path: "/users",
    // element: <Users/>,
    // },
    // {
    //   path: "/user/:userId",
    //   element: <UserDetails />,
    // },
    //   ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/user/:userId",
    element: <UserDetails />,
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//   //   <HelmetProvider>
//   //     <RouterProvider router={router} />
//   //   </HelmetProvider>
//   // </React.StrictMode>
//   <App/>
// );

const App = () => {
  return (
    
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>

  );
};


export default App;
