import styled from "styled-components";
import { variaveis } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";

export const FundoGradienteStyled = styled.div`
  background-image: url('/imagens/background.png');
  width: 100%;
  background-size:cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 65%;
    color: ${variaveis.white};

    svg{
      width: 6rem;
      height:  6rem;
      animation: scaleReact 3s alternate infinite ease-in;
      margin: 1rem;
      margin-top: 3rem;

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

  @media ${device.mobile}{

    div{
    line-height: 1.1;
    max-width: 85%;
    svg{
      width: 4.5rem;
      height:  4.5rem;
      animation: scaleReact 3s alternate infinite ease-in;
      margin-top: 5.2rem;
    }
  }

  }
  @media ${device.desktopSM}{

    div{
    line-height: 1.2;
    text-align: center;
    max-width: 85%;
    color: ${variaveis.white};

    svg{
      width: 6rem;
      height:  6rem;
      animation: scaleReact 3s alternate infinite ease-in;
      margin-top: 6rem;
    }
  }

  }

  
`

export const TitleStyled = styled.h2`
  font-size: 3.5rem;
  font-family: GandhiSansBold;
  font-weight: 600;
  @media ${device.mobile}{
    font-size: 2.5rem;
  }
  
`

export const PStyled = styled.p`
  font-size: 2rem;
  padding: 1rem 0;

  @media ${device.mobile}{
    font-size: 1.25rem;

  }
`

export const ButtonStyled = styled.button`
  padding: .75rem 1rem;
  border: 2px solid ${variaveis.dark};
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  text-align:center;
  color: ${variaveis.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:${variaveis.dark_grey} ;
  
  &:hover {
    background-color: ${variaveis.light_grey};
  }

  span{
    margin-left: .5rem;
  }

  @media ${device.desktopSM}{
    margin-bottom: 1.5rem;
  }
`