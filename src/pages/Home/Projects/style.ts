import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";


export const ProjectsStyled = styled.section`
    background-color: ${variaveisColors.darkest_grey};
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div{
        text-align: center;
        padding: 1rem 2rem;
        margin: 0 auto;
        width: 100%
    }

    @media ${device.mobile}{
        font-size: 1rem;
        div{
            padding: 0 0;
        }
    }
`


