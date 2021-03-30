/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

import Loading from "_pages/Loading";
import App from "./App";
import "_styles/index.scss";

//const isProd = process.env.NODE_ENV !== "dev";

/* Render App */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={Loading} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/* Register Service Worker */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js")
      .then(registration => {
        console.log("SW registered: ", registration);
      })
      .catch(registrationError => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
