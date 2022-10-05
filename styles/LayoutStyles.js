import styled, { css } from 'styled-components';

export const MainWrapper = styled.div`
  mix-blend-mode: difference;
  height: ${(props) => (props.height)};
  width: 100%;
  padding: ${(props) => (props.padding || '0 32px')};
  background-color: ${(props) => (props.theme.colors.background)};
  display: flex;
  align-items: center;
  ${(props) => {
    switch (props.sticky) {
      case true:
        return css`
          background-color: ${(props) => (props.theme.colors.transparent)};
          position: sticky;
          z-index: 1;
          top: 0;
          
        `;
      default:
        return css`
          background-color: ${(props) => (props.theme.colors.primary)};
          color: ${(props) => (props.theme.colors.background)};
        `;
    }
  }}
  ${(props) => (props.theme.media.tablet)} {
    padding:${(props) => (props.padding || '0 32px')};
  }
`;