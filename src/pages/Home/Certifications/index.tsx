import React from "react";
import * as SGlobal from '../../../componentes/EstiloGlobal/style';
import certificados from './data.json';
import Carrosel from "./Carrosel";
import * as S from './style'
export default function Certifications() {
    return (
        <S.CertificationsStyled>
            <SGlobal.TitleStyled>
                Certificações
            </SGlobal.TitleStyled>
            <div className='teste'>
                <div>
                    <SGlobal.PStyled>
                        Ao longo dos anos, busquei e busco constantemente o aprimoramento pessoal e
                        profissional, e esses certificados são o resultado do meu comprometimento com
                        o aprendizado contínuo, eles ilustram um pouco das horas de estudo, dedicação e paixão
                        que investi em conteudos são importantes para mim.
                    </SGlobal.PStyled>
                </div>
                <Carrosel certificados={certificados} />
            </div>
        </S.CertificationsStyled>
    )
}