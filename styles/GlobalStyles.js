import styled from 'styled-components';

export const Layout = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    color: ${(props) => (props.theme.colors.primary)};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 21px;
`;
