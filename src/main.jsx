import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import rootes from "./routes";
import "./assets/css/tailwind.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={rootes}></RouterProvider>
);
