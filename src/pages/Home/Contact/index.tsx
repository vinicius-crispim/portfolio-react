import React from "react";
import { ContactButtonStyled, ContactFormStyled, ContactStyled } from "./style";
import Title from '../../../componentes/Title/index';


export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
    }
    return (
        <ContactStyled>
            <Title>
                Entre em contato!
            </Title>
            <div>
                <ContactFormStyled onSubmit={sendEmail}>
                    <input type='text' id='name' placeholder="Nome" />
                    <input type='email' id='email' placeholder="Email" />
                    <textarea cols={45} rows={10} placeholder="Mensagem" id="message"></textarea>
                    <ContactButtonStyled type="submit">Enviar</ContactButtonStyled>
                </ContactFormStyled>
            </div>
        </ContactStyled>
    )
}