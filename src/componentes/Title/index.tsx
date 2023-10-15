import React from 'react';
import styled from 'styled-components';
import { TitleStyled } from './style';

export default function Title({children, size = '3.5rem', bold = true}){
    return(
        <TitleStyled $size={size} $bold={bold} >
            {children}
        </TitleStyled>
    )
}