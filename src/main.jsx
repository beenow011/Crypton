import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, Exchange, News, Crypto, Details } from "./components/index.js";
import "antd/dist/antd.js";
import store from "./app/store.js";
import { Provider } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/exchanges",
        element: <Exchange />,
      },
      {
        path: "/Cryptocurrencies",
        element: <Crypto />,
      },
      {
        path: "/Crypto/:coinId",
        element: <Details />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
