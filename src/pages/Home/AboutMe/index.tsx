import React from "react";
import * as S from './style';
import * as SGlobal from '../../../componentes/EstiloGlobal/style'
import perfil from "../../../assets/perfil.png";

const teste = '../'
export default function AboutMe() {
    return (
        <S.AboutMeSectionStyle>
            <SGlobal.TitleStyled>
                Sobre Mim
            </SGlobal.TitleStyled>
            <S.AboutMeContainer>
                <div>
                    <SGlobal.PStyled>
                        Me chamo Vinicius Crispim, sou recém formado em Análise e
                        Desenvolvimento de Sistemas e apaixonado por programação, <span>tenho o
                            objetivo de entrar de cabeça no mundo do desenvolvimento</span> e me desenvolver também.
                    </SGlobal.PStyled>
                    <SGlobal.PStyled>
                        No momento, estou me dedicando a aprender mais e evoluir como <span>dev front-end</span>,
                        possuo conhecimento em tecnologias como ReactJS, React Native, Bootstrap, MySQL,
                        entre outras.
                    </SGlobal.PStyled>
                </div>
                <div>
                    <img src={perfil} alt="Vinicius Crispim de Azevedo" />
                </div>
            </S.AboutMeContainer>

        </S.AboutMeSectionStyle>
    )
}