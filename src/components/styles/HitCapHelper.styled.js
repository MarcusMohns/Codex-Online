import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100vw;
  min-height: 500px;
  padding: 0rem 4rem;
  font-size: 1rem;
  color: white;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    box-shadow: none;
    padding: 5px;
    font-size: 0.9rem;
    max-width: 90vw;
    min-width: 100%;
  }
`;
