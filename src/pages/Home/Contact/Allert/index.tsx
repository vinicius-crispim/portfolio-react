import React from "react";
import { AllertStyle } from "./style";
import { PStyled } from '../../../../componentes/EstiloGlobal/style';


export default function Allert({setDisplay}){
    return(
        <AllertStyle>
            <PStyled>
                Email enviado com sucesso!
                Obrigado, responderei assim que possível.
            </PStyled>
        </AllertStyle>
    )
}