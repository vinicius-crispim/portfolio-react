import styled from "styled-components";
import { variaveis } from "../../../styles/variaveis";

export const FundoGradienteStyled = styled.div`
  background-image: url('/imagens/background.png');
  width: 100%;
  background-size:cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    line-height: 1.2;
    text-align: center;
    max-width: 60%;
    color: ${variaveis.white};

    svg{
    width:100px;
    height: 100px;
    animation: scaleReact 3s alternate infinite ease-in;
    margin: 1rem;

    @keyframes scaleReact {
    from {
					transform: scale(1);
          fill: ${variaveis.light_green};
				}

				to {
					transform: scale(1.2);
          fill: ${variaveis.dark_green};

				}
  }
    }
  }

  
`

export const TitleStyled = styled.h2`
  font-size: 3.25rem;
  font-family: GandhiSansBold;
  font-weight: 600;
  
  
`

export const PStyled = styled.p`
  margin-top: 1.5rem;
  font-size: 2rem;
`