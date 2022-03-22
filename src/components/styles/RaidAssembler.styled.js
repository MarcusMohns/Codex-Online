import styled from "styled-components";
import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { FcInfo } from "@react-icons/all-files/fc/FcInfo";
import { GiLoad } from "@react-icons/all-files/gi/GiLoad";
import { RiSettings3Line } from "@react-icons/all-files/ri/RiSettings3Line";
import { VscDebugRestart } from "@react-icons/all-files/vsc/VscDebugRestart";
import { RiDeleteBin2Line } from "@react-icons/all-files/ri/RiDeleteBin2Line";
import { RiEdit2Line } from "@react-icons/all-files/ri/RiEdit2Line";
import { RiSave3Fill } from "@react-icons/all-files/ri/RiSave3Fill";
import { RiDownload2Fill } from "@react-icons/all-files/ri/RiDownload2Fill";
import { RiUpload2Fill } from "@react-icons/all-files/ri/RiUpload2Fill";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${COLORS.fadedBackground};

  @media (min-width: 1200px) {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 1.5fr;
    gap: 10px 10px;
    grid-template-areas:
      "Raid Utils"
      "Buffs Buffs";
    padding: 2rem;
    padding-bottom: 10rem;
    box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
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
  border-top: 2px black;
  background-color: ${COLORS.fadedBackground};

  @media screen and (min-width: 1200px) {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    max-height: 100%;
    margin-top: 5%;
    padding: 1rem 2rem;
  }
  .spec-buttons {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 1px;
    border-radius: 5px;
    width: 100%;
  }
`;
export const StyledSpecButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.6rem;
  font-weight: bold;
  position: relative;
  color: ${(props) => props.color};
  background: ${COLORS.fadedGrey};
  border: 2px inset black;
  cursor: pointer;
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;

  #info-image {
    visibility: hidden;
  }
  &:hover {
    background: ${COLORS.fadedHighlight};
    #info-image {
      visibility: visible;
    }
  }

  .class-tooltip-container {
    #info-image {
      position: absolute;
      left: 1px;
      top: 1px;
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

    .specbutton-image {
      border-radius: 50%;
      border: 2px solid black;
      width: 1.3rem;
      height: 1.3rem;
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
    padding: 0px 2px;
    margin: 1px;
    border-radius: 5px;
    font-size: 0.7rem;
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
        height: 1.4rem;
      }
    }
  }
`;

export const StyledClassToolTip = styled.div`
  .tooltip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
    min-height: 200px;
    height: auto;
    min-width: 200px;
    width: fit-content;
    padding: 1rem;
    color: #eeeeee;
    border-radius: 5px;
    background: #000;
    border: 1px solid #777;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);
    z-index: 3;
  }

  .tooltip-buff-and-utility-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .utility-tooltip-container {
    padding: 1rem;
  }
  .buffs-tooltip-container {
    padding: 1rem;
  }

  .class-tooltip-title {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 5px;
    padding: 1rem;
    color: ${(props) => props.color};
  }
  .class-tooltip-header {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.1rem;
    padding-bottom: 3px;
    margin-bottom: 5px;
    border-bottom: 1px solid grey;
  }
  .class-tooltip-category-name {
    display: flex;
    flex-direction: row;
    font-size: 0.8rem;
    padding: 0.1rem;
    margin-top: 2px;
  }

  .class-tooltip-buff {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .class-tooltip-spell-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;

    .class-tooltip-image {
      display: flex;
      width: 1.2rem;
      height: 1.2rem;
    }
    .class-tooltip-buff-name {
      font-weight: 400;
      color: ${COLORS.goldHighlight};
    }
  }
`;

export const RaidContainer = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-width: 100%;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  }

  .raid-is-not-full {
    position:relative;
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
  color: #fff;
  background: ${(props) => props.background};
  border: 2px solid black;
  cursor: pointer;
  margin: 2px;
  min-height: 70px;
  text-align: center;
  text-shadow: rgb(0, 0, 0) 1px 0px 0px, rgb(0, 0, 0) 0.540302px 0.841471px 0px,
    rgb(0, 0, 0) -0.416147px 0.909297px 0px,
    rgb(0, 0, 0) -0.989992px 0.14112px 0px,
    rgb(0, 0, 0) -0.653644px -0.756802px 0px,
    rgb(0, 0, 0) 0.283662px -0.958924px 0px,
    rgb(0, 0, 0) 0.96017px -0.279415px 0px;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 1px;

  .role-img {
    position: absolute;
    right: 2px;
    bottom: 0;
  }
  .player-tooltip-container {
    position: relative;
    width: 100%;
    height: 100%;

    &:hover #player-info-icon ~ div {
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
      bottom: 1px;
      visibility: hidden;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
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
    border: none;
    user-select: none;
    pointer-events: none;
    border-radius: 3px;
    background-color: transparent;
    width: 95%;
    caret-color: black;
    color: #fff;
    text-align: center;
    text-shadow: rgb(0, 0, 0) 1px 0px 0px,
      rgb(0, 0, 0) 0.540302px 0.841471px 0px,
      rgb(0, 0, 0) -0.416147px 0.909297px 0px,
      rgb(0, 0, 0) -0.989992px 0.14112px 0px,
      rgb(0, 0, 0) -0.653644px -0.756802px 0px,
      rgb(0, 0, 0) 0.283662px -0.958924px 0px,
      rgb(0, 0, 0) 0.96017px -0.279415px 0px;
    margin-bottom: 5px;
    letter-spacing: 1px;
    font-weight: 800;
    font-family: "Raleway", sans-serif;
    font-size: 0.8rem;
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
  }
  .player-name input + .placeholder {
    ${(props) => props.hasText && "top: -20px; font-size: 10px; color: white;"};
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
      margin-bottom: 2px;
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

  .role-toggler-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .role-select-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .role-icon {
      width: 20px;
      height: 20px;
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

  .toggle-role {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 62px;
    height: 32px;
    display: inline-block;
    position: relative;
    border-radius: 50px;
    overflow: hidden;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: ${COLORS.deathKnight};
    transition: background-color ease 0.3s;
  }

  .toggle-role:before {
    content: "";
    display: block;
    position: absolute;
    z-index: 2;
    width: 28px;
    height: 28px;
    background: #fff;
    left: 2px;
    top: 2px;
    border-radius: 50%;
    color: #fff;
    white-space: nowrap;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
  }

  .toggle-role:checked {
    background-color: ${COLORS.primary};
  }

  .toggle-role:checked:before {
    left: 32px;
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
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.2rem;
  background-color: ${COLORS.highlight};
  border-radius: 5px;
  margin: 1px;
  img {
    width: 25px;
    height: 25px;
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
  #raid-saves-btn {
    margin-left: 5px;
  }
  .raid-count {
    margin-right: auto;
    justify-self: flex-start;
    font-size: 1.4rem;
    font-weight: bold;
  }

  .role-count {
    align-self: center;
    margin-right: auto;
  }

  @media (min-width: 1200px) {
    height: 3rem;
  }
  @media (min-width: 600px) {
    .btn-container {
      margin-left: 9rem;
    }
    .role-count {
      display: flex;
      padding: 2px;
      .role-count-img {
        height: 18px;
        width: 18px;
        margin-right: 5px;
        margin-left: 2px;
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
  min-height: 432px;
`;

export const PlayersContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  flex: 1;
  transition: background-color 0.3s ease;
  align-items: center;
  background-color: ${(props) =>
    props.isDraggingOver ? `${COLORS.primary}` : `transparent`};
  padding: 0 4px;
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
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  background-color: transparent;

  @media (min-width: 1200px) {
    min-height: 430px;
    padding: 0 1px;
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
export const RaidHeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0rem, #000 0rem 0rem 0rem;
  align-items: center;
  justify-content: center;
  color: ${COLORS.lightText};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 10px;
  margin-right: 1rem;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;

  &:hover {
    background-color: ${COLORS.fadedHighlight};
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
  z-index: 3;

  .saved-tooltip {
    width: 100%;
    opacity: 0%;
    color: ${COLORS.offWhite};
    user-select: none;
    margin-top: 10px;
  }

  .save-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    border: 1px solid grey;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 40%;
    left: 0;
    right: 0;
    text-align: center;

    @media (min-width: 1200px) {
      width: max-content;
      height: 400px;
    }

    .save-menu-header {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 3rem;
      color: white;
      background-color: ${COLORS.primary};
    }

    .save-menu-footer {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      color: white;
      width: 100%;
      .save-menu-footer-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        padding: 5px;
        border-radius: 2px;
        cursor: pointer;
        user-select: none;
      }
      #save-to-disk-button {
        background-color: ${COLORS.primary};
        &:hover {
          background-color: ${COLORS.fadedPrimary};
        }
      }
      #load-from-disk-button {
        background-color: ${COLORS.primary};
        &:hover {
          background-color: ${COLORS.fadedPrimary};
        }
      }

      #delete-all-saves-button {
        background-color: ${COLORS.deathKnight};
        &:hover {
          background-color: ${COLORS.fadedRed};
        }

        #delete-icon {
          color: white;
        }
      }
    }
    .one-save {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      width: 90%;
      background-color: black;
      margin-top: 1rem;
      border: 1px solid grey;
      padding: 5px;

      .save-slot-number {
        color: grey;
        margin-right: 5px;
        width: 3.5rem;
      }
      .save-buttons {
        border: none;
        color: white;
        padding: 5px;
        background-color: ${COLORS.primary};
        cursor: pointer;
        user-select: none;
        &:hover {
          background-color: ${COLORS.fadedPrimary};
        }
      }
      #save-button {
      }
      #load-button {
        margin-left: 7px;
      }
      #edit-save-button {
        color: grey;
        width: 3rem;
        margin-right: 2px;
        margin-left: 2px;
      }
      #delete-button {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background-color: ${COLORS.deathKnight};
        margin-left: 10px;
        #delete-icon {
          color: white;
          height: 1rem;
        }
        &:hover {
          background-color: ${COLORS.fadedRed};
        }
      }
      .save-text {
        background-color: black;
        color: grey;
        border: none;
        text-align: center;
        padding: 5px;
        width: 100%;
      }
    }
  }
`;
export const Header = styled.h1`
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 10%;
`;
export const SubHeader = styled.h2`
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  width: 80%;
  height: 100%;
  padding-top: 20px;
  text-align: center;
  margin: auto;
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
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
`;
export const CheckCircle = styled(FaRegCheckCircle)`
  color: green;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 1.5rem;
`;

export const ResetIcon = styled(VscDebugRestart)`
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
  font-size: 1.7em;
`;
export const SettingsIcon = styled(RiSettings3Line)`
  color: black;
  font-size: 1.6em;
`;
export const SaveIcon = styled(RiSave3Fill)`
  font-size: 1.7em;
  margin-right: 0.2rem;
`;
export const LoadIcon = styled(GiLoad)`
  font-size: 1.7em;
`;
export const DownloadIcon = styled(RiDownload2Fill)`
  font-size: 1.3em;
`;
export const UploadIcon = styled(RiUpload2Fill)`
  font-size: 1.3em;
`;
