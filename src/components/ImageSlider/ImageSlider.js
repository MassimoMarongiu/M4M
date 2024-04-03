// https://www.youtube.com/watch?v=SK9AlIbexOE
import React, { useState, useEffect } from "react";
import "./imgSlider.css";

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "black",
  zIndex: 1,
  cursor: "pointer",
};
const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#7A6565",
  boxShadow: "0 0 10px #7A6565", // Add glowing effect with box-shadow
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];

  const sliderStyles = {
    // position: "relative",
    with: "100%",
    height: "100%",
    backgroundSize: "cover",
  };
  const slideStyles = {
    width: "100%",
    height: "180%",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat", 
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };
  const previous = () => {
    const firstSlide = currentIndex === 0;
    const newIndex = firstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const next = () => {
    const lastSlide = currentIndex === slides.length - 1;
    const newIndex = lastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const gotoSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  return (
    <div style={sliderStyles} className="imageslider">
      <div></div>
      <div
        onClick={previous}
        style={leftArrowStyles}
        className="leftArrowStyles"
      >
        ❰
      </div>

      <div style={slideStyles} className="imgSlide">
      </div>

      <div
        onClick={() => {
          next();
          console.log("next", slides[currentIndex]);
        }}
        style={rightArrowStyles}
        className="rightArrowStyles"
      >
        ❱
      </div>

      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => gotoSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default ImageSlider;
