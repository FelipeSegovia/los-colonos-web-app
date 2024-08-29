import React from "react";
import "./ImageCarouselComponent.scss";
import { ImageCarousel } from "../../../../interfaces";

const ImageCarouselComponent: React.FC<ImageCarousel> = ({
  imgBackground,
  firstText,
  firstTextBold = false,
  secondText,
  secondTextBold = false,
  positionText,
  alignText,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${imgBackground})` }}
      className={`image-coursel__container image-coursel__container--position-${positionText} image-coursel__container--align-${alignText}`}
    >
      <div className="image-carousel__content">
        <p>
          <span className={`${firstTextBold ? "bold" : "normal"} `}>
            {firstText}
          </span>
        </p>
        <p>
          <span className={`${secondTextBold ? "bold" : "normal"} `}>
            {secondText}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ImageCarouselComponent;
