import styled from "styled-components";
import COLORS from "../../components";
export const Main = styled.main`
  // Mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  flex-direction: column;
  box-sizing: border-box;
  max-width: 100vw;
  max-height: 100vw;
  min-height: 100%;
  margin: auto;
  margin-top: 20%;
  opacity: 90%;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  padding: 3rem;

  @media (min-width: 1200px) {
    align-items: center;
    justify-content: top;
    max-width: 100vw;
    min-width: 75vw;
  }

  @media screen and (min-width: 992px) {
  }
`;

export const ArenaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.offWhite};
  margin-bottom: 3rem;
  border-radius: 5px;
  min-width: 80%;
  max-width: 100%;
  padding: 0.8rem;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);

  .textArea {
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.1);

    h2 {
      justify-content: center;
      align-items: center;
      box-sizing: border-box;
      background-color: ${COLORS.primary};
      color: ${COLORS.lightText};
      text-align: center;
      letter-spacing: 1px;
      padding: 1.2rem;
      font-size: 1rem;
    }
    h3 {
      padding: 2rem;
      font-size: 1rem;
    }
  }

  table {
    margin-top: 2rem;
    letter-spacing: 1px;
  }
  td,
  th {
    padding: 0.5rem;
    text-align: center;
  }

  td {
    font-weight: 800;
  }

  .bracket-col {
    background-color: ${COLORS.highlight};
    padding: 1rem;
  }
  input {
    height: 1rem;
    width: 8rem;
    padding: 0.5rem;
  }

  @media (min-width: 1200px) {
    align-items: top;
    border-radius: 1rem;
    max-width: 90%;

    table {
      border-collapse: separate;
      padding: 0.5rem;
      box-shadow: 3px 5px 5px -2px rgba(0, 0, 0, 0.2);
    }
    input {
      height: 0.5rem;
      width: 8rem;
    }
  }
`;
