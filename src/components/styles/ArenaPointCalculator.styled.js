import styled from "styled-components";
import COLORS from "../../components";
export const Main = styled.main`
  // Mobile
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  box-sizing: border-box;
  max-width: 99vw;
  width: auto;
  min-height: 40vw;
  height: auto;
  margin: auto;
  margin-top: 5%;
  opacity: 90%;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);

  @media (min-width: 900px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    max-width: 100vw;
    min-width: 75vw;
    padding: 3rem 10%;
  }
`;

export const ArenaContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  border-radius: 5px;

  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  flex: 1 0 35%;
  max-width: 100%;
  margin: 1rem;
  padding: 1rem;
  @media (min-width: 1200px) {
    padding: 2rem;
    margin: 15px;
  }
  h2 {
    font-size: 1.2rem;
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
    max-width: 100%;

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
          font-size: 0.8rem;
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
    background-color: ${COLORS.fadedBackground};
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
      box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.6);

      thead {
        tr {
          th {
            font-size: 1rem;
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
