import React from 'react'
import "./SectionContact.scss"

const SectionContact: React.FC = () => {
    return (
        <div className="section-contact">
            <div className="form">
                <h4 className="form__title">Envianos tus dudas o tu interés en trabajar con nosotros y te contactaremos
                    pronto.</h4>
                <div className="form__container">
                    <input type="text" className="form__input" placeholder="Nombre" />
                    <input type="text" className="form__input" placeholder="Correo" />
                    <textarea className="form__textarea" placeholder="Mensaje"></textarea>
                </div>
                <button className="form__button">Enviar</button>
            </div>
        </div>
    )
}

export default SectionContact