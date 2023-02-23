import styled from "styled-components";
import COLORS from "../../../colors";
import { FaGem } from "@react-icons/all-files/fa/FaGem";
import { BsFilter } from "@react-icons/all-files/bs/BsFilter";
import { BsSearch } from "@react-icons/all-files/bs/BsSearch";
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  max-width: 100vw;
  width: auto;
  margin: auto;
  padding: 0rem 4rem;
  font-size: 1rem;
  margin-top: 7%;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
    color: white;
    margin-top: 2rem;
    width: 80%;

    .header-text-icon-container {
      display: flex;
      align-items: center;

      #search-icon {
        margin-left: auto;
      }
    }
    @media screen and (max-width: 1500px) {
      width: 100%;
    }
    @media screen and (max-width: 992px) {
      margin-left: 0px;
      align-items: center;
    }

    #search-gem-input {
      outline: none;
      border: 1px solid transparent;
      font-size: 1rem;
      border-radius: 10px;
      padding: 0.2rem;
      background-color: ${COLORS.fadedBackground};
      color: ${COLORS.offWhite};

      @media screen and (max-width: 510px) {
        width: 60%;
      }
    }
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
    box-sizing: border-box;
    align-items: flex-start;
    justify-content: center;
    border-radius: 5px;
    width: 80%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    @media screen and (max-width: 992px) {
      padding: 0px;
    }
    @media screen and (max-width: 510px) {
      flex-direction: column;
      align-items: center;
      padding: 0;
      box-shadow: none;
    }
  }
  .category-container {
    box-sizing: border-box;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    background-color: ${COLORS.fadedBlack};
    border-radius: 5px;
    width: 100%;

    @media screen and (max-width: 992px) {
      width: auto;
    }
    @media screen and (max-width: 510px) {
      width: 100%;
    }
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
    flex-wrap: wrap;
    letter-spacing: 1px;
  }
  .checkboxes {
    width: 100%;
    display: flex;
    flex-direction: column;
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
      width: 11px;
      height: 6px;
      border: 2px solid ${COLORS.offWhite};
      border-bottom: none;
      border-left: none;
      margin-bottom: 3px;
      transform: rotate(130deg);
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
  @media screen and (max-width: 510px) {
    .checkboxes {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      flex-wrap: wrap;
      max-height: 200px;
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
  border-bottom: 1px solid black;
  margin-bottom: 5rem;
  padding-left: 20px; // to account for scrollbar (also 20px wide)

  table {
    min-width: 100%;
    border-collapse: separate;
    text-align: center;
  }
  td {
    padding: 0.2rem;
  }

  th {
    background-color: #222;
    color: ${COLORS.offWhite};
    padding: 1rem;
    user-select: none;
    top: 0;
    z-index: 2;
    position: sticky;
  }

  tbody tr {
    color: ${COLORS.offWhite};

    &:nth-child(odd) {
      background: #222;
    }

    &:hover {
      background-color: ${COLORS.fadedBackground};
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
      width: 2rem;
      height: 2rem;
      user-select: none;
      padding-left: 1px;
    }
  }
  .gemColorCell {
    border-left: 1px solid grey;
  }
  .gemQualityCell {
    letter-spacing: 0.5px;
  }
  .gemSourceCell {
    color: ${COLORS.fadedHighlight};
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
    font-weight: bold;
  }
  #metaCells {
    color: teal;
    font-weight: 700;
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

  #prismaticCells {
    color: #c0c0c0;
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
  @media screen and (max-width: 1500px) {
    width: 100%;
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
        height: 2rem;
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

export const GemIcon = styled(FaGem)`
  font-size: 1.3em;
  margin-right: 0.5rem;
`;

export const FilterIcon = styled(BsFilter)`
  font-size: 1.5em;
  margin-right: 0.1rem;
`;

export const SearchIcon = styled(BsSearch)`
  font-size: 1.2em;
  margin-right: 0.5rem;
`;
