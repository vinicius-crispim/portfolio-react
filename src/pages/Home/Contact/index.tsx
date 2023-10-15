import React from "react";
import { ContactButtonStyled, ContactFormStyled, ContactStyled } from "./style";
import Title from '../../../componentes/Title/index';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e.target)
        emailjs.sendForm('service_6gu0kys', 'template_8ees1e4', e.target, '9INQDLzkmzDiXn4wc')
        .then(result => {
            console.log(result.text)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <ContactStyled>
            <Title>
                Entre em contato!
            </Title>
            <div>
                <ContactFormStyled onSubmit={sendEmail}>
                    <input type='text' id='name_from' name="name_from" placeholder="Nome" />
                    <input type='email' id='email_from' name="email_from" placeholder="Email" />
                    <textarea cols={45} rows={10} placeholder="Mensagem" id="message" name="message"></textarea>
                    <ContactButtonStyled type="submit">Enviar</ContactButtonStyled>
                </ContactFormStyled>
            </div>
        </ContactStyled>
    )
}