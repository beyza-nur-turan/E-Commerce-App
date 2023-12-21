import SliderItem from "../Slider/SliderItem";
import "../../css/sliders.css";
import { useState } from "react";
import { useSlideContext } from "../../context/SlideProvider";
const Sliders = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { slideData } = useSlideContext();
  const imgArray = slideData ? slideData.map((slide) => slide.img) : [];
  

  console.log("slidee", slideData);
  if (!slideData) {
    return <div>Loading...</div>;
  }

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % imgArray.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + 3) % imgArray.length);
  };
  return (
    <section className="slider">
      <div className="slider-elements">
        {imgArray.map((imgSrce, index) => (
          currentSlide===index &&
          <SliderItem key={index} imageSrc={imgSrce} currentSlide={currentSlide} />
        ))}
        <div className="slider-buttons">
          <button onClick={prevSlide}>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button onClick={nextSlide}>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
        <div className="slider-dots">
          {imgArray.map((_, index) => (
            <button
              key={index}
              className={`slider-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sliders;
