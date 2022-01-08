import styled from "styled-components";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { CgChevronLeftO } from "react-icons/cg";
import { MdOutlineAddBox, MdRestartAlt } from "react-icons/md";
import { RiDeleteBack2Line } from "react-icons/ri";
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
  background-color: ${COLORS.fadedBackground};
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
    width: fit-content;
    position: fixed;
    top: 25%;
    right: 0%;
    z-index: 2;
    transition: all 150ms;
    max-width: 50%;

    .arrow-left {
      transition: all 400ms;
      transform: rotate(180deg) translate(-100%);
      align-self: center;
      color: #fff;
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
    .arrow-left {
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
  max-width: 50%;
  max-height: 50%;
  z-index: 2;
  @media screen and (min-width: 1200px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    background-color: ${COLORS.fadedBackground};
    border: 1px solid black;
    max-width: 100%;
    max-height: 100%;
    padding: 0.5rem;
    transition: all 300ms;
  }
  .spec-buttons {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const StyledSpecButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${COLORS.lightText};
  transition: 0.2s;
  background: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;
  &:hover {
    transform: scale(95%);
  }

  .text-and-image-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0.7rem;

    .specbutton-text {
      margin-left: auto;
    }
    .specbutton-image {
      width: 1.3rem;
      border-radius: 20%;
      margin-left: auto;
    }
  }
  @media (min-width: 1200px) {
    margin: 2px;
    border-radius: 5px;
    border: ridge transparent;
  }
`;

export const StyledBlessingCheckboxes = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid black;
  .blessing-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0.3rem;

    &:hover {
      transform: scale(1.1);
    }
    .a-blessing-image {
      width: 1.1rem;
    }

    .a-blessing-checkbox {
    }
  }
`;

export const RaidContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.primaryTransparent};
  min-width: 100%;
  max-width: 100%;
  height: min-content;
  margin-bottom: 50px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);

  .raid-is-not-full {
    display: flex;
    width: 100%;
    transform: translate(0%, -100%);
    transition: all 0.5s;
    z-index: 0;
    align-items: center;
    justify-content: center;
  }
  .raid-is-full {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: ${COLORS.lightText};
    width: 100%;
    transform: translate(0%, 0%);
    transition: all 0.5s;
    margin-top: 1px;
    padding: 2px;
    z-index: 0;
  }
  .raid-is-full-warning {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: red;
    color: ${COLORS.lightText};
    width: 100%;
    transform: translate(0%, 0%);
    transition: all 0.3s;
    margin-top: 1px;
    padding: 2px;
    z-index: 0;
  }
  @media (min-width: 576px) {
    grid-area: Raid;
    min-height: 95%;

    .no-players-text {
      margin: auto;
      display: flex;
      color: ${COLORS.lightText};
      font-size: 1.3rem;
    }
  }
`;

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  font-weight: bold;
  background: ${(props) => props.background};
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;
  cursor: pointer;
  color: white;
  font-size: 0.7rem;
  margin: 1px;

  /* box-shadow: ${(props) =>
    props.isDragging ? "rgba(255, 255, 255, 0.5) 0px 3px 8px" : "none"}; */

  #class-img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  #delete-player-img {
    align-self: flex-end;
    padding: 1px;
    margin-right: 2px;
    font-weight: bold;
    font-size: 1.3rem;
    text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
      #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    transform: translateY(-0.2em);
  }

  @media (min-width: 1200px) {
    margin: 3px;
    font-size: 0.8rem;
    padding: 0rem;
    border-radius: 0.33rem;

    img {
      display: normal;
      padding: 0.5rem;
    }
  }
`;

export const BuffContainer = styled.section`
  grid-area: Buffs;
  box-sizing: border-box;
  background-color: ${COLORS.fadedBackground};
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
  border: 3px solid black;

  @media (min-width: 1200px) {
    flex-direction: row;
    margin-bottom: 0px;
    border: none;
  }
`;

export const StyledBuff = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
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
    margin-left: 0.3rem;
    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  p {
    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    color: ${COLORS.blackText};
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
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-size: 0.9rem;
  background-color: ${(props) => props.color};
  transition: background-color 0.5s;
  color: ${COLORS.darktext};
  width: 100%;
  .category-name-text {
    display: flex;

    padding: 1rem;
  }
  .tooltip {
    display: none;
    position: relative;
    padding: 0px;
    left: 100%;
    z-index: 1;
  }
  .tooltip .tooltiptext {
    position: absolute;
    min-width: 200px;
    min-height: 100%;
    background-color: ${COLORS.offWhite};
    visibility: hidden;
    border-radius: 0.5rem;
    box-sizing: border-box;
    transition: opacity 0.5s;
    transform: translate(10%, -50%);
    background-color: ${COLORS.blackText};
    opacity: 0;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    .title {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${COLORS.fadedPrimary};
      width: 100%;
      height: fit-content;
      border-bottom: 1px solid #444444;
      border-radius: 0.5rem 0.5rem 0 0;
    }
    img {
      width: 32px;
      padding: 5px;
    }
    h3 {
      margin-top: 5%;
      font-style: italic;
    }
    .spell-description {
      padding: 10px;
      div {
        padding: 5px;
        .debuff {
          color: red;
        }
        .buff {
          color: green;
        }
        .buff-value {
          font-weight: 800;
        }
        .spell-names {
          border-top: 1px solid white;
          border-bottom: 1px solid white;
          margin-bottom: 5px;
        }
      }
      .fine-print {
        font-weight: 200;
        color: grey;
      }
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
    border-color: transparent #000 transparent transparent;
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
    padding: 0.4rem;
    justify-content: space-between;

    .tooltip {
      display: initial;
    }

    .category-name-text {
      margin-left: 1.5rem;
      padding: 0rem;
    }
  }
`;

export const UtilityContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: ${COLORS.fadedBackground};
  min-width: 100%;
  margin-bottom: 50px;
  height: fit-content;
  border-radius: 0.5rem;
  padding: 1rem;

  @media (min-width: 1200px) {
    grid-area: Utils;
    min-height: 95%;
    max-height: 100%;
    margin-bottom: 0px;
    padding: 0rem;
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
  user-select: none;
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

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 3rem;
  width: 100%;
  background-color: ${COLORS.primary};
  color: ${COLORS.offWhite};
  margin-bottom: 1rem;
  box-shadow: 0 2px 6px -1px #000; ;
`;
export const RaidContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  width: 100%;
  max-width: 100%;
  margin-bottom: 2px;
  background-color: ${COLORS.primary};
  color: ${COLORS.offWhite};
  box-shadow: 0 2px 6px -1px #000;
  z-index: 1;
  user-select: none;

  .raid-text {
    display: none;
  }
  .btn-container {
    display: flex;
    justify-self: flex-end;
  }
  .raid-status-container {
    display: flex;
    margin-left: 2px;

    .raid-count {
      margin-right: 1rem;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1200px) {
    height: 3rem;

    .raid-text {
      display: initial;
      margin-right: 7.3rem;
    }
    .raid-status-container {
      display: flex;
      .raid-count {
        margin-right: 1rem;
        margin-left: 1rem;
        font-size: 1.1rem;
      }
    }
  }
`;

export const NoPlayersText = styled.p`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.lightText};
  font-size: 1.3rem;
  min-height: 20vw;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex: 1;
  padding: 0.5rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  background-color: ${(props) =>
    props.isDraggingOver
      ? `${COLORS.primary}`
      : `${COLORS.primaryTransparent}`};
`;

export const GroupContainer = styled.div`
  box-sizing: border-box;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 20%;
  min-height: 22vw;
  background-color: ${COLORS.primaryTransparent};
`;
export const GroupTitle = styled.div`
  ${COLORS.veryFadedPrimary};
  user-select: none;
  margin-right: 2px;
  margin-bottom: 5px;
  padding: 5px;
  background-color: ${COLORS.primary};
  color: ${COLORS.offWhite};
  border: none;
  font-size: 1rem;
  animation-name: reveal;
  animation-duration: 1s;
  transition: transform 1000ms;
  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards;

  @keyframes reveal {
    0% {
      opacity: 0%;
    }
    25% {
      opacity: 25%;
    }
    50% {
      opacity: 50%;
    }
    75% {
      opacity: 75%;
    }
    100% {
      transform: translateY(15%);
      opacity: 100%;
    }
  }
`;
export const RaidGroupContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: baseline;
  text-align: center;
  width: 100%;
  transition: min-height 0.2s;
  min-height: 22vw;
`;
export const CrossIcon = styled(FaRegTimesCircle)`
  color: red;
  min-width: 1.5rem;
  font-size: 1.5rem;
  animation-name: buffCategoryImage;
  animation-duration: 0.5s;
`;
export const CheckCircle = styled(FaRegCheckCircle)`
  color: green;
  min-width: 1.5rem;
  font-size: 1.5rem;
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

export const ArrowLeft = styled(CgChevronLeftO)`
  color: white;
  font-size: 2rem;
  cursor: pointer;
  opacity: 50%;
  z-index: 2;
`;

export const ResetIcon = styled(MdRestartAlt)`
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: transform 400ms;
  display: flex;
  border-radius: 50%;
  &:hover {
    transform: scale(1.2);
  }
`;
export const AddPlayerIcon = styled(MdOutlineAddBox)`
  font-size: 1.5em;
  margin-left: 5px;
  color: white;
`;
export const DeletePlayerIcon = styled(RiDeleteBack2Line)`
  font-size: 1.5em;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.2rem,
    #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem, #000 0rem 0rem 0.2rem;
`;
export const AddPlayerButton = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.fadedHighlight};
  color: ${COLORS.lightText};
  border-radius: 3px;
  margin-right: 1rem;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;

  #plus-sign {
    margin-left: 5px;
    font-size: 1.3rem;
  }

  &:hover {
    background-color: ${COLORS.highlight};
  }
`;
