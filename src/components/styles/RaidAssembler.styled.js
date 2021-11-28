import styled from "styled-components";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { CgChevronDoubleLeftR } from "react-icons/cg";

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
  margin-top: 10%;
  background-color: #444444;
  opacity: 90%;

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 0px 0px;
    grid-template-areas:
      "Raid specs"
      "Buffs Buffs";

    padding: 2rem;
    max-width: 95vw;
    min-height: 95vw;
    border-radius: 5px;
  }

  .right-menu {
    display: flex;
    flex-direction: row;
    background-color: #264874;
    position: fixed;
    top: 15%;
    right: 0%;
    width: 50%;
    height: 80%;
    z-index: 1;
    border-radius: 0.3rem;
    transition: all 300ms;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);

    @media screen and (min-width: 1200px) {
      width: fit-content;
      padding: 1rem;
      right: 1%;
    }

    .double-arrow-right {
      padding: 1rem;
      position: absolute;
      transition: all 300ms;
      transform: translate(-100%) rotate(180deg);
      align-self: center;
      color: #000;
      opacity: 100%;
      height: 2rem;
      width: 2rem;
    }
  }
  .hide-right-menu {
    display: flex;
    background-color: #264874;
    position: fixed;
    top: 15%;
    right: 0%;
    width: 25%;
    height: 80%;
    z-index: 1;
    border-radius: 0.3rem;
    box-shadow: 5px 5px 6px 1px rgba(0, 0, 0, 0.35);
    transition: all 300ms;
    transform: translate(100%);
    .double-arrow-right {
      transition: all 300ms;
      transform: translate(-100%);
      align-self: center;
      color: #fff;
      opacity: 100%;
      height: 5rem;
      width: 5rem;
    }
  }
`;

export const SpecContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  grid-area: specs;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  max-height: 100%;

  .spec-buttons {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const StyledSpecButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0.7rem;
  margin: 0.5rem;
  font-size: 0.8rem;
  background: ${(props) => props.color};
  color: #fff;
  border: ridge transparent;
  cursor: pointer;

  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;

  &:hover {
  }

  &:active {
    transform: translateY(1px);
    filter: saturate(120%);
  }
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 20%;
  }

  p {
    margin: auto;
  }

  @media (min-width: 1200px) {
  }
`;

export const RaidContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 0.5rem;
  background-color: white;
  padding: 1rem;
  min-width: 100%;
  max-height: 100%;

  .raidCount {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
  }
  @media (min-width: 1200px) {
    min-height: 420px;
    grid-area: Raid;
  }
`;

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: inset 0px 1px 0px 0px #ffffff;
  background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
  background-color: #ffffff;
  border-radius: 0.33rem;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  color: #666666;
  font-size: 0.7rem;
  padding: 0.5rem;
  text-shadow: 0px 1px 0px #ffffff;
  transition: transform 0.2;

  img {
    position: relative;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
  }
  &:hover {
    transform: translateY(-0.1em);
  }

  p {
  }

  @media (min-width: 1200px) {
    margin: 5px;
    font-size: 0.8rem;
    padding: 1rem;

    img {
      display: normal;
    }
  }
`;

export const BuffContainer = styled.section`
  grid-area: Buffs;
  box-sizing: border-box;
  background-color: white;
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
  display: flex;
  flex-direction: column;

  @media (min-width: 1200px) {
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  @media (min-width: 1200px) {
    flex-direction: row;
    border-bottom: 1px solid grey;
  }
`;

export const StyledBuff = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.5rem;

  img {
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
    color: #666666;
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
  font-size: 1rem;
  padding: 0.5rem;
  background-color: ${(props) => props.color};
  transition: background-color 0.5s;
  color: black;
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
    background-color: #444444;
    opacity: 0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    .title {
      display: flex;
      flex-direction: column;
      background-color: #757575;
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
    width: 20%;
  }
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

export const DoubleArrowLeft = styled(CgChevronDoubleLeftR)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;
