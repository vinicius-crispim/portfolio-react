import styled from "styled-components";
import { device } from '../../styles/breakpoints'
import { variaveis } from "../../styles/variaveis";

export const HeaderStyled = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
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
        margin: 0 8px;
        font-size: 20px;
        color: ${variaveis.orange};
        transition: .4s;
    }

    nav li:hover {
      color: ${variaveis.dark_orange};
      font-size: 22px;

    }

    nav div{
      justify-self: center;
    }

    @media ${device.mobile}{
        button{
          display: block;
          position: fixed;
          top: 2rem;
          right: 3rem;
          color: #FDFDFD;
          cursor: pointer;
          span{
            color: ${variaveis.blue};

            font-size: 40px;
          }
          span:hover{
            color: ${variaveis.blue};
          }
        }

        nav{
          position: fixed;
          top: 98px;
          width: 200px;
          right: 0;
          background-color: ${variaveis.light_orange};
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

        .nav-btn{
          z-index: 2;
        }

        nav li{
          display: block;
          padding: .5rem .75rem;
          transition: all .5s linear;
          color: ${variaveis.dark};

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
            background-color: ${variaveis.blue};
            margin: 3px 0;
        }

        
    }
`
