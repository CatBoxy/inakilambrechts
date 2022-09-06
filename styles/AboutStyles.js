import styled from 'styled-components';

export const AboutBody = styled.main`
  height: 910px;
  width: 100%;
  .bgWrapper {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
    background-color: rgba(0,0,0,.5);
  }
  .content {
    position: absolute;
    padding: 88px 32px 0 32px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgba(0,0,0,.2);
  }
  .styledBox {
    background-color: rgba(0, 0, 0, .5);
    border: ${(props) => (props.theme.border.primary)};
    border-radius: ${(props) => (props.theme.borderRadius.primary)};
    width: 100%;
    max-height: 700px;
    padding: 16px;
    margin-bottom: 32px;
    color: ${(props) => (props.theme.colors.primary)};
    font-size: large;
    overflow-y:auto;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  .footerIcons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => (props.theme.colors.primary)};
    min-height: 80px;
  }
  .title {
    display: none;
    color: ${(props) => (props.theme.colors.primary)};
    font-size: 48px;
    margin: 72px 0 ;
  }
  ${(props) => (props.theme.media.tablet)} {
    height: 885px;
    .content {
      justify-content: space-between;
      height: 100%;
      padding: 0 32px 0 32px;
    }
    .title {
      display: block;
    }
    .styledBox {
      flex-direction: row;
      padding: 62px 32px;
    }
    .footerIcons {
      justify-content: center;
      gap: 8px;
      padding-bottom:128px ;
    }
  }
`;