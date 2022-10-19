import styled from "styled-components";

export const ListContainer = styled.div`
  ul {
    display: flex;
    flex-direction: row;
    gap: 30px;
    font-weight: 300;
  }

  .active {
    font-weight: 500;
  }

  p {
    cursor: pointer;
  }
`;
