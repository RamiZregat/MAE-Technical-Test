import React from "react";
import { useSpringCarousel } from "react-spring-carousel";
import { mockedItems } from "./mockedItems";
import leftArrow from "../../Assets/leftArrow.png";
import rightArrow from "../../Assets/rightArrow.png";

export default function TestimonialsSlider() {
  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 1,
      withLoop: true,
      disableGestures: true,
      items: mockedItems.map((person) => ({
        id: person.id,
        renderItem: (
          <div className="mb-3 mx-4">
            <div>
              <div className="personTestimonial mb-4">
                <p className="supText textItalic">{person.testimonial}</p>
              </div>
              <div className="mb-3">
                <span className="personName">{person.name}</span>
                <p className="supText">{person.carrier}</p>
              </div>
            </div>
          </div>
        ),
      })),
    });

  return (
    <div id="testimonialSlider" className="testimonialSliderContainer">
      <div className="d-flex gap-2 carouselButtonsContainer justify-content-end me-3">
        <a
          className=" bg-transparent "
          href="#testimonialSlider"
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
          href="#testimonialSlider"
          role="button"
          onClick={(e)=>{
            e.preventDefault()
            slideToNextItem()
          }}
        >
          <img src={rightArrow} alt="" />
        </a>
      </div>
      <div className="sliderContainer">{carouselFragment}</div>
    </div>
  );
}
