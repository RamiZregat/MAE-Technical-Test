import React from "react";
import Chef from "../../Assets/chef.png";
import learnMorePlay from "../../Assets/learnMorePlay.png";

export default function Carousel() {
  const carouselCounterArr = [1, 2, 3, 4, 5, 6];
  return (
    <div className="text-center mb-3 mt-4">
      <div className="row mx-auto my-auto justify-content-center ">
        <div id="recipeCarousel" className="carousel slide mt-4">
          <div className="carousel-inner" role="listbox">
            {carouselCounterArr.map((num, index) => (
              <div
                key={num}
                className={`carousel-item ${index === 0 && "active"}`}
              >
                <div className="col-md-3 carouselContainer">
                  <div className="cardContainer d-flex justify-content-center">
                    <div className="cardInner my-4 d-flex align-items-center w-100">
                      <div className=" my-2 d-flex flex-column align-items-center gap-3">
                        <div className="carouselIconContainer">
                          <img
                            className="carouselInnerIcons"
                            src={Chef}
                            alt=""
                          />
                        </div>
                        <span className="cardTitle">Healthy Recipe</span>
                        <p>Healthier Recipes, from food & nutrition experts</p>
                        <div className="d-flex align-items-center gap-2">
                          <span className="learnMore">Learn More</span>
                          <img
                            className="learnMoreIcon"
                            src={learnMorePlay}
                            alt="learn more"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
