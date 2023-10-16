import React from 'react'
import * as S from './style';
import * as SG from '../../../componentes/EstiloGlobal/style'
import Title from '../../../componentes/Title';
import ProjectsList from './ProjectsList';
import { PStyled } from '../../../componentes/EstiloGlobal/style';

export default function Projects(){
    return(
        <S.ProjectsStyled id='projetos'>
            <Title>
                Projetos
            </Title>
            <div>
                <SG.PStyled>Nesta seção, é possível encontrar alguns projetos autorais que desenvolvi e outros que desenvolvi durante cursos, também estão disponíveis os links dos repositórios e do Vercel de cada projeto.</SG.PStyled>
                <ProjectsList/>
            </div>
        </S.ProjectsStyled>
    )
}