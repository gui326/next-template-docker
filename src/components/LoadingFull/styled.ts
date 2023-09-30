import styled, { keyframes } from "styled-components";

const blink = keyframes` 
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.2;
    }
    100% {
        opacity: 1;
    }
`;

export const TextLoading = styled.p`
  font-weight: 500;
  margin-top: 1rem;
  -webkit-animation: ${blink} 2s infinite both;
  animation: ${blink} 2s infinite both;
`;
