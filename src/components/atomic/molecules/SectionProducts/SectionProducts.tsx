import React from 'react'
import Slider1 from "../../../../assets/Slider1.webp"
import Slider2 from "../../../../assets/Slider2.webp"
import Slider3 from "../../../../assets/Slider3.webp"
import Slider4 from "../../../../assets/Slider4.webp"
import PapaIcon from "../../../../assets/images/PapasIcon.webp"
import LechugaIcon from "../../../../assets/images/LechugaIcon.webp"
import ZanahoriaIcon from "../../../../assets/images/ZanahoriaIcon.png"
import EspinacaIcon from "../../../../assets/images/EspinacaIcon.webp"
import BrocoliIcon from "../../../../assets/images/BrocoloIcon.webp"
import ChocloIcon from "../../../../assets/images/ChocloIcon.webp"
import "./SectionProducts.scss"



const SectionProducts: React.FC = () => {
    const images = [
        Slider1,
        Slider2,
        Slider3,
        Slider4, // Repetir imágenes para el efecto de bucle
    ];

    const listIcons = [
        {
            icon: PapaIcon,
            label: "Papas"
        },
        {
            icon: LechugaIcon,
            label: "Lechuga"
        },
        {
            icon: ZanahoriaIcon,
            label: "Zanahoria"
        },
        {
            icon: EspinacaIcon,
            label: "Espinaca"
        },
        {
            icon: BrocoliIcon,
            label: "Brócoli"
        },
        {
            icon: ChocloIcon,
            label: "Choclo"
        }
    ]

    return (
        <div className="section-products">
            <div className="section-products__header">
                <div className="section-products__header--logo"></div>
            </div>
            <div className="slider">
                <div className="slider__track">
                    {images.concat(images).map((image, index) => ( // Duplicar imágenes
                        <img key={index} src={image} alt={`Slide ${index}`} className="slider__image" />
                    ))}
                </div>
            </div>
            <div className="section-products__content">
                <h2 className="section-products__content--title">Nuestros Productos</h2>
                <div className="section-products__list-images">
                    {listIcons.map(icon => (
                        <div key={icon.label} className="section-products__image--container">
                            <img src={icon.icon} alt={`${icon.label}-img`} className="section-products__image"/>
                            <p>{icon.label}</p>
                        </div>
                    ))}
                    <p>...alcachofa, betarraga y más</p>
                </div>

            </div>
            <div className="section-products__footer">
                <span>Agricola Los Colonos:</span>
                <p>Innovación y tradición en Cada Cosecha</p>
            </div>
            <div className="section-products__footer--bottom">
                <div className="content">
                    <div className="content__img--left"/>
                    <div className="content__description">
                        <div className="content__description--image-clic" />
                        <div>
                            <h2>Estamos a</h2>
                            <p>un clic de distancia.</p>
                        </div>
                    </div>
                    <div className="content__img--right"/>
                </div>
            </div>
        </div>
    )
}

export default SectionProducts