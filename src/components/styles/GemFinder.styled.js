import styled from "styled-components";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-evenly;
  background-color: ${COLORS.fadedBackground};
  box-sizing: border-box;
  max-width: 100vw;
  min-height: 75vw;
  margin: auto;
  padding: 4rem;
  margin-top: 20%;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    padding: 5px;
    font-size: 0.9rem;
    max-width: 90vw;
  }
  @media screen and (max-width: 992px) {
    max-width: 90vw;
  }
`;

export const CheckBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  .categories-and-checkboxes {
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    background-color: ${COLORS.fadedBackground};
    border-radius: 5px;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
    border-right: 1px solid black;
  }
  .category-container {
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    border-radius: 5px;
  }
  .category-name {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem;
    height: 2rem;
    text-align: center;
    color: ${COLORS.offWhite};
    margin-bottom: 1rem;
    user-select: none;
  }

  .a-checkbox {
    position: relative;
    label {
      user-select: none;
      color: ${COLORS.offWhite};
    }

    input[type="checkbox"] {
      visibility: hidden;
    }

    .styled-checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      border: 1px solid grey;
    }

    &:hover input ~ .styled-checkmark {
      background-color: yellow;
    }
    &:active input ~ .styled-checkmark {
      background-color: red;
    }
    input:checked ~ .styled-checkmark {
      background-color: blue;
    }
    .styled-checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    /* display checkmark when checked */
    input:checked ~ .styled-checkmark:after {
      display: block;
    }

    .styled-checkmark:after {
      left: 6px;
      bottom: 5px;
      width: 6px;
      height: 6px;
      border: solid white;
      border-width: 4px 4px 4px 4px;
    }

    label,
    input {
      margin: 0.4rem;
      cursor: pointer;
      transform: scale(1.2);
      &:hover {
        transform: scale(1.5);
      }
    }
  }
`;

export const GemTableContainer = styled.section`
  max-width: 100%;
  min-width: 70%;
  font-size: 0.95rem;
  overflow-y: scroll;
  height: 50vw;
  display: block;
  table {
    width: 100%;
    border-collapse: separate;
    text-align: center;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
  }
  td {
    padding: 0.5rem;
  }
  th {
    color: ${COLORS.offWhite};
    padding: 1rem;
    background-color: ${COLORS.primary};
    user-select: none;
    top: 0;
    z-index: 2;
    position: sticky;
  }

  tbody tr {
    background-color: ${COLORS.offWhite};
    color: black;
    &:hover {
      background-color: ${COLORS.highlight};
    }
  }
  .gemNameCell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: all;
    img {
      width: 2.2rem;
      user-select: none;
      padding-left: 1px;
      border-radius: 10px;
    }
  }
  .gemColorCell {
    border-left: 1px solid black;
  }
  .gemQualityCell {
    letter-spacing: 0.5px;
  }
  #epicCells {
    color: #a335ee;
    font-weight: 700;
  }
  #rareCells {
    color: #0070ff;
    font-weight: 700;
  }
  #uncommonCells {
    color: #29c714;
  }
  #perfectCells {
    color: #29c714;
  }
  #blueCells {
    color: blue;
  }
  #redCells {
    color: red;
  }
  #yellowCells {
    color: #cccc00;
  }
  #orangeCells {
    color: #cc7a00;
  }
  #greenCells {
    color: green;
  }
  #purpleCells {
    color: purple;
  }
  .gemStatsHeader,
  .gemQualityHeader,
  .gemColorHeader,
  .gemNameHeader {
    // Headers
    display: flex;
    justify-content: center;
    cursor: pointer;
    .sortImage {
      transition: transform 450ms;
      pointer-events: none;
    }
    &:hover {
      color: ${COLORS.highlight};

      .sortImage {
        color: ${COLORS.offWhite};
        transition: transform 325ms;
        transform: rotate(180deg);
      }
    }
  }
  p.gemsNotFound {
    font-size: 23px;
    text-align: center;
    color: ${COLORS.offWhite};
    margin: 30%;
    margin-right: 50%;
  }
  @media screen and (max-width: 992px) {
    // Mobile
    td {
      padding: 3px;
    }
    tr {
      display: flex;
      flex-direction: column;
    }
    th {
      padding: 0.2rem;
      font-size: 1.5rem;
    }
    table {
      width: 90vw;
    }
    .gemStatsCell,
    .gemQualityCell,
    .gemColorCell {
      font-weight: 300;
      border: none;
    }
    .gemStatsCell {
      box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);

      font-weight: 500;
    }
    .gemNameCell {
      display: flex;
      font-weight: 800;
      justify-content: center;
      align-items: center;
      padding-bottom: 0px;
      img {
        width: 2rem;
      }
    }
    .gemColorHeader,
    .gemNameHeader,
    .gemStatsHeader {
      display: none;
    }
  }
`;
