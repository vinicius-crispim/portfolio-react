import styled from "styled-components";
import { variaveisColors } from "../../../../styles/variaveis";

export const ListStyled = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    overflow-y: hidden;
    overflow-x: auto;
    width:100%;
    * {
    }
    
    /* Works on Chrome, Edge, and Safari */
    &::-webkit-scrollbar {
      width: auto;
    }

    &::-webkit-scrollbar-track {
      background: white;
      border-radius: 20px;
      box-shadow:  0 0 10px ${variaveisColors.black};

    }

    &::-webkit-scrollbar-thumb {
        border-radius: 20px;
        background-color: ${variaveisColors.cadet_gray};
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: ${variaveisColors.dark_cadet_gray};
    }
`

export const Container = styled.div`
    
    
`
