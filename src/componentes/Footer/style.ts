import styled from "styled-components"
import { variaveisColors } from "../../styles/variaveis"
import { device } from "../../styles/breakpoints"

export const FooterStyled = styled.footer`
  width: 100%;
  background-color: ${variaveisColors.black};
  padding: 1rem 1.5rem;
  display: flex;
  gap: 12px;
  font-family:GandhiSansBold;
  font-weight:600;
  justify-content: space-around;
  align-items: center;
  color: ${variaveisColors.dark_cadet_gray};

  @media ${device.mobile}{
    flex-direction: column;
  }
`

export const RedesSociaisStyled = styled.div`
  display: flex;
  gap: 16px;

  svg {
    fill: ${variaveisColors.dim_gray};
    width: 3rem;
    height: 3rem;
    padding: 10px;
    cursor: pointer;
    border: 2px solid ${variaveisColors.dim_gray};
    border-radius: 10px;
  }

  svg:hover {
    fill: ${variaveisColors.dark_grey};
    border-color: ${variaveisColors.dark_grey}
  }
`

export const ContatoStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  gap:4px;
  p{
    font-size: 1rem;
  }
`