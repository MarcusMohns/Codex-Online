import styled from "styled-components";
import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
import { FaRegCheckCircle } from "@react-icons/all-files/fa/FaRegCheckCircle";
import { BsInfoSquareFill } from "@react-icons/all-files/bs/BsInfoSquareFill";
import { GiLoad } from "@react-icons/all-files/gi/GiLoad";
import { RiSettings3Line } from "@react-icons/all-files/ri/RiSettings3Line";
import { VscDebugRestart } from "@react-icons/all-files/vsc/VscDebugRestart";
import { RiDeleteBin2Line } from "@react-icons/all-files/ri/RiDeleteBin2Line";
import { RiEdit2Line } from "@react-icons/all-files/ri/RiEdit2Line";
import { RiSave3Fill } from "@react-icons/all-files/ri/RiSave3Fill";
import { RiDownload2Fill } from "@react-icons/all-files/ri/RiDownload2Fill";
import { RiUpload2Fill } from "@react-icons/all-files/ri/RiUpload2Fill";
import { CgDrop } from "@react-icons/all-files/cg/CgDrop";
import { FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import { GiElectric } from "@react-icons/all-files/gi/GiElectric";
import { FiActivity } from "@react-icons/all-files/fi/FiActivity";
import { RiFilePaper2Line } from "@react-icons/all-files/ri/RiFilePaper2Line";
import { GiBroadsword } from "@react-icons/all-files/gi/GiBroadsword";
import { FiShield } from "@react-icons/all-files/fi/FiShield";
import { TiPlusOutline } from "@react-icons/all-files/ti/TiPlusOutline";
import { CgCopy } from "@react-icons/all-files/cg/CgCopy";
import { FiShuffle } from "@react-icons/all-files/fi/FiShuffle";
import COLORS from "../../../colors";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: flex-start;
  @media (min-width: 1300px) {
    display: grid;
    height: 100%;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.3fr 1.7fr;
    gap: 10px 10px;
    grid-template-areas:
      "Raid Utils"
      "Buffs Buffs";
    padding: 2rem;
  }
`;

export const SpecContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 9%;
  box-sizing: border-box;
  border-top: 2px black;
  .spec-buttons {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    width: 96%;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
    margin: 2rem 0;
    background-color: ${COLORS.halfFadedPrimary};
  }
  @media screen and (min-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0rem 2rem;
    .spec-buttons {
      margin: 1rem 0;
      width: 100%;
    }
  }
`;
export const StyledSpecButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 0.6rem;
  font-weight: bold;
  line-height: 1;
  color: ${(props) => props.color};
  cursor: pointer;
  user-select: none;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem;
  box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 0.3);

  #info-image {
    visibility: hidden;
  }
  &:hover {
    background: ${COLORS.fadedBackground};
    #info-image {
      visibility: visible;
    }
  }
  &:active {
    box-shadow: 0px 1px 5px -1px rgba(0, 0, 0, 1);
  }
  #info-image {
    position: absolute;
    left: 1px;
    top: 1px;
    &:hover {
      transform: scale(1.2);
    }
  }

  .text-and-image-button-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 0.4rem;
    font-size: 0.7rem;
    .specbutton-text {
      display: none;
    }
    .specbutton-image {
      border-radius: 10px;
      border: 1px solid black;
      width: 22px;
      height: 22px;
      animation: fadeIn 1s;
    }
  }
  @media (min-width: 820px) {
    .text-and-image-button-container {
      height: 100%;
      flex-direction: column;
      padding: 0.7rem;
      .specbutton-text {
        display: flex;
        text-align: center;
        margin-left: initial;
        transition: transform 300ms ease;
      }
      .specbutton-image {
        margin-top: 5px;
      }
    }
  }
  @media (min-width: 1300px) {
    padding: 2px 3px;
    font-size: 0.7rem;
    letter-spacing: 1px;
    .text-and-image-button-container {
      flex-direction: row;
      padding: 0.7rem;
      .specbutton-text {
        display: flex;
        margin-left: auto;
        transition: transform 300ms ease;
      }
      .specbutton-image {
        display: flex;
        margin-left: auto;
        margin-top: 0px;
      }
    }
  }
`;

export const StyledClassToolTip = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  height: auto;
  width: 100vw;
  left: 0;
  top: 0%;
  z-index: 3;
  color: ${COLORS.offWhite};

  .tooltip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    position: fixed;
    margin: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    width: 90%;
    border-radius: 10px;
    animation-name: revealMenu;
    animation-duration: 0.3s;

    padding-bottom: 1rem;

    .class-tooltip-content {
      overflow-y: scroll;
      max-height: 500px;
    }

    @media (min-width: 1300px) {
      width: 600px;

      .class-tooltip-content {
        max-height: 650px;
        overflow-y: auto;
      }
    }
    @keyframes revealMenu {
      0% {
        transform: translateY(-15%);
        opacity: 0%;
      }
      100% {
      }
    }
  }

  .class-tooltip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #222;
    width: 100%;
    padding: 1rem 0rem;
    font-weight: bold;
    font-size: 1.1rem;
  }
  .class-tooltip-header-text {
    width: 80px;
    margin-left: 7px;
  }
  .class-tooltip-player-info {
    display: flex;
    align-items: flex-start;
  }
  .class-tooltip-close-window-btn {
    display: flex;
    width: 80px;
    margin-right: 10px;
    justify-content: flex-end;
  }
  .class-tooltip-class-color {
    color: ${(props) => props.color};
    margin-left: 5px;
  }
  .class-tooltip-class-image {
    margin-left: 5px;
    border-radius: 10px;
    width: 22px;
    height: 22px;
  }
  .class-tooltip-close-window-icn {
    cursor: pointer;
  }

  .utility-tooltip-container,
  .buffs-tooltip-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    padding: 0rem 1rem;
  }

  .class-tooltip-subheader {
    display: flex;
    align-self: flex-start;
    align-items: flex-start;
    width: 100%;
    font-size: 1.1rem;
    padding: 1rem 0rem;
    font-weight: 700;
  }

  .class-tooltip-buff-and-category {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-bottom: 0.7rem;
    margin: 5px;
  }

  .class-tooltip-category-name {
    display: flex;
    align-self: center;
    justify-content: center;
    font-size: 0.8rem;
    width: 100%;
  }

  .class-tooltip-buff {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    user-select: none;
    font-size: 0.8rem;
    padding: 0.5rem;
    user-select: text;
    background-color: ${COLORS.fadedGrey};
    color: ${COLORS.offWhite};
    border-radius: 5px;
    margin: 1px;
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
    text-decoration: none;
    img {
      width: 24px;
      height: 24px;
      border-radius: 20%;
      margin-left: 0.5rem;
    }
    &:link,
    &:visited,
    &:hover,
    &:active {
      color: inherit;
    }
  }
`;

export const RaidContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 100%;
  max-width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  .raid-is-not-full,
  .raid-is-full,
  .raid-is-full-warning {
    display: flex;
    user-select: none;
    align-items: center;
    justify-content: center;
    background-color: green;
    color: ${COLORS.lightText};
    width: 100%;
  }
  .raid-is-not-full {
    position: relative;
    transition: opacity 0.3s;
    opacity: 0%;
  }
  .raid-is-full {
    box-sizing: border-box;
    flex-direction: row;
    transition: opacity 0.3s ease;
    opacity: 100%;
  }
  .raid-is-full-warning {
    box-sizing: border-box;
    flex-direction: row;
    transition: opacity 0.3s ease;
    opacity: 100%;
    animation-name: shake;
    animation-duration: 0.5s;
  }
  @keyframes shake {
    0% {
      transform: translateX(3px);
    }
    20% {
      transform: translateX(-3px);
    }
    40% {
      transform: translateX(3px);
    }
    60% {
      transform: translateX(-3px);
    }
    80% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(-3px);
    }
  }
  @media (min-width: 576px) {
    grid-area: Raid;
    padding-bottom: 5px;
    .no-players-text {
      display: flex;
      margin: auto;
      color: ${COLORS.lightText};
      font-size: 1.3rem;
    }
  }
`;

export const StyledPlayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  box-sizing: border-box;
  color: #fff;
  background-color: ${(props) => props.background};
  border: 1px solid black;
  cursor: pointer;
  margin: 2px;
  min-height: 69px;
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
  .role-icon {
    position: absolute;
    right: 2px;
    bottom: 0;
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
  .player-name {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    font-size: 0.8rem;
    pointer-events: none;
  }
  .player-name input {
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 2px;
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
    transform: translateY(-0.1em);
    #edit-player-icon,
    #delete-player-icon,
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
      width: 22px;
      height: 22px;
      border-radius: 35%;
      margin-bottom: 2px;
    }
  }
  @media (min-width: 1300px) {
    font-size: 0.8rem;
    padding: 0rem;
  }
`;

export const StyledPlayerCheckboxes = styled.div`
  color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;

  textarea {
    background-color: rgba(169, 169, 169, 0.2);
    color: rgba(248, 248, 255, 1);
    resize: none;
    outline: none;
    font-family: "Raleway", sans-serif;
    &:focus {
      outline: none;
    }
  }
  .totem-element-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 10px 0px;
  }
  .option-container {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    overflow: hidden scroll;
    align-self: center;
  }
  .player-options-subheader {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    margin: 1rem;
  }
  .player-checkbox-container {
    background-color: ${COLORS.fadedGrey};
    color: ${COLORS.offWhite};
    margin: 5px;
    justify-content: space-between;
    width: fit-content;
    user-select: none;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 5px;
  }
  .player-checkbox-text {
    user-select: none;
  }
  .role-toggler-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    user-select: none;
    font-size: 0.8rem;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: ${COLORS.fadedGrey};
    color: ${COLORS.offWhite};
    font-family: "Raleway", sans-serif;
    box-sizing: border-box;
    .role-select-label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .role-icon {
      width: 18px;
      height: 18px;
    }
  }
  .player-checkbox {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    .player-checkbox-text {
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
    .styled-player-checkmark {
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
    &:hover input ~ .styled-player-checkmark {
      border: 1px solid grey;
      background-color: ${COLORS.fadedBackground};
    }
    &:active input ~ .styled-player-checkmark {
      background-color: ${COLORS.fadedBlack};
    }
    input:checked ~ .styled-player-checkmark {
      background-color: ${COLORS.fadedGrey};
    }
    .styled-player-checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    input:checked ~ .styled-player-checkmark:after {
      display: block;
    }
    .styled-player-checkmark:after {
      content: "";
      width: 9px;
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
  .player-checkbox-image {
    width: 25px;
    height: 25px;
    border-radius: 20%;
    margin-left: 0.5rem;
  }
  .toggle-role {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 42px;
    height: 18px;
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
    width: 14px;
    height: 14px;
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
    left: 26px;
  }
`;

export const BuffContainer = styled.section`
  display: flex;
  flex-direction: column;
  grid-area: Buffs;
  box-sizing: border-box;
  background-color: ${COLORS.fadedBackground};
  align-items: top;
  justify-content: top;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  padding: 1rem;
  margin-top: 20px;
`;

export const BuffsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .type-header {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: ${COLORS.offWhite};
    flex-wrap: 0;
    padding: 1rem;
    padding-left: 0rem;
    font-size: 1.2rem;
  }

  #phys-buffs {
    margin-top: auto;
  }
`;

export const StyledBuffCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1550px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 0px;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 5px;
  img {
    margin-left: 8px;
  }
  svg {
    margin-right: 8px;
  }
  @media (min-width: 1300px) {
    flex-direction: row;
    margin-bottom: 0px;
    border: none;
    img {
      margin-left: 0px;
    }
    svg {
      margin-right: 0px;
    }
  }
`;

export const StyledBuff = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;
  padding: 0.2rem;
  background-color: ${COLORS.highlight};
  border-radius: 5px;
  margin: 0px 4px;
  overflow: hidden;
  font-family: "Raleway", sans-serif;
  letter-spacing: 0.0071428571em;
  text-decoration: none;
  height: 32px;

  @media (min-width: 1300px) {
    margin: 1px;
    max-height: 25px;
  }
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
    color: black;
    animation-fill-mode: forwards;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
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
  width: 175px;
  min-width: 175px;
  height: fit-content;
  padding: 1rem;
  .category-name-text {
    margin-right: auto;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .category-image {
    display: flex;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 80%;
    margin-right: auto;
  }
  .tooltip {
    position: relative;
    padding: 0px;
    left: 100%;
    z-index: 1;
  }
  .tooltip .tooltiptext {
    display: flex;
    flex-direction: column;
    visibility: hidden;
    box-sizing: border-box;
    background-color: black;
    color: #eeeeee;
    border-radius: 5px;
    background: #000;
    border: 1px solid #777;
    box-shadow: 0 0 0.3125rem rgb(0 0 0 / 80%);
    pointer-events: none;
    position: fixed;
    max-width: 65%;
    top: 35%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 1300px) {
      position: absolute;
      min-width: 200px;
      min-height: 100%;
      transform: translate(10%, -50%);
      margin-left: initial;
      margin-right: initial;
      top: initial;
      left: initial;
      right: initial;
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
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border-radius: 5px;
      width: 100%;
      height: fit-content;
    }
    img {
      width: 32px;
      height: 32px;
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
          font-weight: bold;
          letter-spacing: 1px;
          color: white;
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
  @media (min-width: 1300px) {
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
  }
  &:hover {
    .tooltiptext {
      visibility: visible;
    }
  }
  @media (min-width: 650px) {
    width: 250px;
  }
  @media (min-width: 1300px) {
    min-width: 250px;
    padding: 0.4rem;
    .tooltip {
      display: initial;
    }
  }
`;

export const UtilityContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  align-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  flex-wrap: wrap;
  background-color: ${COLORS.fadedBackground};
  min-height: 100%;
  height: auto;
  padding: 1rem;
  @media (min-width: 1300px) {
    grid-area: Utils;
    margin-bottom: 0px;
    padding: 0rem;
  }
`;

export const StyledUtilities = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-wrap: wrap;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  padding-left: 20px;
  @media (min-width: 1300px) {
    max-height: 430px;
  }
`;

export const StyledUtility = styled.a`
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
  font-family: "Raleway", sans-serif;
  box-sizing: border-box;
  letter-spacing: 0.0071428571em;
  min-height: 100%;
  text-decoration: none;
  img {
    width: 24px;
    height: 24px;
    border-radius: 20%;
    margin-left: 0.5rem;
  }
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: inherit;
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
export const ContentTitle = styled.h2`
  display: flex;
  align-items: center;
  color: ${COLORS.offWhite};
  margin-left: 47%;
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
    margin-left: 10px;
  }

  .raid-count,
  .role-count {
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    font-family: sans-serif;
    margin: auto;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-weight: bold;
    font-size: 0.7rem;
  }
  .raid-count {
    align-content: center;
    padding: 0.4rem;
    font-weight: 700;
    margin-right: 5px;
    font-size: 1rem;
  }
  .role-count {
    p {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 3px;
      padding: 4px;
      border-radius: 2px;
      font-weight: bold;
    }
    .role-icon {
      width: 18px;
      height: 18px;
    }
  }

  @media (min-width: 700px) {
    .raid-count,
    .role-count {
      display: flex;
      flex-direction: row;
    }
    .raid-count {
      padding: 0 0.5rem;
      margin-right: auto;
      margin-left: auto;
      justify-self: flex-start;
      font-size: 1.2rem;
      padding: 4px;
    }
    .role-count {
      font-size: 0.9rem;
      padding: 2px;
    }
  }

  @media (min-width: 1300px) {
    height: 3rem;
  }
`;

export const NoPlayersText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  color: ${COLORS.lightText};
  font-size: 1.3rem;
  min-height: 474px;
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
  display: flex;
  justify-content: center;
  flex-direction: column;
  user-select: none;
  box-sizing: border-box;
  flex: 1 0 19%;
  min-height: 450px;
  background-color: #222;
  margin: 2px;
  @media (min-width: 1300px) {
    min-height: 470px;
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
  animation-name: reveal;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: forwards;
  -moz-animation-fill-mode: forwards;
  -o-animation-fill-mode: forwards;
  -ms-animation-fill-mode: forwards;
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
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  background-color: #1f8421;
  border-radius: 5px;
  margin-right: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.4rem;
  margin-bottom: 2px;
  text-align: center;
  user-select: none;
  white-space: nowrap;
  font-weight: 500;
  letter-spacing: 1px;
  transform: translateY(0);
  transition: transform 150ms;
  &:hover {
    transform: translateY(-2px);
  }

  @media (min-width: 600px) {
    font-size: 1rem;
  }
`;

export const UtilityHeaderButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-shadow: #000 0rem 0rem 0.1rem, #000 0rem 0rem 0.1rem,
    #000 0rem 0rem 0.1rem, #000 0rem 0rem 0rem, #000 0rem 0rem 0rem;
  box-sizing: border-box;
  color: ${COLORS.lightText};
  background-color: #222;
  border-radius: 5px;
  padding: 0.5rem;
  text-align: center;
  font-weight: 500;
  letter-spacing: 1px;
  user-select: none;
  -webkit-user-select: none;
  white-space: nowrap;
  font-size: 0.8rem;
  margin-left: auto;
  margin-right: 5px;
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  transform: translateY(0);
  transition: transform 150ms;

  .utility-btn-text {
    margin-left: 5px;
  }

  .hide-text {
    display: none;
  }
  &:hover {
    transform: translateY(-2px);
  }
  @media (min-width: 600px) {
    font-size: 1rem;

    .hide-text {
      display: flex;
      margin-left: 5px;
    }
  }
`;
export const RaidGroupContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: baseline;
  text-align: center;
  width: 99%;
  @media (min-width: 1300px) {
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

export const StyledPlayerOptions = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  height: auto;
  width: 100vw;
  left: 0;
  top: 0%;
  z-index: 3;

  .options-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: black;
    position: fixed;
    margin: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    width: 90%;
    border-radius: 10px;
    animation-name: revealMenu;
    animation-duration: 0.3s;
    overflow-y: scroll;
    max-height: 500px;

    .options-menu-content {
      overflow-y: scroll;
      max-height: 500px;
    }

    @media (min-width: 1300px) {
      width: 600px;
      max-height: 650px;
      overflow-y: auto;

      .options-menu-content {
        overflow-y: auto;
        max-height: 650px;
      }
    }
    @keyframes revealMenu {
      0% {
        transform: translateY(-15%);
        opacity: 0%;
      }
      100% {
      }
    }
  }
  .options-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${COLORS.offWhite};
    background-color: #222;
    width: 100%;
    padding: 1rem 0rem;
    font-weight: bold;
    font-size: 1.3rem;
  }
  .options-header-text {
    width: 80px;
    margin-left: 7px;
  }
  .options-player-info {
    display: flex;
    align-items: center;
  }
  .options-close-window-btn {
    display: flex;
    width: 80px;
    margin-right: 10px;
    justify-content: flex-end;
  }
  .options-class-color {
    color: ${(props) => props.color};
    margin-left: 5px;
  }
  .options-class-image {
    width: 22px;
    height: 22px;
    margin-left: 5px;
  }
  .options-close-window-icn {
    cursor: pointer;
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
    position: fixed;
    margin: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    width: 90%;
    border-radius: 20px;
    animation-name: revealMenu;
    animation-duration: 0.3s;
    @media (min-width: 1300px) {
      width: 600px;
      height: 450px;
    }
    .save-menu-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      color: ${COLORS.offWhite};
      background-color: #222;
      width: 100%;
      padding: 1rem;
      font-weight: bold;
      font-size: 1.3rem;
      .save-menu-close-window-icn {
        cursor: pointer;
      }
    }
    .save-menu-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      flex-grow: 1;
      color: white;
      width: 100%;

      .save-menu-footer-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin: 15px 2px;
        border-radius: 2px;
        cursor: pointer;
        user-select: none;
        font-size: 0.9rem;
        @media (min-width: 1300px) {
          font-size: 1rem;
        }
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
        padding: 6px;
        border-radius: 2px;
        background-color: ${COLORS.primary};
        cursor: pointer;
        user-select: none;
        &:hover {
          background-color: ${COLORS.fadedPrimary};
        }
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

export const StyledRaidCooldowns = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  height: auto;
  width: 100vw;
  left: 0;
  top: 0%;
  z-index: 3;

  .cooldown-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 15%;
    left: 0;
    right: 0;
    text-align: center;
    width: 80%;
    height: auto;
    border-radius: 20px;
    box-sizing: border-box;
    animation-name: revealMenu;
    animation-duration: 0.3s;
    overflow-y: scroll;
    max-height: 500px;

    @media (min-width: 800px) {
      width: 500px;
      max-height: inherit;
      overflow-y: auto;
    }
  }
  .cooldown-main-content {
    box-sizing: border-box;
    padding: 1rem;
    width: 100%;
  }
  .cooldown-panel > div {
    min-height: 0px;
  }
  .cooldown-panel > div > div > a {
    user-select: text;
    background-color: ${COLORS.fadedGrey};
    color: ${COLORS.offWhite};
  }
  .cooldown-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    color: ${COLORS.offWhite};
    background-color: #222;
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
    .cooldown-close-window-icn {
      cursor: pointer;
    }
  }
  .cooldown-subheader {
    display: flex;
    align-self: flex-start;
    justify-self: flex-start;
    align-items: center;
    width: 100%;
    color: ${COLORS.offWhite};
    padding: 1rem;
    font-weight: bold;
    font-size: 1rem;
    margin-top: 0.5rem;
    box-sizing: border-box;
  }
  img {
    user-select: none;
  }
`;

export const StyledPlayerIndex = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  min-height: 100%;
  height: auto;
  width: 100vw;
  left: 0;
  top: 0%;
  z-index: 3;
  .player-index-panel {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
    position: fixed;
    margin-left: auto;
    margin-right: auto;
    top: 25%;
    left: 0;
    right: 0;
    text-align: center;
    width: 80%;
    height: auto;
    border-radius: 20px;
    animation-name: revealMenu;
    animation-duration: 0.3s;

    .player-index-main-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .player-index-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-sizing: border-box;
      color: ${COLORS.offWhite};
      background-color: #222;
      width: 100%;
      padding: 1rem;
      font-weight: bold;
      font-size: 1.3rem;
      .player-index-close-window-icn {
        cursor: pointer;
      }
    }
    .player-index-role-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      padding: 0.2rem;
    }
    .player-index-subheader {
      display: flex;
      align-self: flex-start;
      justify-self: flex-start;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      color: ${COLORS.offWhite};
      padding: 1rem;
      font-weight: bold;
      font-size: 1rem;
      margin-top: 0.5rem;
      box-sizing: border-box;
    }
    .player-index-players {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      min-height: 100%;
      height: auto;
      min-width: 100%;
      max-width: 100%;
    }
    .index-player-name {
      margin: 0px 5px;
    }
    .copy-to-clipboard {
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-align: center;
      padding: 5px;
      border: 1px solid black;
      cursor: pointer;
      user-select: none;
      background-color: ${COLORS.fadedGrey};
      border-radius: 5px;
      margin: 10px;
      justify-self: flex-end;
      &:hover {
        border: 1px solid white;
      }
    }
    .tooltip {
      position: relative;
      align-self: flex-end;
      display: inline-block;
      margin-top: 10px;
    }
    .tooltip .tooltiptext {
      width: 100px;
      background-color: #555;
      color: #fff;
      text-align: center;
      padding: 5px 0;
      border-radius: 6px;
      position: absolute;
      z-index: 1;
      bottom: 125%;
      left: 50%;
      margin-left: -50px;
      opacity: 0;
    }
    .tooltip .tooltiptext::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: #555 transparent transparent transparent;
    }
    @media (min-width: 800px) {
      width: 500px;
    }
  }
`;
export const StyledIndexPlayerName = styled.div`
  color: ${(props) => props.color};
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
  display: flex;
  width: 100%;
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
  display: flex;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: transform 200ms;
  border-radius: 50%;
  margin-right: 10px;
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
export const InfoIcon = styled(BsInfoSquareFill)`
  font-size: 1.6em;
`;
export const SettingsIcon = styled(RiSettings3Line)`
  color: black;
  font-size: 1.6em;
  margin-right: auto;
`;
export const WhiteSettingsIcon = styled(RiSettings3Line)`
  color: white;
  font-size: 1.6em;
`;
export const SaveIcon = styled(RiSave3Fill)`
  font-size: 1.5em;
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
export const ManaIcon = styled(CgDrop)`
  font-size: 1.3em;
  color: teal;
`;
export const CooldownIcon = styled(FaRegClock)`
  font-size: 1.1em;
  margin-right: 3px;
  margin-left: 3px;
`;
export const PowerUpIcon = styled(GiElectric)`
  font-size: 1.1em;
`;
export const CombatResIcon = styled(FiActivity)`
  font-size: 1.1em;
  margin-right: 2px;
`;
export const RaidCooldownIcon = styled(RiFilePaper2Line)`
  font-size: 1.4em;
`;
export const MisdirectionCooldownIcon = styled(FiShuffle)`
  font-size: 1.1em;
  margin-right: 5px;
`;
export const DpsIcon = styled(GiBroadsword)`
  font-size: 1.4em;
  margin-right: 5px;
`;
export const TankIcon = styled(FiShield)`
  font-size: 1.4em;
  margin-right: 5px;
`;
export const HealerIcon = styled(TiPlusOutline)`
  font-size: 1.4em;
  margin-right: 5px;
`;
export const CopyIcon = styled(CgCopy)`
  font-size: 1.4em;
  margin-right: 5px;
  color: white;
`;
