import styled from "styled-components";
import COLORS from "../../../colors";
// Mobile
export const Main = styled.main`
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
  font-size: 1.1rem;
  text-align: center;
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
    justify-content: center;
    height: 3rem;
    width: 100%;
    background-color: ${COLORS.fadedBackground};
    color: ${COLORS.offWhite};
    user-select: none;
  }

  form {
    width: 100%;
  }

  table {
    letter-spacing: 1px;
    border-spacing: 0.5rem;
    border-radius: 3px;
    max-width: 100%;
    width: 100%;
    box-shadow: 1px 5px 10px -2px rgba(0, 0, 0, 0.6);
    background-color: #222;

    .results {
      color: ${COLORS.highlight};
      font-size: 1.2rem;
      height: 100%;
      border-radius: 5px;
    }

    thead {
      tr {
        th {
          color: ${COLORS.offWhite};
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
  }
  input {
    padding: 0.5rem;
    text-align: center;
    border-radius: 5px;
  }

  .hitcap-th {
    padding: 5px;
    border-radius: 0px;

    .hitcap-th-div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }
    img,
    p {
      border-radius: 15px;
      margin: 0px 3px;
      font-family: sans-serif;
      font-size: 1rem;
      border: 1px double grey;
    }
    p {
      padding: 0.4rem;
    }
    span {
      margin-right: auto;
      margin-left: 5px;
    }
  }

  .raid-hit-buff-icon {
    height: 29px;
    width: 58px;
  }

  .pve-or-pvp-icon,
  .draenei-icon,
  .results-pve-icon,
  .results-pvp-icon {
    width: 28px;
    height: 28px;
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
