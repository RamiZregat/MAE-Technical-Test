import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "./mockedItems";
import { useEffect, useState } from "react";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";

export default function RecipeCarousel() {
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 1500) {
      setItemsPerSlide(3);
    } else if (window.innerWidth > 1350) {
      setItemsPerSlide(3);
    } else if (window.innerWidth > 768) {
      setItemsPerSlide(2);
    } else {
      setItemsPerSlide(1);
    }
  };

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide,
      gutter: 20,
      withLoop: true,
      items: mockedItems.map((recipe) => ({
        id: recipe.id,
        renderItem: (
          <div className="recipeLayout">
            <div className="recipeContent d-flex flex-column justify-content-between p-3 ">
              <div className="imgLayout d-flex align-items-center justify-content-center">
                <img
                  className="recipeImg"
                  src={recipe.image}
                  alt="recipe img"
                />
              </div>
              <span className="recipeTitle">{recipe.title}</span>
              <div className="d-flex justify-content-center">
                <div className="btnDiv recipeBtnContainer">
                  <button className="btn buttonColor recipeBtn">Try Now</button>
                </div>
              </div>
            </div>
          </div>
        ),
      })),
    });

  return (
    <div id="ourMenu" className="recipeCarouselContainer">
      <div className="d-flex gap-3 carouselButtonsContainer justify-content-end me-3">
        <a
          className=" bg-transparent "
          href="#ourMenu"
          role="button"
          onClick={(e)=>{
            e.preventDefault()
            slideToPrevItem()
          }}
        >
          <img src={leftArrow} alt="" />
        </a>
        <a
          className=" bg-transparent "
          href="#ourMenu"
          role="button"
          onClick={(e)=>{
            e.preventDefault()
            slideToNextItem()
          }}
        >
          <img src={rightArrow} alt="" />
        </a>
      </div>
      <div className="carouselCardsContainer">{carouselFragment}</div>
    </div>
  );
}
