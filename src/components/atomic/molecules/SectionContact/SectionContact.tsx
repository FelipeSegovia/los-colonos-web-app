import React, {useState} from 'react'
import "./SectionContact.scss"
import {sendMail} from "../../../../services/sendMail.ts";
import SuccessIcon from "../../atoms/SuccessIcon";
import ErrorIcon from "../../atoms/ErrorIcon";

const SectionContact: React.FC = () => {

    const [inputName, setInputName] = useState<string | null>(null);
    const [validName, setValidName] = useState(true);
    const [inputEmail, setInputEmail] = useState<string | null>(null);
    const [validEmail, setValidEmail] = useState(true);
    const [inputMessage, setInputMessage] = useState<string | null>(null);
    const [validMessage, setValidMessage] = useState(true);
    const [mailSent, setMailSent] = useState(false);
    const [errorMail, setErrorMail] = useState(false);

    const validateForm = (): boolean => {
        let validNameInput = false;
        let validEmailInput = false;
        let validMessageInput = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (inputName === null || inputName === "") {
            setValidName(validNameInput);
        }
        else{
            validNameInput = true;
            setValidName(validNameInput);
        }

        if (inputEmail === null && inputEmail === "" || !emailRegex.test(inputEmail!)) {
            setValidEmail(validEmailInput)
        }
        else{
            validEmailInput = true;
            setValidEmail(validEmailInput)
        }

        if (inputMessage === null || inputMessage === "") {
            setValidMessage(validMessageInput)
        }else{
            validMessageInput = true;
            setValidMessage(validMessageInput)
        }



        if (validNameInput && validEmailInput && validMessageInput) {
            setErrorMail(false)
            setValidName(true);
            setValidEmail(true);
            setValidMessage(true);

            return true;
        } else {
            return false
        }
    }

    const clearInputs = () => {
        setInputName("");
        setInputEmail("");
        setInputMessage("");
    }

    const handleSendMail = async () => {
        const retries = 3;
        if (validateForm()) {
            for (let i = 0; i < retries; i++) {
                try {
                    const result = await sendMail({name: inputName!, email: inputEmail!, message: inputMessage!});
                    if(result) {
                        setMailSent(true)
                        clearInputs();
                        break;
                    }
                } catch (error) {
                    if (i === retries - 1) {
                        setMailSent(true)
                        setErrorMail(true)
                        throw error; // Lanza el error si no quedan más intentos
                    }
                }
            }

        }
    }

    return (
        <div className="section-contact">
            <div className="form">
                <h4 className="form__title">Envianos tus dudas o tu interés en trabajar con nosotros y te contactaremos
                    pronto.</h4>
                <div className="form__container">
                    <input type="text" className={`form__input ${validName ? 'valid' : 'invalid'}`} placeholder="Nombre"
                           value={inputName ?? ""}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputName(event.target.value)}/>
                    <input type="email" className={`form__input ${validEmail ? 'valid' : 'invalid'}`}
                           placeholder="Correo"
                           value={inputEmail ?? ""}
                           onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputEmail(event.target.value)}/>
                    <textarea className={`form__textarea ${validMessage ? 'valid' : 'invalid'}`} placeholder="Mensaje"
                              value={inputMessage ?? ""}
                              onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => setInputMessage(event.target.value)}></textarea>
                </div>
                <button className="form__button" onClick={handleSendMail}>Enviar</button>
                {mailSent && (
                    <div className="container-message">
                        {!errorMail ? (
                            <p className="success-mail"><SuccessIcon/> Hemos recibido tu mensaje, responderemos lo más pronto
                                posible! </p>
                            ) : (
                            <p className="error-mail"><ErrorIcon/> No hemos podido enviar tu mensaje, intenta nuevamente o mas tarde </p>
                        )}

                    </div>
                )}
            </div>

        </div>
    )
}

export default SectionContact