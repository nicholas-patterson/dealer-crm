// React and ReactDOM imports
import React from "react";
import ReactDOM from "react-dom";
// Main Sass file import
import "./sass/main.scss";
// App.js import
import App from "./App";
// Provider import
import { Provider } from "react-redux";
import configureStore from "./Persistor";
import { PersistGate } from "redux-persist/integration/react";
const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
