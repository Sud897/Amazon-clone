import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./App";
import { AuthProvider } from "./store/AuthProvider";
import { rootReducers } from "./store/reducers";
import '../src/utils/i18n'
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducers, applyMiddleware(thunk));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
