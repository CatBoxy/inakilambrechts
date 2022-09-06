import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: black;
    height: 100vh;
    width: 100%;
    color: ${(props) => (props.theme.colors.primary)};
    display: flex;
    flex-direction: column;
    align-items: center;

    article {
        width: 100%;
        cursor: pointer;
    }

    div {
        height: 95vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    footer {
        display: flex;
        justify-content: center;
    }

    h1, p {
        margin: 0;
        font-weight: 300;
    }
`;