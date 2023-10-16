import styled from "styled-components";
import { device } from "../../styles/breakpoints";


export const PStyled = styled.p`
  font-size: 1.5rem;
  padding: 1rem 0;
  line-height: 1.2;
  text-align: justify;
  @media ${device.mobile}{
    font-size: 1rem;

  }
`