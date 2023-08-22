import React, { useEffect } from "react";
import crown from "../../Assets/crown.png";
import Carousel from "./Carousel";
import rightArrow from "../../Assets/rightArrow.png";
import leftArrow from "../../Assets/leftArrow.png";
import "./section2.css";

export default function Index() {
  useEffect(() => {
    let items = document.querySelectorAll(".carousel .carousel-item");
    items.forEach((el) => {
      const minPerSlide = 3;
      let next = el.nextElementSibling;
      for (let i = 0; i < minPerSlide; i++) {
        if (!next) {
          next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
  }, []);
  return (
    <div className="section2 edgeSpacing pt-5">
      <div className="pt-4 d-flex align-items-center justify-content-between">
        <div className="title d-flex align-items-center gap-3 mb-3">
          <div className="smallIconContainer">
            <img className="smallIcon" src={crown} alt="crown" />
          </div>
          <span className="titleText">Our Best Programs</span>
        </div>
        <div className="d-flex gap-3 carouselButtonsContainer me-3">
          <a
            className=" bg-transparent "
            href="#recipeCarousel"
            role="button"
            data-bs-slide="prev"
          >
            <img src={leftArrow} alt="" />
          </a>
          <a
            className=" bg-transparent "
            href="#recipeCarousel"
            role="button"
            data-bs-slide="next"
          >
            <img src={rightArrow} alt="" />
          </a>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
