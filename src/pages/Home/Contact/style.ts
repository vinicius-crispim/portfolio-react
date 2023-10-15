import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../../../styles/variaveis";


export const ContactStyled = styled.section`
    padding: ${variaveisSpace.container_vertical_padding} ${variaveisSpace.container_horizontal_padding};
    background-color: ${variaveisColors.white_black};
    `

export const ContactFormStyled = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    padding: 1rem 2rem;
    width: 60%;    
    border: 1px solid ${variaveisColors.form_grey};
    margin: 1.5rem auto;
    input, textarea{
        padding: 8px;
        width: 100%;
        background-color: ${variaveisColors.form_grey};
        color: ${variaveisColors.dark};
    }
`

export const ContactButtonStyled = styled.button`
    padding: 12px;
    background-color: ${variaveisColors.form_grey};
    color: ${variaveisColors.dark};
    width: 100%;
    border: 1px solid ${variaveisColors.dark};
    box-shadow: 1px 1px 3px ${variaveisColors.dark};
    letter-spacing: 2px;
    font-size: 18px;
    transition: .3s;
    &:hover{
        cursor: pointer;
        background-color: ${variaveisColors.darkest_grey};
        letter-spacing: 6px;
    }
`
