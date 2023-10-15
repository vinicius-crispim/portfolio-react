import { device } from './../../../../styles/breakpoints';
import styled from "styled-components";

export const SkillStyled = styled.li`
    display: flex;
    align-items: center;
    flex-direction: ${props => props.$direction};
    justify-content: center;
    gap: 12px;
    
    p{
        padding: 1rem 0;
    }

    img{
        filter: drop-shadow(6px 6px 4px rgb(0 0 0 / 0.4));
    }
    
    @media ${device.desktopXSM} {
        flex-direction: column-reverse;
        padding: .5rem 0;
    }
`