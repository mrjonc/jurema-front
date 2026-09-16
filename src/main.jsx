import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";

import Login from "./pages/Login-Register/Login.jsx";
import Register from "./pages/Login-Register/Register.jsx"

import Feed from "./pages/Feed/Feed.jsx";
import Grupos from "./pages/Grupos/Grupos.jsx";
import Notas from "./pages/Notas/Notas.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/feed",
        element: <Feed />,
      },
      {
        path: "/grupos",
        element: <Grupos />,
      },
      {
        path: "/notas",
        element: <Notas />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
