import styled from 'styled-components';

export const Box = styled.div`
  background-color: rgba(0, 0, 0, .5);
  padding: 8px;
  border: ${(props) => (props.theme.border.primary)};
  border-radius: ${(props) => (props.theme.borderRadius.primary)};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;