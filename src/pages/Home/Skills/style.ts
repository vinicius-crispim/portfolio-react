import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";


export const SkillsSectionStyled = styled.section`
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    background-color: #6082B6;

    p{
        padding: 1.5rem 2rem;
    }

    @media ${device.mobile}{
        p{
            padding: 1.5rem 0;
        }
    }
`

export const SkillsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
`

export const SkillsList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;

    
`