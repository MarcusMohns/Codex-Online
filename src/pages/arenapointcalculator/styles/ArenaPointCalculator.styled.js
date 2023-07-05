import styled from "styled-components";
import COLORS from "../../../colors";
export const Main = styled.main`
  // Mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 99vw;
  width: auto;
  min-height: 40vw;
  height: auto;
  margin: auto;
  opacity: 90%;
  font-size: 1rem;
  margin-top: 7%;

  @media (min-width: 900px) {
    align-items: flex-start;
    max-width: 100vw;
    min-width: 75vw;
  }
`;

export const ArenaSection = styled.section`
  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  background-color: ${COLORS.fadedBackground};
  padding: 1rem;
  margin: 1rem auto;
  color: white;
  max-width: 70%;
  font-family: sans-serif;
`;

export const ArenaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-items: center;
  border-radius: 5px;
  max-width: 100%;
  margin: 1rem;
  padding: 1rem;

  @media (min-width: 1200px) {
    padding: 2rem;
    margin: 0rem;
    border-radius: 0px;
  }
  h2 {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 3rem;
    width: 100%;
    background-color: ${COLORS.fadedPrimary};
    color: ${COLORS.offWhite};
    box-shadow: 0 2px 6px -1px #000;
    user-select: none;
  }

  table {
    letter-spacing: 1px;
    border-spacing: 0.5rem;
    border-radius: 3px;
    max-width: 100%;
    box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.6);
    background-color: #222;

    .results {
      color: ${COLORS.goldHighlight};
      font-size: 1.2rem;
      height: 100%;
      border-radius: 5px;
    }

    thead {
      tr {
        th {
          background-color: ${COLORS.fadedGrey};
          color: ${COLORS.offWhite};
          box-shadow: 0 2px 6px -1px #000;
          border-radius: 5px;
          user-select: none;
          text-align: center;
          vertical-align: center;
          font-size: 0.9rem;
          padding: 1rem;
        }
      }
    }
  }
  td,
  th {
    text-align: center;
    color: white;
  }

  .bracket-col {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    background-color: ${COLORS.fadedGrey};
    height: 2.5rem;
  }
  input {
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
  }

  @media (min-width: 400px) {
    th {
      padding: 0.4rem;
    }
  }
  @media (min-width: 1200px) {
    th {
      padding: 1rem;
    }
    table {
      padding: 1rem;

      thead {
        tr {
          th {
            font-size: 0.9rem;
          }
        }
      }

      th {
        text-align: center;
        color: white;
      }
    }
  }
`;
