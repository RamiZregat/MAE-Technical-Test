import React from "react";
import diamond from "../../Assets/diamond.png";
import heart from "../../Assets/heart.png";
import "./section3.css";
import section3HeroImg from "../../Assets/section3HeroImg.png";

export default function Index() {
  const cardsCounterArr = [1, 2, 3, 4];
  return (
    <div className="section3 edgeSpacing pt-5">
      <div className="d-flex pt-5 justify-content-between">
        <div className="leftSide w-50 mt-5 pt-5">
        <div className="heroImgLayout d-flex align-items-center justify-content-center">
            <img src={section3HeroImg} alt="" />
          </div>
        </div>
        <div className="rightSide w-50">
          <div className="part1 mb-2">
            <div className="d-flex align-items-center gap-3 mb-3">
              <div className="smallIconContainer">
                <img className="smallIcon" src={diamond} alt="" />
              </div>
              <span className="titleText">Our Value To Help You</span>
            </div>
            <p className="titleSupText">
              We always want to provide the best value for you and your health,
              join us to maximize the benefits
            </p>
          </div>
          <div className="part2 mt-5">
            <div className="part2Container">
              <div className="firstRow d-flex gap-4">
                  <div className="cardContainer mb-5">
                  <div className="cardLayout">
                    <div className="valuesIconContainer">
                      <img className="valuesIcon" src={heart} alt="" />
                    </div>
                    <div className="cardContent">
                      <span className="cardTitle">Becomes Healthier</span>
                      <p className="cardSupText">
                        immune will stronger if the body is healthier
                      </p>
                    </div>
                  </div>
                  </div>
                  <div className="cardContainer mb-5">
                  <div className="cardLayout">
                    <div className="valuesIconContainer">
                      <img className="valuesIcon" src={heart} alt="" />
                    </div>
                    <div className="cardContent">
                      <span className="cardTitle">Becomes Healthier</span>
                      <p className="cardSupText">
                        immune will stronger if the body is healthier
                      </p>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="secondRow d-flex gap-4">
                  <div className="cardContainer mb-5">
                  <div className="cardLayout">
                    <div className="valuesIconContainer">
                      <img className="valuesIcon" src={heart} alt="" />
                    </div>
                    <div className="cardContent">
                      <span className="cardTitle">Becomes Healthier</span>
                      <p className="cardSupText">
                        immune will stronger if the body is healthier
                      </p>
                    </div>
                  </div>
                  </div>
                  <div className="cardContainer mb-5">
                  <div className="cardLayout">
                    <div className="valuesIconContainer">
                      <img className="valuesIcon" src={heart} alt="" />
                    </div>
                    <div className="cardContent">
                      <span className="cardTitle">Becomes Healthier</span>
                      <p className="cardSupText">
                        immune will stronger if the body is healthier
                      </p>
                    </div>
                  </div>
                  </div>
              </div>
            </div>
            {/* <Row xxl={2}>
              {cardsCounterArr.map((num) => (
                <Col key={num} className="cardContainer mb-5">
                  <div className="cardLayout">
                    <div className="valuesIconContainer">
                      <img className="valuesIcon" src={heart} alt="" />
                    </div>
                    <div className="cardContent">
                      <span className="cardTitle">Becomes Healthier</span>
                      <p className="cardSupText">
                        immune will stronger if the body is healthier
                      </p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row> */}
          </div>
        </div>
      </div>
    </div>
  );
}
