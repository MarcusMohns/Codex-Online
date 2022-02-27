import styled from "styled-components";
import COLORS from "../../components";
export const Main = styled.main`
  // Mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  box-sizing: border-box;
  max-width: 100vw;
  min-height: 40vw;
  height: auto;
  margin: auto;
  margin-top: 15%;
  opacity: 90%;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  padding: 2rem;

  @media (min-width: 1200px) {
    align-items: center;
    flex-direction: row;
    justify-content: top;
    max-width: 100vw;
    min-width: 75vw;
    padding: 3rem;
  }

  @media screen and (min-width: 992px) {
  }
`;

export const ArenaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  border-radius: 5px;
  padding: 0.8rem;
  margin: 15px;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  flex: 1 0 35%;

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
    width: 100%;
    background-color: ${COLORS.primary};
    color: ${COLORS.offWhite};
    margin-bottom: 1rem;
    box-shadow: 0 2px 6px -1px #000;
    user-select: none;
  }

  table {
    letter-spacing: 1px;
    border-spacing: 0.5rem;
    border-radius: 5px;
    background-color: ${COLORS.fadedBlack};

    .results {
      color: ${COLORS.goldHighlight};
      font-size: 1.3rem;
      height: 100%;
      border-radius: 5px;
    }

    thead {
      tr {
        th {
          background-color: ${COLORS.primary};
          color: ${COLORS.offWhite};
          box-shadow: 0 2px 6px -1px #000;
          border-radius: 5px;
          user-select: none;
          text-align: center;
          vertical-align: center;
        }
      }
    }
  }
  td,
  th {
    padding: 1rem;
    text-align: center;
    color: white;
  }

  .bracket-col {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: ${COLORS.fadedBackground};
    height: 2.5rem;
  }
  input {
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
  }

  @media (min-width: 1200px) {
    table {
      padding: 1rem;
      box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.6);
    }
  }
`;
