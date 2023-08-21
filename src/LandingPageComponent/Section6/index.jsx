import React from "react";
import openMail from "../../Assets/openMail.png";
import TestimonialsSlider from "./TestimonialsSlider";
import chatting from "../../Assets/chatting.png";
import section6HeroImg from "../../Assets/section6HeroImg.png";
import "./section6.css";

export default function Index() {
  return (
    <>
      <div className="section6 edgeSpacing d-flex pt-2 justify-content-between gap-5">
        <div className="leftSide w-50 mt-5 pt-5">
          <div className="heroImgLayout d-flex align-items-center justify-content-center">
            <img src={section6HeroImg} alt="" />
          </div>
        </div>
        <div className="rightSide w-50 mt-5 pt-5">
          <div className="titleIntro mb-5 ">
            <div className="title d-flex align-items-center gap-3 mb-3">
              <div className="smallIconContainer">
                <img
                  className="smallIcon"
                  src={openMail}
                  alt="clipboard icon"
                />
              </div>
              <span className="titleText">Testimonials About Us</span>
            </div>
            <p className="titleSupText">
              In the smallest case we always give your best, find out what other
              users have to say about us
            </p>
          </div>
          <div>
            <div id="testimonialsContainer" className="cardLayout">
              <TestimonialsSlider />
            </div>
            <div className="testimonialsIconContainer">
              <img className="testimonialsIcon" src={chatting} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="colorDiv"></div>
    </>
  );
}
