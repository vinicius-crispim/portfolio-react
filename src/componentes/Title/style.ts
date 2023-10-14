import styled from "styled-components";
import { device } from "../../styles/breakpoints";

export const TitleStyled = styled.h2`
  text-align: center;
  font-size: ${(props) => props.size};
  font-family: ${props => props.bold ? 'GandhiSansBold' : 'GandhiSans'};
  font-weight: ${props => props.bold ? '600' : '400'};
  @media ${device.mobile}{
    font-size: 2.5rem;
  }
`