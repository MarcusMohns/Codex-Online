import styled from "styled-components";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: ${COLORS.fadedBackground};
  box-sizing: border-box;
  max-width: 100vw;
  width: auto;
  margin: auto;
  padding: 4rem;
  margin-top: 15%;
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  font-size: 1rem;
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    box-shadow: none;
    padding: 5px;
    font-size: 0.9rem;
    max-width: 90vw;
    min-width: 100%;
  }
  @media screen and (max-width: 992px) {
    max-width: 90vw;
    min-width: 100%;
  }

  .header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 100%;
    margin-left: 10vw;
    margin-bottom: 10px;
    color: white;
    margin-top: 3rem;
  }
`;

export const CheckBoxContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;

  .categories-and-checkboxes {
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 80%;
  }
  .category-container {
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: ${COLORS.fadedBlack};
    border-radius: 5px;
    width: 100%;
  }
  .category-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    text-align: center;
    color: ${COLORS.offWhite};
    margin-bottom: 1rem;
    user-select: none;
  }
  .checkboxes {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 150px;
    margin-left: auto;
  }

  .a-checkbox {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;

    .label-text {
      user-select: none;
      color: ${COLORS.offWhite};
      font-size: 0.8rem;
      margin-right: auto;
      margin-left: 1rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    input[type="checkbox"] {
      visibility: hidden;
      display: none;
    }

    .styled-checkmark {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 0;
      height: 1.1rem;
      width: 1.1rem;
      padding: 0;
      border-radius: 5px;
      cursor: pointer;
      background-color: ${COLORS.fadedBackground};
    }

    &:hover input ~ .styled-checkmark {
      border: 1px solid grey;
      background-color: ${COLORS.fadedBackground};
    }
    &:active input ~ .styled-checkmark {
      background-color: ${COLORS.fadedBlack};
    }
    input:checked ~ .styled-checkmark {
      background-color: ${COLORS.fadedGrey};
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
      content: "";
      width: 10px;
      height: 6px;
      border: 2px solid #dbdbec;
      border-top: none;
      border-right: none;
      transform: rotate(-45deg);
    }

    input {
      &:hover {
        transform: scale(1.5);
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .checkboxes {
      height: 100%;
      flex-wrap: nowrap;
    }
    .categories-and-checkboxes {
      width: 100%;
    }
  }
  @media screen and (max-width: 1500px) {
    .checkboxes {
      height: 100%;
      flex-wrap: nowrap;
    }
    .categories-and-checkboxes {
      width: 100%;
    }
  }
`;

export const GemTableContainer = styled.section`
  box-sizing: border-box;
  font-size: 0.95rem;
  overflow-y: scroll;
  height: 60vh;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
  border-bottom: 1px solid grey;

  table {
    min-width: 100%;
    border-collapse: separate;
    text-align: center;
    margin: 10px 0;
  }
  td {
    padding: 0.2rem;
  }

  th {
    background-color: ${COLORS.blackText};
    color: ${COLORS.offWhite};
    padding: 1rem;
    user-select: none;
    top: 0;
    z-index: 2;
    position: sticky;
  }

  tbody tr {
    color: ${COLORS.offWhite};

    &:nth-child(even) {
      background: ${COLORS.fadedBlack};
    }

    &:hover {
      background-color: ${COLORS.fadedHighlight};
    }
  }
  .gemNameCell {
    display: flex;
    align-items: center;
    justify-content: space-between;
    user-select: all;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0;
    img {
      width: 2.2rem;
      user-select: none;
      padding-left: 1px;
      border-radius: 10px;
    }
  }
  .gemColorCell {
    border-left: 1px solid grey;
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

  #blueCells {
    color: ${COLORS.shaman};
  }
  #redCells {
    color: ${COLORS.deathKnight};
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
    color: ${COLORS.warlock};
  }
  .gemStatsHeader,
  .gemSourceHeader,
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
    margin-top: 20px;
  }
  @media screen and (max-width: 992px) {
    height: 500px;

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
      border: none;
    }
    table {
      width: 100%;
    }
    .gemStatsCell,
    .gemQualityCell,
    .gemColorCell {
      font-weight: 300;
      border: none;
    }
    .gemStatsCell {
      font-weight: 500;
    }
    .gemSourceCell {
      box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.1);
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
    .gemSourceHeader,
    .gemStatsHeader {
      display: none;
      border: none;
    }
  }
`;
