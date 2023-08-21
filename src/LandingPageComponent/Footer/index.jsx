import React from "react";
import logo from "../../Assets/logo.svg";
import "./footer.css";

export default function index() {
  return (
    <div className="footer">
      <div className="coloringDiv"></div>
      <div className="edgeSpacing">
      <div>
        <div className="upperPart d-flex align-items-baseline justify-content-between gap-5">
          <div className="introFooterContainer">
            <div className="appLogo d-flex align-items-center mb-3">
                <img src={logo} alt="logo img" />
                <h3 className="gradientPurple fw-bold">Eatly</h3>
            </div>
            <p>We have a mission to make people around the world better through a healthier diet</p>
          </div>
          <div className="d-flex gap-5">
          <div className="supTexts d-flex flex-column gap-3">
            <span className="titleText">About</span>
            <p>About Us</p>
            <p>Features</p>
            <p>News & Blog</p>
          </div>
          <div className="supTexts d-flex flex-column gap-3">
            <span className="titleText">Movement</span>
            <p>What Eatly</p>
            <p>Support Us</p>
          </div>
          <div className="supTexts d-flex flex-column gap-3">
            <span className="titleText">Company</span>
            <p>Why Eatly</p>
            <p>Capital</p>
            <p>Security</p>
          </div>
          <div className="supTexts d-flex flex-column gap-3">
            <span className="titleText">Support</span>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
         </div>
        </div>
      </div>
      <div className="d-flex align-items-baseline justify-content-between">
        <p>@2021 Eatly. All rights reserved</p>
        <div className="d-flex gap-4">
            <p>Terms & Agreements</p>
            <p>Privacy Policy</p>
        </div>
      </div>
      </div>
    </div>
  );
}
