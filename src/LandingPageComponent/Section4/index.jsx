import React from "react";
import "./section4.css";
import flag from "../../Assets/flag.png";

export default function Index() {
  return (
    <div className="section4 edgeSpacing pt-5">
      <div className="outerLayout">
        <div className="contentContainer d-flex flex-column align-items-center gap-3">
          <div className="smallIconContainer mb-2">
            <img className="smallIcon darkPurpleBg" src={flag} alt="icon" />
          </div>
          <span className="title">
            Get Started With
            <span className="darkYellow"> Eatly</span>
          </span>
          <p className="supText mb-2">
            Discover tips & news for your health from experts and get the best
            discounts by getting started
          </p>
          <div className="btnDiv">
            <button className="btn buttonColor">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
