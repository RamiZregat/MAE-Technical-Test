import React from "react";
import clipBoard from "../../Assets/clipBoard.png";
import Scroll from "./Scroll";
import RecipeCarousel from "./RecipeCarousel";
import "./section5.css";

export default function Index() {
  return (
    <div className="section5 edgeSpacing d-flex pb-5">
      <div className="leftSide">
        <div className="titleIntro mb-5">
          <div className="title d-flex align-items-center gap-3 mb-3">
            <div className="smallIconContainer">
              <img className="smallIcon" src={clipBoard} alt="clipboard icon" />
            </div>
            <span className="titleText">Try Our Healthy Menu</span>
          </div>
          <p className="titleSupText">
            We provide a variety of healthy recipes that have been curated by
            our best nutritionists for you
          </p>
        </div>
        <Scroll />
      </div>
      <div className="rightSide ps-3 ms-4 pb-4">
        <RecipeCarousel />
      </div>
    </div>
  );
}
