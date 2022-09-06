import styled from 'styled-components';

export const NavContainer = styled.div`
  font-size:20px;
  background-color: ${(props) => (props.theme.colors.transparent)};
  color: ${(props) => (props.theme.colors.primary)};
  width: 100%;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  h2 {
    font-weight: 400;
    font-size: 16px;
    margin: 21px 0;
  }
  .name {
    text-align: center;
    font-weight: 400;
  }
  .mdDisplay {
    display: none;
  }

  ${(props) => (props.theme.media.tablet)} {

    h2 {
      font-size: 20px;
    }
    
    .smDisplay {
      display: none;
    }
    .mdDisplay {
      display: flex;
    }
   }
`;
export const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 32px;
  }
`;

export const NavWrapper = styled.div`
  width: ${(props) => props.width ? props.width : '100%'};
  display: flex;
  justify-content: ${(props) => {
    switch (props.justify) {
      case 'icon':
        return 'flex-end';
      case 'title':
        return 'center';
      default:
        return 'none';
    }
  }}       
`;
