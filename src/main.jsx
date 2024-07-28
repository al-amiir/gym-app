import "./index.css";
import * as React from "react";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { router } from "./router/router";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//-----------------------------------------------------------------------

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
