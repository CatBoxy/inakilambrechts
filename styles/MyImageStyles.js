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

const anim = keyframes`
  0% {
    opacity:0.0;
    width:0vmin;
    height:0vmin;
  }
  10% {
    opacity:0.2;
  }
  100% {
    opacity:0.0;
    width:100vmin;
    height:100vmin;
  }
` 

export const Loader = styled.div`
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:0px;
  height:0px;
  border-radius:100%;
  opacity:0;
  border:1px solid white;
  animation:${anim} 4s infinite linear;
` 
  
const placeHolderShimmer = keyframes`
0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`  

export const Skeleton2 = styled.div`
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: ${placeHolderShimmer};
  -webkit-animation-timing-function: linear;
  background: #50535a;
  background-image: linear-gradient(to right, #50535a 0%, #656871 20%, #50535a 40%, #50535a 100%);
  background-repeat: no-repeat;
  /* background-size: 800px 104px; */
  height: 104px;
  position: relative;

  div {
    background-color: #313236;
    position: absolute;
    height: 40px;
    left: 40px;
    right: auto;
    top: 0;
    width: 8px;
  }
`
