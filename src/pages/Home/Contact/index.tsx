import React, { useState } from "react";
import { AllertContainerStyle, ContactButtonStyled, ContactFormStyled, ContactStyled } from "./style";
import Title from '../../../componentes/Title/index';
import emailjs from '@emailjs/browser';
import Allert from "./Allert";
import { useEffect } from 'react';

export default function Contact() {
    const [display, setDisplay] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(import.meta.env.VITE_REACT_SERVICE_ID,
            import.meta.env.VITE_REACT_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_REACT_PUBLIC_KEY)
            .then(result => {
                console.log(result.text)
                setDisplay(true);
                setTimeout(() => {
                    setDisplay(false);
                }, 3000)
            })
            .catch(error => {
                console.log(error)
            })
        document.querySelector(".form")?.reset();
        document.querySelector("#name_from").value = "";
        document.querySelector("#email_from").value = "";
        document.querySelector("#message").value = "";
    }
    return (
        <ContactStyled id='contato'>
            <Title>
                Entre em contato!
            </Title>
            <div>
                <ContactFormStyled onSubmit={sendEmail} className="form">
                    <input type='text' required id='name_from' name="name_from" placeholder="Nome" />
                    <input type='email' required id='email_from' name="email_from" placeholder="Email" />
                    <textarea cols={45} rows={10} required placeholder="Mensagem" id="message" name="message"></textarea>
                    <ContactButtonStyled type="submit">Enviar</ContactButtonStyled>
                </ContactFormStyled>
            </div>
            <AllertContainerStyle className={display ? 'isOpen' : 'isClosed'}>
                <Allert setDisplay={setDisplay} />
            </AllertContainerStyle>
        </ContactStyled>
    )
}