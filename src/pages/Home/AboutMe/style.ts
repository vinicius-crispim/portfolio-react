import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";


export const AboutMeSectionStyle = styled.section`
    text-align: justify;
    display: flex;
    background-color:${variaveisColors.dark_blue};
    flex-direction: column;
    align-items:center;
    justify-items: center;
    color: ${variaveisColors.white};
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    
    span{
        font-weight: 600;
    }

    p{
        padding-bottom:0;
    }
`

export const AboutMeContainer = styled.div`
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr auto;
    gap:2rem;
    padding: 0 2rem;
    width:100%;
    img{
        width: 22rem;
        height: 22rem;
        border-radius: 50%;
        border: 2px solid black;
    }

    @media ${device.desktopXSM}{
        
        grid-template-columns: 1fr;
        & div:last-child{
            text-align: center;
        }
        img{
            width: 60%;
            height: 60%;
        }
    }
    
    @media ${device.mobile}{
        width:100%;
        padding: .25rem 0;
        img{
        width: 80%;
        height: 80%;
       }
    }
`


