import React from 'react';
import { TitleStyled } from './style';



export default function Title({children, size = '3.5rem', bold = true}){
    return(
        <TitleStyled bold={bold} size={size}>
            {children}
        </TitleStyled>
    )
}