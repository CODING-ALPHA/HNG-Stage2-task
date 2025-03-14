import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./components/Store.jsx";
import Cart from "./components/Cart.jsx";
import CheckOut from "./components/Checkout.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  // },
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "Cart",
    element: <Cart />,
  },
  {
    path: "CheckOut",
    element: <CheckOut />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
