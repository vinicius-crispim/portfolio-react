import React, { useState } from "react";
import * as S from "./style";
import linksAtivos from './data.json';

export default function Header() {
    const [active, setActive] = useState(false);
    const [links] = useState(linksAtivos);
    return (
        <S.HeaderStyled >
            <S.TitleStyled>
                <a href="#inicio">
                    <span>
                        {'</'}
                    </span>
                    Vini_Dev
                    <span>
                        {'>'}
                    </span>
                </a>
            </S.TitleStyled>
            <div>

                <button onClick={() => {
                    console.log(active)
                    setActive(!active)}}>
                    
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
                <nav className={`nav ${active ? 'nav-open' : 'nav-closed'}`}>
                    <ul>
                        {links.map(link => 
                            <li key={link.id}><a href={`#${link.sectioLink}`}>{link.titulo}</a></li>
                        )}
                    </ul>
                </nav>
            </div>
        </S.HeaderStyled>
    );
}