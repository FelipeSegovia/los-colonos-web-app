import React, { useEffect, useState } from "react";
import { BsCaretLeftFill } from "react-icons/bs";
import { BsCaretRightFill } from "react-icons/bs";
import "./Carousel.scss";
import { ImageCarousel } from "../../../../interfaces";
import ImageCarouselComponent from "../ImageCarouselComponent";

type CarouselProps = {
  sliders: ImageCarousel[];
  autoPlay?: boolean;
  showButtons?: boolean;
};

const Carousel2: React.FC<CarouselProps> = ({
  sliders,
  autoPlay,
  showButtons,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(sliders[0]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (autoPlay || !showButtons) {
      const interval = setInterval(() => {
        selectNewImage(sliders);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  const selectNewImage = (images: ImageCarousel[], next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImage(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(sliders, false);
  };

  const next = () => {
    selectNewImage(sliders);
  };

  return (
    <div
      className={`carousel__container--image ${loaded ? "loaded" : ""}`}
      onLoad={() => setLoaded(true)}
    >
      {/* TODO: Aca debería ir ImageCarouselComponent */}
      {/* <img
        src={selectedImage.imgBackground}
        className="carousel__image carousel__image--loaded"
      /> */}
      <ImageCarouselComponent
        imgBackground={selectedImage.imgBackground}
        firstText={selectedImage.firstText}
        secondText={selectedImage.secondText}
        firstTextBold={selectedImage.firstTextBold}
        secondTextBold={selectedImage.secondTextBold}
        positionText={selectedImage.positionText}
      />
      <div className="carousel__buttons--container">
        {showButtons ? (
          <>
            <BsCaretLeftFill
              size={64}
              onClick={next}
              className="carousel__buttons"
            />
            <BsCaretRightFill
              size={64}
              onClick={previous}
              className="carousel__buttons"
              color="#FFFFFF"
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Carousel2;
