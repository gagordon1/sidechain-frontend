import { keyframes } from "styled-components";

export const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 
    40% {transform: translateY(-30px);} 
    60% {transform: translateY(-15px);}   
 `

 export const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`
