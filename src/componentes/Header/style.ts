import styled from "styled-components";
import { device } from '../../styles/breakpoints'
import { variaveis } from "../../styles/variaveis";

export const HeaderStyled = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  width:100%;
  background-color: ${variaveis.light_grey};
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${variaveis.dark};
  button{
    display: none;
  }

  nav{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  nav li{
      display: inline;
      margin: 0 .5rem;
      transition: .3s;
  }

  nav li{
    font-size: 1.2rem;
    font-family: GandhiSansBold;
    font-weight: 600;
    transition: .3s;
    color: ${variaveis.green};
  }

  nav li:hover {
    color: ${variaveis.dark_green};
    padding-bottom: 3px;
    border-bottom: 2px solid ${variaveis.dark_green};
    font-size: 1.25rem;
  }

  @media ${device.mobile}{
    button{
      display: block;
      position: fixed;
      top: 1.25rem;
      right: 3rem;
      cursor: pointer;
      span{
        color: ${variaveis.green};
        transition: .3s;
        font-size: 40px;
      }
      span:hover{
        color: ${variaveis.dark_green};
      }
    }

    nav{
      position: fixed;
      top: 75px;
      width: 175px;
      max-width: 175px;
      right: 0;
      background-color: ${variaveis.light_grey};
      height: 200px;
      transition: 0.5s;
      padding: 0 12px;
      padding-top: 8px;
      display: flex;
      flex-direction: column;
      border: 1px solid ${variaveis.dark};
      border-top: none;
    }

    .nav-open{
      right: 0;
    }

    .nav-closed{
      right: -220px;
    }

    nav li{
      display: block;
      margin: 1rem 1.2rem;
    }

    nav li {
      font-size: 1.1rem;
    }

    nav li:hover{
      font-size: 1.12rem;
      padding-bottom: none;
      border-bottom: none
    }
  }
`

export const TitleStyled = styled.h1`
  width:auto;
  font-size: 2rem;
  font-family: GandhiSansBold;
  font-weight: 600;
  color: ${variaveis.green};
  transition: .3s;
  &:hover {
    color: ${variaveis.dark_green}
  }

  a{
    width: 300px;
  }
`
