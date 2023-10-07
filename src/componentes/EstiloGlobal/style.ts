import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const TitleStyled = styled.h2`
  font-size: 3.5rem;
  font-family: GandhiSansBold;
  font-weight: 600;
  @media ${device.mobile}{
    font-size: 2.5rem;
  }
  
`

export const PStyled = styled.p`
  font-size: 1.5rem;
  padding: 1rem 0;
  line-height: 1.2;

  @media ${device.mobile}{
    font-size: 1.25rem;

  }
`