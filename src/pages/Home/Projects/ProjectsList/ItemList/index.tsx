import React, { useState } from "react";
import * as S from './style';
export default function ItemList({projeto} : {projeto:{id:number, name: string, photo:string, description: string, linkVercel: string, linkRepositorio:string }}) {
    const [active, setActive] = useState(false);

    return (
        <S.ItemStyled onMouseOver={() => {
        setActive(true);
        console.log(projeto)
    }} onMouseOut={() => {
        setActive(false);
    }}>
            <S.ItemFigureStyled>
                <img src={projeto.photo} alt={projeto.name} />
                <div className={`info ${active ? 'isOver' : 'isNotOver'}`} >
                    <h3>{projeto.name}</h3>
                    <p>{projeto.description}</p>
                    <a href={projeto.linkVercel} target="_blank">Link do Vercel</a>
                    <a href={projeto.linkRepositorio} target="_blank">Link do Repositório</a>
                </div>
            </S.ItemFigureStyled>
        </S.ItemStyled>
    )
}