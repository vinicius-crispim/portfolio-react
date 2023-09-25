import React, { useState } from "react";
import * as S from "./style";
import linksAtivos from './data.json';

export default function Header() {
    const [active, setActive] = useState(false);
    const [links] = useState(linksAtivos);
    return (
        <S.HeaderStyled >
            <h1><a href="#"><img src='/imagens/Logo.png' alt="Foto cartoonizada do autor" /></a></h1>
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
                            <li key={link.id}><a href="#">{link.titulo}</a></li>
                        )}
                    </ul>
                </nav>
            </div>
        </S.HeaderStyled>
    );
}