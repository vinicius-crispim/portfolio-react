import React, { useState } from "react";
import * as S from "./style";


export default function Header() {
    const [active, setActive] = useState(false);

    return (
        <S.HeaderStyled >
            <h1><img src='/imagens/logo.png' alt="Foto cartoonizada do autor" /></h1>
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
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre mim</a></li>
                        <li><a href="#">Projetos</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </nav>
            </div>
        </S.HeaderStyled>
    );
}