import styled from 'styled-components';

export const ContactBody = styled.main`
  height: calc(100vh - 88px);
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
    padding: 0 32px 0 32px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0,0,0,.2);
    
  }
  .icons {
    display: flex;
    flex-direction: column;
    gap: 16px;
    justify-content: center;
  }
  .text {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .styledBox {
    position: relative;
    background-color: rgba(0, 0, 0, .5);
    border: ${(props) => (props.theme.border.primary)};
    border-radius: ${(props) => (props.theme.borderRadius.primary)};
    width: 100%;
    max-width: 704px;
    max-height: 350px;
    min-height: 350px;
    padding: 16px;
    /* margin-bottom: 32px; */
    color: ${(props) => (props.theme.colors.primary)};
    font-size: large;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  #infoBox {
    display: none;
  }
  .footerIcons {
    position: absolute;
    bottom: -96px;
    left: 0px;
    width: 100%;
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
    .content {
      height: 100%;
      padding: 0 32px 0 32px;
    }
    .title {
      display: block;
    }
    .styledBox {
      flex-direction: row;
    }
    /* .footerIcons {
      display: none;
    } */
    .boxes {
    display: flex;
    gap: 4%;
  }
  #infoBox {
    display: flex;
  }
  }
  @media (min-width: 1200px) {
    .boxes {
      display: flex;
    }
  }
`;