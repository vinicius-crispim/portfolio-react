import styled from "styled-components";
import { device } from "../../../../../styles/breakpoints";
import { variaveisColors } from '../../../../../styles/variaveis';
export const ItemStyled = styled.li`

    div{
        position: absolute;
        width: 350px;
        color: ${variaveisColors.white};
        height: 40%;
        background-color: ${variaveisColors.dark_cadet_gray};
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: .5s;

        h3{
            padding-top: 16px;
            padding-bottom: 8px;
            font-size:1.5rem;
            font-weight: 600;
        }
        
        a, p{
            padding: 4px 8px;
            font-size: .8rem;
            text-align: center;
        }
        
        a{
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }
        
        a:hover{
            text-decoration: underline;
        }
    
        a{
        }
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    }

    .isOver{
        top: 0;
    }

    .isNotOver{
        top: -300px;
    }
`

export const ItemFigureStyled = styled.figure`
    width: 100%;
    height: 100%;
    margin: 32px 8px; 
    position: relative;
    img{
        border-radius:10px;
        width:350px;
        height:350px;
    }

    

    @media ${device.mobile}{
        img{
            width:160px;
            height:160px;
        }
    }

`