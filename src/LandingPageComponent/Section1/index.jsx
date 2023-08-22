import React from "react";
import Header from "../Header";
import playButton from "../../Assets/play_button.png";
import lotus from "../../Assets/lotus.png";
import feather from "../../Assets/feather.png";
import section1HeroImg from "../../Assets/section1HeroImg.png";
import "./section1.css";

export default function index() {
  return (
    <div className="section1">
      <div className="part1 edgeSpacing pb-3">
          <Header />
      <div className="d-flex justify-content-between pb-5 ">
        <div className="leftSide">
        <div className="headerContainer pb-5">
        </div>
        <div className="fw-bold introText py-4">
          <h1>Changing</h1>
          <div className="d-flex align-items-center">
            <h1 className="me-4">your</h1>{" "}
            <div className="dropping-texts lightYellow"></div>
          </div>
          <h1>habits</h1>
        </div>
        <div className="pb-5">
          <p>
            Always take care of your health starting from <br /> the food menu
            that you consume every day
          </p>
        </div>
        <div className="buttonsContainer d-flex gap-5">
          <div className="btnDiv">
            <button className="buttonColor btn">Explore Menu</button>
          </div>
          <div className="playBtnDiv d-flex align-items-center gap-3">
            <button className="btn playButton d-flex align-items-center justify-content-center">
              <img
                className="playButtonImg"
                src={playButton}
                alt="play button"
              />
            </button>
            <p className="fullWidth">Watch Video</p>
          </div>
        </div>
        </div>
        <div className="rightSide">
          <div className="heroImgLayout d-flex align-items-center justify-content-center">
            <img src={section1HeroImg} alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="part2 edgeSpacing">
        <div className="w-50 d-flex gap-4 align-items-center h-100">
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
              <img className="featherImg" src={feather} alt="feather logo" />
              <span className="part2LogoText bigLogoText">emerson</span>
            </div>
            <span className="part2LogoText">ecologics</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img className="loutsImg" src={lotus} alt=" lotus logo" />
            <span className="part2LogoText bigLogoText">HERBALIFE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
