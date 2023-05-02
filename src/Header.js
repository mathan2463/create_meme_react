import React from "react";
import logo from "./images/m2.png";

export default function Header() {
  return (
    <header>
      <div className="logo-title">
        <img src={logo} alt="meme" />
        <h2 className="title">Meme Generator</h2>
      </div>
      <p className="course">Developed by Mathan</p>
    </header>
  );
}
