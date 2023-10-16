import React, { useState } from "react";
import * as S from './style';
import { CarroselStyled } from './style';
import { useEffect } from 'react';

var contador = 1;
var radio2 = document.querySelector('.manual_btn');

export default function Carrosel({ certificados }: { certificados: { id: number; name: string; path: string; }[] }) {
    function passaImg() {
        if (contador > 5) contador = 0;
        contador++;
        document.getElementById(`radio${contador}`).checked = true;
    }
    useEffect(() => {
        setInterval(() => {
            passaImg();
        }, 5000);
    }, [])
    return (
        <S.CarroselStyled>
            <div className="slider_content">
                {certificados.map(certificado => {
                    return (
                        <input key={certificado.id} type="radio" name='btn_radio' id={`radio${certificado.id}`} />
                    )
                })}
                {certificados.map(certificado => {
                    return (
                        <div key={certificado.id} className={`slide_box slide_${certificado.id}`}>
                            <img className='aa' src={certificado.path} alt={certificado.name} />
                        </div>
                    )
                })}
                <div className="nav_auto">
                    {certificados.map(certificado => {
                        return (
                            <div key={certificado.id} className={`auto_btn${certificado.id}`}></div>
                        )
                    })}
                </div>
                <div className="nav_manual">
                    {certificados.map(certificado => {
                        return (
                            <label onClick={() => {
                                contador = certificado.id;
                                document.getElementById(`radio${contador}`).checked = true;
                            }} key={certificado.id} htmlFor={`radio${certificado.id}`} className="manual_btn" />
                        )
                    })}
                </div>
            </div>
        </S.CarroselStyled>

    )
}