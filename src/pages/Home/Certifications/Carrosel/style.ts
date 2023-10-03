import styled from "styled-components";
import { variaveisColors, variaveisSpace } from "../..//../../styles/variaveis";

export const CarroselStyled = styled.section`
    padding: 0 !important;
    background-color:${variaveisColors.columbia_blue} ;
    overflow: hidden;
    position: relative;
    margin: 0 auto;
    width: 50%;
    height: auto;
    .slider_content{
        width:1000%;
        height: auto;
        display: flex;
    }
    
    .slider_content input{
            display:none;
    }

    .slide_box{
        width: 10%;
        height: auto;
        position: relative;
        text-align: center;
    }

    .slide_box img{
        width: 100%;
    }

    .nav_manual, .nav_auto{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
    }

    .nav_manual .manual_btn, .nav_auto div{
        border: 1px solid ${variaveisColors.dark};
        padding: 12px;
        border-radius: 50%;
        cursor: pointer;
        transition: .3s;
    }

    .nav_manual .manual_btn:not(:last-child), .nav_auto div:not(:last-child){
        margin-right: 12px;
    }

    .nav_manual .manual_btn:hover{
        background-color:${variaveisColors.dark_cadet_gray};
    }

    #radio1:checked ~ .nav_auto .auto_btn1,
    #radio2:checked ~ .nav_auto .auto_btn2,
    #radio3:checked ~ .nav_auto .auto_btn3,
    #radio4:checked ~ .nav_auto .auto_btn4,
    #radio5:checked ~ .nav_auto .auto_btn5,
    #radio6:checked ~ .nav_auto .auto_btn6{
        background-color:${variaveisColors.dark_cadet_gray}
    }
    #radio1:checked ~ .slide_1{
        margin-left: 0%;
    }
    #radio2:checked ~ .slide_1{
        margin-left: -10%;
    }
    #radio3:checked ~ .slide_1{
        margin-left: -20%;
    }
    #radio4:checked ~ .slide_1{
        margin-left: -30%;
    }
    #radio5:checked ~ .slide_1{
        margin-left: -40%;
    }
    #radio6:checked ~ .slide_1{
        margin-left: -50%;
    }
`