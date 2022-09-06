import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  form {
    width: 100%;
    height: 100%;
    padding-top: 21px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .buttonContainer {
    margin-top: 10px;
    display: flex;
    justify-content: flex-end;
  }

  button {
    border-radius: ${(props) => (props.theme.borderRadius.primary)};
    border: ${(props) => (props.theme.border.primary)};
    outline: ${(props) => (props.theme.border.primary)};
    outline-offset: -2px;
    transition: outline-offset 250ms ease;
    background-color: transparent;
    color: ${(props) => (props.theme.colors.primary)};
    padding: 8px 16px;
    font-size: large;
    cursor: pointer;
  }

  button:hover {
    outline-offset: -6px
  }
`;

export const InputWrapper = styled.div`
  min-height: 90px;

  input,
  textarea {
    max-width: 100%;
    width: 100%;
    padding: 16px;
    border-radius: ${(props) => (props.theme.borderRadius.primary)};
    border: ${(props) => (props.theme.border.primary)};
    background-color: transparent;
    color: ${(props) => (props.theme.colors.primary)};
    font-family: inherit;
    font-size: inherit;
  }

  textarea{
    min-height: 300px;
  }

  input::placeholder,
  textarea::placeholder {
    color: ${(props) => (props.theme.colors.primary)};
  }

  ${(props) => (props.theme.media.tablet)} {
    textarea{
      min-height: 150px;
    }
    form {
      padding-top: 0;
    }
  }
`;