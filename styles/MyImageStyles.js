import styled, { keyframes } from "styled-components";

const loadingFlash = keyframes`
  0% {
      background-position: -250px;
  }
  100% {
      background-position: calc(100% + 250px);
  }
`;

export const Skeleton = styled.div`
  width: 100%;
  height: 5rem;
  background-color: rgb(240, 240, 240);
  border-radius: 5px;
  margin-bottom: 1rem;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background: linear-gradient(
      90deg,
      rgb(240, 240, 240) 0px,
      #f9f9f9 calc(50% - 25px),
      #f9f9f9 calc(50% + 25px),
      rgb(240, 240, 240) 100%
    );
    background-size: 35%;
    background-position: 0%;
    background-repeat: no-repeat;
    animation: ${loadingFlash} 1.5s infinite linear;
  }
`;

const spinnerSpin = keyframes`

100% {
      transform: rotate(360deg);
    }
`;
const spinnerFade = keyframes`
    20% {
      opacity: .1;
    }
    40% {
      opacity: 1;
    }
    60% {
      opacity: .1;
    }
`;

export const Spinner = styled.div`
  position: relative;
  margin: auto;
  box-sizing: border-box;
  background-clip: padding-box;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 4px solid rgba(255, 255, 255, 0.1);
  -webkit-mask: linear-gradient(rgba(0, 0, 0, 0.1), #000000 90%);
  transform-origin: 50% 60%;
  transform: perspective(200px) rotateX(66deg);
  animation: spinner-wiggle 1.2s infinite;

  &::before,
  &::after {
    content: "";
    position: absolute;
    margin: -4px;
    box-sizing: inherit;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    opacity: 0.05;
    border: inherit;
    border-color: transparent;
    animation: ${spinnerSpin} 1.2s cubic-bezier(0.6, 0.2, 0, 0.8) infinite,
      ${spinnerFade} 1.2s linear infinite;
  }

  &::before {
    border-top-color: #ffffff;
  }

  &::after {
    border-top-color: #ffffff;
    animation-delay: 0.3s;
  }
`;
