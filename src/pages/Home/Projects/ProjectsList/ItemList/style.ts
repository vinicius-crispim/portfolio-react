import styled from "styled-components";
import { device } from "../../../../../styles/breakpoints";
import { variaveisColors } from '../../../../../styles/variaveis';
export const ItemStyled = styled.li`
    margin-bottom: 24px;

    div{
        position: absolute;
        width: 350px;
        color: ${variaveisColors.white};
        height: 50%;
        background-color: ${variaveisColors.black};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: .5s;
        h3{
            padding-bottom: 8px;
            font-size:1.5rem;
            font-weight: 600;
        }
        
        a, p{
            padding: 4px 8px;
            font-size: .8rem;
            text-align: justify;
        }
        
        a{
            font-weight: 600;
            font-size: 1rem;
            cursor: pointer;
        }
        
        a:hover{
            text-decoration: underline;
        }
        border-top-left-radius:10px;
        border-top-right-radius:10px;
    
    }
    
    .isOver{
        top: 0;
    }

    .isNotOver{
        top: -200px;
    }

    @media ${device.mobile}{
        div{
            width: 250px;
            height: 55%;
        }
    }
`

export const ItemFigureStyled = styled.figure`
    width: 100%;
    height: 100%;
    margin: 0; 
    position: relative;
    img{
        border-radius:10px;
        width:350px;
        height:350px;
    }

    

    @media ${device.mobile}{
        img{
            width:250px;
            height:250px;
        }
    }

`