import Title from '../../../componentes/Title';
import * as S from './style';
import * as SG from '../../../componentes/EstiloGlobal/style';
import skills from './data.json';
import React from 'react';
import ItemSkills from './ItemSkills';

export default function Skills() {
    return (
        <S.SkillsSectionStyled id='habilidades'>
            <Title>
                Habilidades
            </Title>
            <SG.PStyled>
                Atualmente estou focando em estudar tecnologias relacionadas ao Front-End,
                estudo através de cursos da Alura, Udemy ou videos do Youtube, nessa seção estão
                algumas habilidades que possuo e estou me desenvolvendo.
            </SG.PStyled>
            <S.SkillsList>
                {skills.map(skill => <ItemSkills key={skill.id} name={skill.name}
                photo={skill.photo} description={skill.description} 
                direction={`${skill.id%2 == 0 ? 'row':'row-reverse'}`}
                />)}
            </S.SkillsList>
        </S.SkillsSectionStyled>
    )
}