// Ensure correct import order
import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App"; // Importing App component after dependencies
import { BrowserRouter, RouterProvider } from "react-router-dom";
// import App from "./App";
import { routeradmin } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routeradmin} />
  </React.StrictMode>
);
