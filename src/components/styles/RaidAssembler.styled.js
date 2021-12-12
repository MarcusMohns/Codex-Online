import styled from "styled-components";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { CgChevronLeftO } from "react-icons/cg";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100vw;
  min-height: 100vw;
  margin: auto;
  min-height: 100%;
  margin-top: 20%;
  background-color: ${COLORS.background};

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 0px 10px;
    grid-template-areas:
      "Raid Utils"
      "Buffs Buffs";

    padding: 2rem;
    max-width: 100vw;
    min-height: 95vw;
  }

  .right-menu {
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 25%;
    right: 0%;
    z-index: 1;
    transition: all 150ms;

    @media screen and (min-width: 1200px) {
      padding: 0.5rem;
      right: 1%;
    }

    .double-arrow-right {
      transition: all 400ms;
      transform: rotate(180deg) translate(-100%);
      align-self: center;
      color: #000;
      opacity: 100%;
      @media screen and (min-width: 1200px) {
        transform: rotate(180deg) translate(0%);
      }
    }
  }
  .hide-right-menu {
    display: flex;
    position: fixed;
    top: 25%;
    right: 0%;
    height: fit-content;
    z-index: 1;
    transition: all 150ms;
    transform: translate(100%);

    @media screen and (min-width: 1200px) {
      right: 1%;
    }
    .double-arrow-right {
      transition: all 400ms;
      transform: translate(-100%);
      align-self: center;
      color: #000;
      opacity: 100%;
      height: 2rem;
      width: 2rem;

      @media screen and (min-width: 1200px) {
        transform: translate(-50%);
        color: ${COLORS.offWhite};
        right: 1%;
      }
    }
  }
`;

export const SpecContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  max-width: 75%;
  max-height: 50%;

  @media screen and (min-width: 1200px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 0.5rem;
    align-items: center;
    background-color: ${COLORS.fadedPrimary};
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    padding: 1rem;
    transition: all 300ms;
  }

  .spec-buttons {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
  #spec-container-text {
    color: ${COLORS.lighttext};
    padding: 1rem;
  }
`;
export const StyledSpecButton = styled.button`
  display: flex;
  font-weight: bold;
  padding: 0.7rem;
  color: ${COLORS.lighttext};
  transition: 0.2s;
  background: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;

  &:hover {
    transform: scale(95%);
  }

  &:active {
    transform: scale(90%);
  }
  img {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 20%;
  }

  p {
    margin: auto;
  }

  @media (min-width: 1200px) {
    margin: 2px;
    border-radius: 5px;
    border: ridge transparent;
  }
`;

export const RaidContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${COLORS.primaryTransparent};
  min-width: 100%;
  height: min-content;
  margin-bottom: 50px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);

  .no-players-text {
    margin: auto;
    display: flex;
    color: ${COLORS.lighttext};
    font-size: 1.3rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    width: 100%;
    background-color: ${COLORS.primaryTransparent};
  }
  @media (min-width: 1200px) {
    grid-area: Raid;
    min-height: 95%;

    .grid {
      margin: auto;
      width: 80%;
      margin-bottom: auto;
    }
  }
`;

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.background};
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
  padding: 0.5rem;
  transition: transform 0.2;

  img {
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  &:hover {
    transform: translateY(-0.2em);
  }

  @media (min-width: 1200px) {
    margin: 5px;
    font-size: 0.8rem;
    padding: 0.8rem;
    border-radius: 0.33rem;

    img {
      display: normal;
    }
  }
`;

export const BuffContainer = styled.section`
  grid-area: Buffs;
  box-sizing: border-box;
  background-color: ${COLORS.background};
  display: flex;
  flex-direction: column;
  align-items: top;
  justify-content: top;
  width: 100%;
  max-width: 100%;
  height: fit-content;
  border-radius: 0.5rem;
  padding: 1rem;
`;

export const StyledBuffCategories = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
  width: 100%;
  margin-bottom: 2px;

  @media (min-width: 1200px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
`;

export const StyledBuff = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.2rem;
  border: 1px solid grey;
  background-color: ${COLORS.highlight};
  border-radius: 5px;
  margin: 1px;

  img {
    width: 25px;
    border-radius: 20%;
    margin-left: 0.5rem;
    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }

  p {
    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    color: ${COLORS.darktext};
    animation-fill-mode: forwards;
  }

  @keyframes FadeIn {
    0% {
      opacity: 0%;
    }
    50% {
      opacity: 50%;
    }
    75% {
      opacity: 75%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

export const StyledCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.4rem;
  margin-right: 1px;
  background-color: ${(props) => props.color};
  transition: background-color 0.5s;
  color: ${COLORS.darktext};
  width: 100%;

  .tooltip {
    position: relative;
    padding: 0px;
    left: 100%;
  }

  .tooltip .tooltiptext {
    position: absolute;
    min-width: 200px;
    min-height: 300px;
    max-height: 100%;
    background-color: white;
    z-index: 1;
    visibility: hidden;
    border-radius: 0.5rem;
    box-sizing: border-box;
    transition: opacity 0.5s;
    transform: translate(10%, -50%);
    background-color: black;
    opacity: 0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    .title {
      display: flex;
      flex-direction: column;
      background-color: ${COLORS.fadedPrimary};
      width: 100%;
      height: 50px;
      border-bottom: 1px solid #444444;
      border-radius: 0.5rem 0.5rem 0 0;
      padding-bottom: 10px;

      h3 {
        margin-top: 10%;
        font-style: italic;
      }
    }

    p {
      margin: auto;
    }
  }
  .tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%;
    margin-top: -5px;
    border-width: 0.5rem;
    border-style: solid;
    border-color: transparent #444444 transparent transparent;
  }

  &:hover {
    .tooltiptext {
      visibility: visible;
      opacity: 1;
    }
  }

  @media (min-width: 1200px) {
    flex-direction: row;
    width: 250px;
  }
`;

export const UtilityContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: ${COLORS.background};
  min-width: 100%;
  margin-bottom: 50px;

  @media (min-width: 1200px) {
    grid-area: Utils;
    min-height: 95%;
    margin-bottom: 0px;
  }
`;

export const StyledUtilities = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StyledUtility = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  font-size: 0.8rem;
  padding: 0.5rem;
  border: 1px solid grey;
  background-color: ${COLORS.highlight};
  border-radius: 5px;
  margin: 1px;
  opacity: 0%;
  animation-name: FadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  img {
    width: 30px;
    border-radius: 20%;
    margin-left: 0.5rem;
  }

  p {
    opacity: 0%;
    color: ${COLORS.darktext};
  }
`;

export const StyledContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  width: 100%;
  text-align: center;
  background-color: ${COLORS.primary};
  color: ${COLORS.offWhite};
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px -1px black;
`;

export const CrossIcon = styled(FaRegTimesCircle)`
  color: red;
  min-width: 1.5rem;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  animation-name: buffCategoryImage;
  animation-duration: 0.5s;
`;
export const CheckCircle = styled(FaRegCheckCircle)`
  color: green;
  min-width: 1.5rem;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  animation-name: buffCategoryImage;
  animation-duration: 0.8s;

  @keyframes buffCategoryImage {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export const DoubleArrowLeft = styled(CgChevronLeftO)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;
