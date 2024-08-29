import React from "react";

import { Link } from "react-scroll";

import "./ItemNavbar.scss";

type ItemNavbarProps = {
  label: string;
  duration: number; //* Para la librería react-scroll
  isActive?: boolean;
};

const ItemNavbar: React.FC<ItemNavbarProps> = ({
  label,
  duration,
  isActive = false,
}) => {
  return (
    <div className={`${isActive ? "" : ""} item-navbar`}>
      <Link to={label} smooth duration={duration}>
        {label}
      </Link>
    </div>
  );
};

export default ItemNavbar;
