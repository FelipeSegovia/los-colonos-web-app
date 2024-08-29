import React, { useEffect, useState } from "react";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import "./Carousel.scss";

type CarouselProps = {
  sliders: string[];
};

const Carousel: React.FC<CarouselProps> = ({ sliders }) => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const listImages = [sliders[sliders.length - 1], ...sliders, sliders[0]];

  const prevSlide = () => {
    if (selectedIndex === 0) {
      setSelectedIndex(listImages.length - 3);
    } else {
      setSelectedIndex((prevIndex) => prevIndex - 1);
    }
  };

  const nextSlide = () => {
    if (listImages.length - 1 === selectedIndex) {
      setSelectedIndex(2);
    } else {
      setSelectedIndex((prevIndex) => prevIndex + 1);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [listImages]);

  return (
    <div className={`carousel__container--image`}>
      <BsCaretLeftFill
        size={64}
        onClick={prevSlide}
        className="arrow left-arrow"
      />
      <div
        className="slider-images"
        style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
      >
        {listImages.map((image, index) => (
          <img key={index} src={image} className="slide" />
        ))}
      </div>
      <BsCaretRightFill
        size={64}
        onClick={nextSlide}
        className="arrow right-arrow"
        color="#FFFFFF"
      />
    </div>
  );
};

export default Carousel;
