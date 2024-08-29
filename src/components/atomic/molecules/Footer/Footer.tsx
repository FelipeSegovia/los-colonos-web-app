import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { TbBrandWhatsapp } from "react-icons/tb";
import { IoMdPin } from "react-icons/io";
import "./Footer.scss"


const Footer: React.FC = () => {

    return (
        <div className="footer">
            <div className="footer__rrss">
                <div className="rrss__container">
                    <a href="https://www.facebook.com/"><FaFacebookSquare color="#FFFFFF" size={32} /></a>
                    <a href="https://www.instagram.com/"><FaInstagram color="#FFFFFF" size={32} /></a>
                    <a href="https://www.twitter.com/"><TbBrandWhatsapp color="#FFFFFF" size={32} /></a>
                </div>
                <div className="rrss__direction">
                    <IoMdPin color="#FFFFFF" size={32} />
                    <p>Estancia Barriales S/N, Pan de Azúcar, Coquimbo. </p>
                </div>
            </div>
            <div className="footer__img-center"></div>
            <div className="footer__logo"></div>
        </div>
    )
}

export default Footer