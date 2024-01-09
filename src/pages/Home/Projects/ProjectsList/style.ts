import styled from "styled-components";
import { variaveisColors } from "../../../../styles/variaveis";
import { device } from "../../../../styles/breakpoints";

export const ListStyled = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 28px;
    overflow-y: hidden;
    overflow-x: scroll;
    width:100%;
    padding: 0 1rem;
   /* Firefox */ 
   scrollbar-width: thin;
    scrollbar-color: ${variaveisColors.white} ${variaveisColors.cadet_gray};
    
    /* Chrome, Edge e Safari */
    &::-webkit-scrollbar {
      height: 14px;
    }

    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 10px;
      box-shadow:  0 0 10px ${variaveisColors.black};
      
    }
    
    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${variaveisColors.cadet_gray};
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${variaveisColors.dark_cadet_gray};
    }
    
    @media ${device.mobile} {
      padding: 0 0;

    }
`
