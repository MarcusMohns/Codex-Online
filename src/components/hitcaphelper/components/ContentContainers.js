// import React from "react";
import COLORS from "../../../components";
import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-top: 2rem;
  padding: 1rem;
  animation: 0.5s linear 0s fade-in;

  @keyframes fade-in {
    0% {
      filter: blur(2px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }

  label {
    cursor: pointer;
  }

  .pvp-or-pve-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
  }

  .raidbuffs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: auto;

  .radio-input-container {
    margin-top: 2rem;
  }

  .character-sheet-img {
    border-radius: 5px;
  }

  #death-knight {
    color: ${COLORS.deathKnight};
    display: block;
  }
  #druid {
    color: ${COLORS.druid};
    display: block;
  }
  #hunter {
    color: ${COLORS.hunter};
    display: block;
  }
  #mage {
    color: ${COLORS.mage};
    display: block;
  }
  #paladin {
    color: ${COLORS.paladin};
    display: block;
  }
  #priest {
    color: ${COLORS.priest};
    display: block;
  }
  #rogue {
    color: ${COLORS.rogue};
    display: block;
  }
  #shaman {
    color: ${COLORS.shaman};
    display: block;
  }
  #warrior {
    color: ${COLORS.warrior};
    display: block;
  }
  #warlock {
    color: ${COLORS.warlock};
    display: block;
  }

  @media screen and (max-width: 992px) {
    padding: 3rem;

    .character-sheet-img {
      width: 80%;
      height: 80%;
    }
  }
`;

export const SmallContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  padding: 0 1rem;
  color: #bfc0c0;

  .druid {
    color: ${COLORS.druid};
  }
  .priest {
    color: ${COLORS.priest};
  }
  svg {
    margin-left: 5px;
  }
`;

export const StyledCapHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  align-content: center;
  letter-spacing: 1px;
  font-size: 1.3rem;
  text-align: center;
  font-family: sans-serif;

  .druid {
    color: ${COLORS.druid};
  }
  .priest {
    color: ${COLORS.priest};
  }
`;

export const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  padding: 1rem;
  font-family: sans-serif;
  animation: 0.3s linear 0s fade-in;

  .character-sheet-img {
    margin-top: 1rem;
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  table {
    text-align: center;
    margin-bottom: 2rem;
  }
  td {
    padding: 0.2rem;
    svg {
      margin-left: 2px;
    }
    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }
    .results-pve-icon,
    .results-pvp-icon {
      width: 24px;
      height: 24px;
    }
  }

  th {
    background-color: #222;
    color: ${COLORS.offWhite};
    padding: 1rem;
    img {
      margin-left: 2px;
    }
    .pve-or-pvp-icon,
    .draenei-icon,
    .results-pve-icon,
    .results-pvp-icon {
      width: 24px;
      height: 24px;
    }
    .raid-hit-buff-icon {
      height: 24px;
      width: 48px;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }

    @media screen and (max-width: 992px) {
      padding: 0.5rem;
    }
  }

  .bold-result {
    font-size: 1.1rem;
    color: ${COLORS.goldHighlight};
  }

  tbody tr {
    background: #222;
    font-size: 0.9rem;
  }
  @media screen and (max-width: 1500px) {
    width: 100%;
  }

  @media screen and (max-width: 992px) {
    img {
      display: none;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
