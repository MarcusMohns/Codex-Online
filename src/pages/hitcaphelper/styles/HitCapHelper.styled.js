import styled from "styled-components";
import COLORS from "../../../colors";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0rem 4rem;
  font-size: 1rem;
  color: white;
  margin-top: 7%;
  min-height: 60vh;
  overflow: hidden;

  .radio-input-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 1rem;
  }

  .input-radio-and-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @media screen and (max-width: 992px) {
      img {
        width: 40px;
        height: 40px;
      }
    }
    @media screen and (max-width: 650px) {
      padding: 0.1rem;
      img {
        width: 28px;
        height: 28px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    box-shadow: none;
    padding: 5px;
    font-size: 0.9rem;
    max-width: 90vw;
    min-width: 100%;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-top: 2rem;
  padding: 1rem;
  animation: 0.4s linear 0s fade-in;

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

    img {
      width: 56px;
      height: 56px;
      margin-top: 1rem;
    }
  }

  .raidbuffs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;

    img {
      width: 112px;
      height: 56px;
      margin-top: 1rem;
    }
  }

  .draenei-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;

    img {
      width: 56px;
      height: 56px;
      margin-top: 1rem;
    }
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

export const AdditionalHitContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  padding: 0 1rem;
  color: #bfc0c0;
  margin-top: 2rem;
  h2 {
    padding: 0.5rem 0rem;
    font-size: 1.2rem;
    margin-top: 20px;
    text-align: center;
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
  padding: 1rem;

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
  img {
    border-radius: 5px;
    display: none;
  }
  .results-main-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .results-text {
    font-size: 1.1rem;
    text-align: center;
    word-break: break-word;
    margin: 0px 15px;
    width: 50%;
    .sub-text {
      font-size: 1rem;
    }

    div {
      margin: 5px;
    }
  }

  .hit-text {
    padding: 1rem;
    text-align: center;
    word-break: break-word;
  }

  .hit-result {
    color: ${COLORS.goldHighlight};
  }

  .amount-of-hit {
    font-weight: 700;
  }

  .character-sheet-img {
    box-shadow: 0px 0px 10px 5px #000;
    border-radius: 10px;
    opacity: 80%;
  }

  .additional-hit-blood-elf {
    color: pink;
  }
  .additional-hit-night-elf {
    color: #00cc00;
  }
  .additional-hit-retribution-paladin {
    color: ${COLORS.paladin};
  }
  .additional-hit-subtlety-rogue {
    color: ${COLORS.rogue};
  }
  .additional-hit-undead {
    color: #ff3d3d;
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
    border-spacing: 1px;
    width: 90%;
  }
  td {
    padding: 0.4rem;
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
      margin-left: 5px;
      width: 28px;
      height: 28px;
    }
  }

  th {
    background-color: #222;
    color: ${COLORS.offWhite};
    padding: 0.5rem;
    img {
      margin-left: 2px;
    }
    .pve-or-pvp-icon,
    .draenei-icon,
    .results-pve-icon,
    .results-pvp-icon {
      width: 28px;
      height: 28px;
    }
    .raid-hit-buff-icon {
      height: 29px;
      width: 58px;
    }

    span {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      justify-items: center;
    }

    @media screen and (min-width: 992px) {
      padding: 1rem;
    }
  }

  .bold-result {
    font-size: 1.3rem;
    color: ${COLORS.goldHighlight};
  }

  tbody tr {
    background: #222;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 992px) {
    table {
      width: 100%;
    }
    .results.text {
      margin: 0px;
    }
    img {
      display: initial;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
