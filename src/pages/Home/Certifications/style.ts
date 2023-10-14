import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";


export const CertificationsStyled = styled.section`
    background-color:${variaveisColors.columbia_blue_dark};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: justify;
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    p{
        width: 90%;
        line-height: 1.4;
        margin: 0 auto;
        padding-left: 1rem;
        margin-bottom: 3rem;
    }
    p:nth-child(3){
        padding: 0;
        font-weight: 600;
    }

    @media ${device.desktopSM}{
        p{
            line-height: 1.2;
            margin-bottom: 1.25rem;
            padding: 1rem 0;
            width: 100%;
        }   
    }
`

export const ContainerCarrosselStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 3rem;
    padding-left: 1rem;
    
    @media ${device.desktopSM}{
        padding-right:0 ;
        padding-left: 0;
        flex-direction: column;
    }
`