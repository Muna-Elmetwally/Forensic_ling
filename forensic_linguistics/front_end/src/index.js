import React from "react";
import ReactDOM from "react-dom/client";
// import { Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./Header";
import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
    <Header />
  </div>
);
