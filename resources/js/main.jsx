
import './bootstrap';
import '../sass/app.scss';
import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";

const root = createRoot(document.getElementById("app"));

root.render(< Router><App /></Router>);