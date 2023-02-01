import styled from "styled-components";

export const AboutBody = styled.main`
  height: calc(100vh - 88px);
  width: 100%;
  .bgWrapper {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .content {
    position: absolute;
    padding: 0 32px 0 32px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .styledBox {
    background-color: rgba(0, 0, 0, 0.5);
    border: ${(props) => props.theme.border.primary};
    border-radius: ${(props) => props.theme.borderRadius.primary};
    width: 100%;
    max-width: 704px;
    max-height: 360px;
    padding: 16px;
    color: ${(props) => props.theme.colors.primary};
    font-size: large;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .styledBox > p {
    text-align: justify;
  }

  .contactLink {
    cursor: pointer;
    text-decoration-line: underline;
  }

  .styledBox::-webkit-scrollbar {
    display: none;
  }
  .footerIcons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.primary};
    min-height: 80px;
  }
  .title {
    display: none;
    color: ${(props) => props.theme.colors.primary};
    font-size: 48px;
    margin: 72px 0;
  }
  ${(props) => props.theme.media.tablet} {
    .content {
      justify-content: center;
      height: 100%;
      padding: 0 32px 0 32px;
    }
    .title {
      display: block;
    }
    .styledBox {
      max-height: 100%;
    }
    .footerIcons {
      justify-content: center;
      gap: 8px;
      padding-bottom: 128px;
    }
  }
`;
