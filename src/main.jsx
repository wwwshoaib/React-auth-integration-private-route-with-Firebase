import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home";
import Root from "./layouts/Root";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Register2 from "./components/Register2/Register2";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import AuthProvider from "./providers/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/register2",
        element: <Register2></Register2>
      },
    ]
  },
  {
    path: "/about",
    element: <div className="flex  justify-center text-3xl text-red-400 items-center p-6">I am now at about page</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* This AuthProvider has been collected from AuthProvider as a useContext */}
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>
);