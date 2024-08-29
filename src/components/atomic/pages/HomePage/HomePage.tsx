import React from "react";
import { Element } from "react-scroll";
import Navbar from "../../molecules/Navbar";
import Slider1 from "../../../../assets/Slider1.webp";
import Slider2 from "../../../../assets/Slider2.webp";
import Slider3 from "../../../../assets/Slider3.webp";
import Slider4 from "../../../../assets/Slider4.webp";
import Carousel from "../../molecules/Carousel/Carousel";
import SectionHistory from "../../molecules/SectionHistory";
import "./HomePage.scss";
import SectionProducts from "../../molecules/SectionProducts";
import SectionContact from "../../molecules/SectionContact";
import Footer from "../../molecules/Footer";


const HomePage: React.FC = () => {

  return (
    <div className="home-page">
        <Navbar />
        <Element name="Inicio" className="hero-carousel__container">
        <Carousel sliders={[Slider1, Slider2, Slider3, Slider4]} />
        </Element>
        <Element name="Nosotros" className="history">
        <SectionHistory />
        </Element>
        <Element name="Productos" className="product">
            <SectionProducts />
        </Element>
        <Element name="Contacto" className="contact">
            <SectionContact />
        </Element>
        <Footer />

    </div>
  );
};

export default HomePage;
