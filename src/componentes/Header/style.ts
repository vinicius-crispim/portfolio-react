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
    h1 {
        max-width: 274px;
        height: auto;
    }
    nav{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    nav li{
        display: inline;
        margin: 0 12px;
        font-size: 28px;
        color: ${variaveis.dark};
        transition: .3s;
    }

    nav li:hover {
      color: ${variaveis.orange};
      font-size: 30px;

    }

    nav div{
      justify-self: center;
    }

    @media ${device.desktopXSM}{
      nav li{
        font-size: 22px;
      }

      nav li:hover {
        font-size: 23px;
      }
    }

    @media ${device.mobile}{
        button{
          display: block;
          position: fixed;
          top: 2rem;
          right: 3rem;
          color: ${variaveis.dark};
          cursor: pointer;
          span{
            color: ${variaveis.dark};
            transition: .3s;
            font-size: 40px;
          }
          span:hover{
            color: ${variaveis.orange};
          }
        }

        nav{
          position: fixed;
          top: 96px;
          width: 200px;
          right: 0;
          background-color: ${variaveis.light_grey};
          height: 100%;
          overflow-x: hidden;
          transition: 0.6s;
          padding-top: 10px;
          display: flex;
          flex-direction: column;
        }

        .nav-open{
          right: 0;
        }

        .nav-closed{
          right: -220px;
        }

        nav li{
          display: block;
          padding: .5rem .75rem;
          transition: all .5s linear;
        }

    }
`
export const IconStyled = styled.div`
    display: none;
    @media ${device.mobile}{
        width:25px;
        display: flex;
        justify-content: center;
        flex-direction:column;
        background-color: black;
        .line1,
        .line2,
        .line3 {
            width: 20px;
            height: 3px;
            background-color: ${variaveis.orange};
            margin: 3px 0;
        }

        
    }
`
