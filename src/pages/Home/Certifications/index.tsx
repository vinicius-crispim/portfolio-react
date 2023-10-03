import React from "react";
import * as SGlobal from '../../../componentes/EstiloGlobal/style';
import certificados from './data.json';
import Carrosel from "./Carrosel";
export default function Certifications() {
    return (
        <div className="container">
            <SGlobal.TitleStyled>
                Certificações
            </SGlobal.TitleStyled>
            <Carrosel certificados={certificados}/>
        </div>
    )
}