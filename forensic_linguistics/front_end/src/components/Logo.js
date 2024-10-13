import React from "react";
import "../style.css";
export default function Logo() {
  return (
    <div>
      <img
        src={require("../assets/logo.webp")}
        alt="logo"
        style={{ width: "50px" }}
      ></img>
    </div>
  );
}
