import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";


export const ProjectsStyled = styled.section`
    background-color: ${variaveisColors.light_grey};
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        width: 80%;

    }
`


