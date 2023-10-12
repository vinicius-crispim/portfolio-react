import styled from "styled-components";
import { variaveisColors } from "../../../styles/variaveis";
import { device } from "../../../styles/breakpoints";

export const FundoGradienteStyled = styled.section`
  background-image: url('/imagens/background.png');
  width: 100%;
  background-size:cover;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 65%;
    color: ${variaveisColors.white};

    svg{
      width: 6rem;
      height:  6rem;
      animation: scaleReact 3s alternate infinite ease-in;
      margin: 1rem;
      margin-top: 5rem;

      @keyframes scaleReact {
      from {
		  			transform: scale(1);
            fill: ${variaveisColors.light_green};
		  		}

		  		to {
		  			transform: scale(1.2);
            fill: ${variaveisColors.dark_green};

		  		}
      }
    }
  }
  .main_info{
    margin-bottom: 1rem;
  }
  
  @media ${device.mobile}{

    div{
    line-height: 1;
    max-width: 95%;
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
    line-height: 1.1;
    text-align: center;
    max-width: 85%;
    color: ${variaveisColors.white};

    svg{
      width: 6rem;
      height:  6rem;
      animation: scaleReact 3s alternate infinite ease-in;
      margin-top: 6rem;
    }
  }

  }
`

export const ButtonStyled = styled.a`
  padding: 1rem;
  border: 2px solid ${variaveisColors.dark};
  border-radius: 10px;
  margin-top: 2.5rem;
  cursor: pointer;
  width: 50%;
  color: ${variaveisColors.dark};
  background-color:${variaveisColors.dark_grey};
  transition: .3s;
  font-family: GandhiSansBold;
  box-shadow: 7px 5px 6px rgba(50, 50, 50, 0.77);
  font-size:1.75rem;
  display:flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${variaveisColors.light_grey};
    letter-spacing: 4px;
  }

  span{
    margin-left: .5rem;
  }

  

  @media ${device.desktopSM}{
    margin-bottom: 3rem;
  }

  @media ${device.mobile}{
    span{
      display: none;
    }
  }
`