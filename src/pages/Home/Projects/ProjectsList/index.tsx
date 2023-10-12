import React from 'react'
import * as S from './style';
import ItemList from './ItemList';
import projetos from './/data.json';
export default function ProjectsList() {
    return (
        <S.Container>
            <S.ListStyled>
                {projetos.map(projeto =>
                    <ItemList key={projeto.id} projeto={projeto} />
                )}
            </S.ListStyled>
        </S.Container>
    )
}