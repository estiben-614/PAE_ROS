import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css'
import { ConfigProvider } from "antd";
import MainLayout from "../MainLayout.jsx";
import { createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/about",
//     element: <h1>Holardas</h1>,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}> */}
      <ConfigProvider>
        <MainLayout />
      </ConfigProvider>
    {/* </RouterProvider> */}
  </React.StrictMode>
);
