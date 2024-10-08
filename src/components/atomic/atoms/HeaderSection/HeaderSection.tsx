import React from "react";
import "./HeaderSection.scss";

type HeaderSectionProps = {
  backgroundColor: string; // Add props here
};

const HeaderSection: React.FC<HeaderSectionProps> = ({ backgroundColor }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 350">
      <path
        fill={backgroundColor}
        fillOpacity="1"
        d="M0,64L120,90.7C240,117,480,171,720,176C960,181,1200,139,1320,117.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  );
};

export default HeaderSection;
