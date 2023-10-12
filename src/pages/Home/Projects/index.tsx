import React from 'react'
import * as S from './style';
import Title from '../../../componentes/Title';
import ProjectsList from './ProjectsList';

export default function Projects(){
    return(
        <S.ProjectsStyled>
            <Title>
                Projetos
            </Title>
            <div>
                <ProjectsList/>
            </div>
        </S.ProjectsStyled>
    )
}