import React from "react";
import ItemNavbar from "../../atoms/ItemNavbar";
import "./Navbar.scss";

type NavbarProps = {
  // Add props here
};

const Navbar: React.FC<NavbarProps> = ({}) => {
  //TODO: mejorar el circulo de los colonos
  return (
    <nav className="navbar">
      <div>
        <ItemNavbar label="Inicio" duration={500} />
      </div>
      <div>
        <ItemNavbar label="Nosotros" duration={500} />
      </div>
      <div className="navbar__logo" />
      <div>
        <ItemNavbar label="Productos" duration={500} />
      </div>
      <div>
        <ItemNavbar label="Contacto" duration={500} />
      </div>
    </nav>
  );
};

export default Navbar;
