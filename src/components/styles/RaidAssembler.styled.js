import styled from "styled-components";
import { FaRegTimesCircle, FaRegCheckCircle } from "react-icons/fa";
import { CgChevronLeftO } from "react-icons/cg";
import {
  MdOutlineAddBox,
  MdRestartAlt,
  MdOutlineArrowDropDownCircle,
} from "react-icons/md";
import { RiDeleteBin2Line, RiEdit2Line } from "react-icons/ri";
import { FcInfo } from "react-icons/fc";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100vw;
  min-height: 100vw;
  height: auto;
  margin: auto;
  margin-top: 20%;
  background-color: ${COLORS.fadedBackground};

  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 10px 10px;
    grid-template-areas:
      "Raid Utils"
      "Buffs Buffs";
    padding: 2rem;
  }
  .add-player-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    min-width: 100%;
    bottom: 0px;
    left: 0%;
    z-index: 2;
    transition: transform 150ms;

    .arrow-left {
      position: absolute;
      bottom: 100%;
      opacity: 100%;
      transition: transform 400ms;
      transform: rotate(-90deg);

      @media screen and (min-width: 1200px) {
        transform: rotate(-90deg) translate(0%);
      }
    }
  }
  .hide-add-player-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    min-width: 100%;
    bottom: 0px;
    left: 0%;
    z-index: 2;
    transition: transform 150ms;
    transform: translateY(100%);
    @media screen and (min-width: 1200px) {
    }
    .arrow-left {
      position: absolute;
      bottom: 100%;
      transition: transform 400ms;
      transform: rotate(90deg);
      align-self: center;
      opacity: 100%;

      @media screen and (min-width: 1200px) {
        color: ${COLORS.offWhite};
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
  min-width: 100vw;
  z-index: 2;
  border-top: 2px black;

  @media screen and (min-width: 1200px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
  }
  .spec-buttons {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    background-color: ${COLORS.background};
    padding: 1px;
    border-radius: 5px;
  }
`;
export const StyledSpecButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
  color: ${COLORS.lightText};
  color: white;
  background: ${(props) => props.color};
  border: 1.5px outset grey;
  transition: transform 0.1s;
  cursor: pointer;
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;

  &:hover {
    transform: scale(95%);

    .class-tooltip-container {
      #info-image {
        visibility: visible;
      }
    }
  }
  .class-tooltip-container {
    #info-image {
      position: absolute;
      left: 0;
      bottom: 0;
      visibility: hidden;

      &:hover {
        transform: scale(1.2);
      }
    }

    &:hover #info-image ~ div {
      display: flex;
    }
    #info-image ~ div {
      display: none;
    }
  }

  .text-and-image-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    padding: 0.4rem;

    .specbutton-text {
      display: none;
    }

    &:active {
      .specbutton-text {
        transform: scale(90%);
      }
    }
    .specbutton-image {
      border-radius: 50%;
      border: 2px solid grey;
      width: 1.3rem;
    }
  }
  @media (min-width: 765px) {
    .text-and-image-button-container {
      padding: 0.7rem;

      .specbutton-text {
        display: flex;
        text-align: center;
        margin-left: initial;
        transition: transform 300ms ease;
      }
      .specbutton-image {
        display: none;
      }
    }
  }

  @media (min-width: 1200px) {
    margin: 1px;
    border-radius: 5px;
    font-size: 0.7rem;
    padding: 2px;
    letter-spacing: 1px;

    .text-and-image-button-container {
      padding: 0.7rem;

      .specbutton-text {
        display: flex;
        margin-left: auto;
        transition: transform 300ms ease;
      }

      .specbutton-image {
        display: flex;
        margin-left: auto;
        width: 1.4rem;
      }
    }
  }
`;

export const StyledClassToolTip = styled.div`
  display: flex;
  position: absolute;
  bottom: 100%;
  left: 0%;
  box-sizing: border-box;
  min-height: 100%;
  border-radius: 0.5rem;
  min-width: 100%;
  width:auto;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  background: #000;
  border: 1px solid #777;
  box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);

  .class-tooltip-title {
    font-size: 1.3rem;
    text-align:center;
    margin-bottom: 5px;
    color:${(props) => props.color}
  }
  .class-tooltip-header {
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    font-size:1.1rem;
    padding:1px;
    border-top:2px solid grey;
    border-bottom:2px solid grey;
  }
  .class-tooltip-category-name {
    display:flex;
    flex-direction:row;
    font-size:.9rem;
    text-align:center;
  }

  .class-tooltip-buff {
    width:100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content: center;
    text-align:center;
    
    
  }
  .class-tooltip-buff-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:100%;
    height:100%;
    margin-top:3px;
    margin-bottom:3px;

    .class-tooltip-image {
      display:flex;
      width: 1.2rem;
    }
    .class-tooltip-buff-name {
      font-weight:400;
      color: ${COLORS.goldHighlight};

    }
  }
  }
  .class-tooltip-utility-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${COLORS.goldHighlight};

    .class-tooltip-image {
      width: 1.5rem;
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
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;

  }

  .raid-is-not-full {
    user-select:none;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: ${COLORS.lightText};
    transition: opacity 0.3s;
    opacity:0%;
  }
  .raid-is-full {
    user-select:none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: ${COLORS.lightText};
    width: 100%;
    margin-top: 1px;
    padding: 2px;
    transition: opacity 0.3s ease;
    opacity:100%;


  }
  .raid-is-full-warning {
    user-select:none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: ${COLORS.lightText};
    width: 100%;
    margin-top: 1px;
    padding: 2px;
    transition: opacity 0.3s ease;
    opacity:100%;
    animation-name: shake;
    animation-duration: 0.5s;
  }
  @keyframes shake {
  0% { transform: translateX(3px);}
  20% { transform: translateX(-3px);}
  40% { transform: translateX(3px);}
  60% { transform: translateX(-3px);}
  80% { transform: translateX(3px);}
  100% { transform: translateX(-3px); }
}
  @media (min-width: 576px) {
    grid-area: Raid;
    padding-bottom:5px;


    .no-players-text {
      margin: auto;
      display: flex;
      color: ${COLORS.lightText};
      font-size: 1.3rem;
    }
  }
`;

export const StyledPlayer = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  font-weight: bold;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;
  color: #fff;
  background: ${(props) => props.background};
  border: 1px solid black;
  cursor: pointer;
  margin: 3px;
  font-size: 0.8rem;
  min-height: 70px;
  font-weight: 800;
  letter-spacing: 1px;

  .player-tooltip-container {
    position: relative;
    width: 100%;
    height: 100%;

    &:active #player-info-icon ~ div {
      display: flex;
    }
    #player-info-icon ~ div {
      display: none;
      &:hover {
        display: flex;
      }
    }
    #player-info-icon {
      position: absolute;
      left: 2px;
      bottom: 0;
      visibility: hidden;
      cursor: pointer;
      &:hover {
        transform: scale(1.2) rotate(180deg);
      }
    }
  }

  .player-name {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.8rem;
    pointer-events: none;
  }

  .player-name input {
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    user-select: none;
    pointer-events: none;
    border-radius: 3px;
    font-weight: bold;
    background-color: transparent;
    width: 95%;
    box-sizing: border-box;
    caret-color: black;
    color: #fff;
    text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
      #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;
  }

  .placeholder {
    position: absolute;
    top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    user-select: none;
    pointer-events: none;
    opacity: 100%;
    transition: top 0.3s ease, top 0.3s ease, top 0.3s ease, font-size 0.3s ease,
      opacity 0.3s ease;
  }

  .player-name input:focus + .placeholder {
    top: -20px;
    font-size: 10px;
    opacity: 0%;
  }
  .player-name input + .placeholder {
    ${(props) =>
      props.hasText &&
      "top: -20px; font-size: 10px; color: white; opacity:0%;"};
  }

  /* box-shadow: $/{(props) =>
  / props.isDragging ? "rgba(255, 255, 255, 0.5) 0px 3px 8px" : "none"}; */

  #class-img {
    display: none;
  }

  #edit-player-icon {
    display: flex;
    margin-left: 2px;
    cursor: pointer;
    font-size: 1.4rem;
    visibility: hidden;
    &:hover {
      transform: scale(1.2);
    }
  }
  #delete-player-icon {
    display: flex;
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    visibility: hidden;
    &:hover {
      transform: scale(1.2);
    }
  }
  &:hover {
    transform: translateY(-0.1em); // change it to something btr

    #edit-player-icon {
      visibility: visible;
    }
    #delete-player-icon {
      visibility: visible;
    }
    #player-info-icon {
      visibility: visible;
    }
  }

  @media (min-width: 576px) {
    .player-name input:focus + .placeholder {
      top: -20px;
      font-size: 10px;
      opacity: 100%;
    }
    .player-name input + .placeholder {
      ${(props) =>
        props.hasText &&
        "top: -20px; font-size: 10px; color: white;opacity:100%;"};
    }
    #class-img {
      display: flex;
      width: 20px;
      height: 20px;
      border-radius: 35%;
      padding: 0.3rem;
    }
  }

  @media (min-width: 1200px) {
    font-size: 0.8rem;
    padding: 0rem;
  }
`;

export const StyledPlayerCheckboxes = styled.div`
  display: flex;
  position: absolute;
  bottom: -100%;
  left: 0%;
  box-sizing: border-box;
  min-height: 100%;
  border-radius: 0.5rem;
  min-width: 100%;
  max-width: 100%;
  padding: 0.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: default;
  overflow: hidden;
  background: #000;
  border: 1px solid #777;
  box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);

  .player-checkbox-header {
    font-size: 1.1rem;
    font-weight: bold;
    padding: 2px;
    margin-bottom: 1rem;
    width: 100%;
    height: 100%;

    .checkbox-header-player-text {
      color: ${(props) => props.color};
    }
  }
  .player-checkbox-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
    padding: 3px;
    width: 90%;
    border: 1px solid transparent;

    &:hover {
      border: 1px solid grey;
      transform: scale(1.1);
    }
  }
  .player-checkbox {
    width: 1.3rem;
    height: 1.3rem;
  }
  .image-and-name-label {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${COLORS.goldHighlight};
  }
  .player-checkbox-image {
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 80%;
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
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 20px;
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
  height: fit-content;
  .category-name-text {
    display: flex;
    padding: 1rem;
    margin-right: auto;
  }
  .category-image {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 80%;
    margin-right: auto;
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
    visibility: hidden;
    box-sizing: border-box;
    transform: translate(10%, -50%);
    background-color: ${COLORS.blackText};
    display: flex;
    flex-direction: column;
    color: #eeeeee;
    border-radius: 5px;
    background: #000;
    border: 1px solid #777;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);
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
    .title {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      border-radius: 5px;
      align-items: center;
      width: 100%;
      height: fit-content;
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
      color: ${COLORS.goldHighlight};
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
          color: #eeeeee;
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
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row;
    width: 250px;
    padding: 0.4rem;

    .tooltip {
      display: initial;
    }

    .category-name-text {
      padding: 0rem;
    }
  }
`;

export const UtilityContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: ${COLORS.fadedBackground};
  padding: 1rem;
  border-radius: 0.5rem;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  overflow: hidden;

  @media (min-width: 1200px) {
    grid-area: Utils;
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
  min-height: 100%;
  height: auto;
  min-width: 100%;
  max-width: 100%;
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
    width: 25px;
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
  box-shadow: 0 2px 6px -1px #000;
  user-select: none;
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
  user-select: none;

  .btn-container {
    display: flex;
    justify-self: flex-end;
  }
  .raid-status-container {
    display: flex;
    margin-left: 2px;
    text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
      #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;

    .raid-count {
      margin-right: 1rem;
      font-size: 1.1rem;
    }
  }

  @media (min-width: 1200px) {
    height: 3rem;

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
  min-height: 425px;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex: 1;
  transition: background-color 0.3s ease;
  border: 1px solid grey;
  align-items: center;

  background-color: ${(props) =>
    props.isDraggingOver
      ? `${COLORS.primary}`
      : `${COLORS.primaryTransparent}`};
`;

export const GroupContainer = styled.div`
  user-select: none;
  box-sizing: border-box;
  margin-top: 2px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1 0 20%;
  min-height: 400px;
  background-color: ${COLORS.primaryTransparent};

  @media (min-width: 1200px) {
    min-height: 423px;
  }
`;
export const GroupTitle = styled.div`
  user-select: none;
  margin-right: 2px;
  margin-bottom: 5px;
  padding: 5px;
  color: ${COLORS.offWhite};
  border: none;
  font-size: 1rem;
  animation-name: reveal;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: forwards; /* Chrome 16+, Safari 4+ */
  -moz-animation-fill-mode: forwards; /* FF 5+ */
  -o-animation-fill-mode: forwards; /* Not implemented yet */
  -ms-animation-fill-mode: forwards; /* IE 10+ */
  animation-fill-mode: forwards;

  @keyframes reveal {
    0% {
      opacity: 0%;
    }

    100% {
      transform: translateY(15%);
    }
  }
`;
export const AddPlayerButton = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0rem, #000 0rem 0rem 0rem;
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
export const RaidGroupContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: baseline;
  text-align: center;
  width: 99%;

  @media (min-width: 1200px) {
    animation-name: revealGroups;
    animation-duration: 1s;
    animation-fill-mode: forwards;
  }

  @keyframes revealGroups {
    0% {
      opacity: 0%;
    }
  }
`;

export const StyledSaveMenu = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  height: auto;
  width: 100vw;
  left: 0;
  top: 0%;
  z-index: 1;

  .save-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;
    background-color: black;
    border: 1px solid grey;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 40%;
    left: 0;
    right: 0;
    text-align: center;
    .one-save {
      display: flex;
      flex-direction: row;
      width: 100%;

      .save-text {
        color: white;
        padding: 5px;
        width: 100%;
      }
    }
  }
`;

export const TinyContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const PlayerNameContainer = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
export const DeletePlayerIcon = styled(RiDeleteBin2Line)`
  color: black;
  font-size: 1.5em;
`;
export const EditIcon = styled(RiEdit2Line)`
  color: black;
  font-size: 1.5em;
`;
export const InfoIcon = styled(FcInfo)`
  color: black;
  font-size: 1.5em;
`;
export const DropUpArrow = styled(MdOutlineArrowDropDownCircle)`
  transform: rotate(180deg);
  color: black;
  font-size: 1.7em;
`;
