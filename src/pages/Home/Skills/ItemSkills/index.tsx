import React from 'react';
import * as S from './style';
import * as SG from '../../../../componentes/EstiloGlobal/style'
import Title from '../../../../componentes/Title';

export default function ItemSkills({ name, photo, description, direction }: 
    { name: string, photo: string, description: string, direction: string }) {
    return (
        <S.SkillStyled direction={direction}>
            <div>
                <Title size='2rem'>
                    {name}
                </Title>
                <SG.PStyled>
                    {description}
                </SG.PStyled>
            </div>
            <img src={photo} alt={name} />
        </S.SkillStyled>
    )
}