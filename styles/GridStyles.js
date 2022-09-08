import styled from "styled-components";

export const Grid = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 10px;

  img {
    transition: 2.5s all cubic-bezier(0.14, 0.4, 0.09, 0.99);
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.05);
  }
  ${(props) => props.theme.media.mobileL} {
    div {
      height: 234px;
    }
  }
  ${(props) => props.theme.media.tablet} {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 21px 21px 21px;
    div {
      height: 300px;
    }
  }
  ${(props) => props.theme.media.laptop} {
    div {
      height: 350px;
    }
  }
  ${(props) => props.theme.media.laptopL} {
    div {
      height: 400px;
    }
  }
  ${(props) => props.theme.media.desktop} {
    div {
      height: 444px;
    }
  }
`;

export const ImgWrapperModal = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: inherit;
    display: block;
  }
`;

export const GridChild = styled.div`
  width: 100%;
  min-height: 215px;
  position: relative;
`