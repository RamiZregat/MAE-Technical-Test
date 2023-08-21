import React from "react";
import "./header.css";
import logo from "../../Assets/logo.svg";

export default function header() {
  return (
    <header className="appHeader d-flex align-items-center justify-content-between">
      <div className="appLogo d-flex align-items-center">
        <img src={logo} alt="logo img" />
        <h3 className="gradientYellow fw-bold">Eatly</h3>
      </div>
      <nav className="appNavBar">
        <ul className="d-flex align-items-center w-100 gap-4">
          <li>
            <a href="#">Programs</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
        </ul>
      </nav>
      <div className="headerBtnContainer">
        <div className="btnDiv">
          <button className="buttonColor btn">Let's Talk</button>
        </div>
      </div>
    </header>
  );
}
