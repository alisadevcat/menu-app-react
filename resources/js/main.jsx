import "./bootstrap";
import "../sass/app.scss";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
const app = createRoot(document.getElementById("app"));

app.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);
