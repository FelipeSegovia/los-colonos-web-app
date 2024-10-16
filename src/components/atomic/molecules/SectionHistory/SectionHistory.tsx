import React from "react";
import OrnamentoLeft from "../../../../assets/Ornamento1.webp";
import OrnamentoRight from "../../../../assets/Ornamento2.webp";

import "./SectionHistory.scss";
import HeaderSection from "../../atoms/HeaderSection";

const SectionHistory: React.FC = () => {
  return (
    <div className="section-history">
      <div className="container-header">
        <div className="container-header__first-bg">
          <HeaderSection backgroundColor="#009246" />
        </div>
        <div className="container-header__second-bg">
          <HeaderSection backgroundColor="#009246" />
        </div>
        <div className="container-header__third-bg">
          <HeaderSection backgroundColor="#519551" />
        </div>
        <div className="container-header__content">
          <img src={OrnamentoLeft} alt="Ornamento Izquierdo" />
          <h1>Nuestra Historia</h1>
          <img src={OrnamentoRight} alt="Ornamento Derecho" />
        </div>
      </div>
      <div className="section-history__container-description">
        <div className="description-text">
          <p className="description-text__title">
            Innovación y Tradición <strong>en Cada Cosecha</strong>{" "}
          </p>
          <p className="description-text__description">
            Agricola los Colonos nace hace más de 50 años por inmigrantes
            italianos, que comenzaron a integrarse en la agricultura y luego con
            ayuda de la segunda y terceras generaciones se fue potenciando la
            Empresa y asi disponer de más de 500 hectáreas dedicadas a
            hortalizas y frutales para venta de retail y mercado fresco,
            promoviendo siempre la calidad e innovación en nuestros productos.
          </p>
        </div>
        <div className="container-img-tomato" />
      </div>
      <div className="history__footer--container"></div>
    </div>
  );
};

export default SectionHistory;
