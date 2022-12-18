import React from "react";
import {
  RadioContainer,
  SmallContentContainer,
  MainContentContainer,
  StyledCapHeader,
  ButtonContainer,
} from "./components/ContentContainers";
import StyledInputBtn from "./components/StyledInputBtn";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import { CheckCircle, CrossIcon } from "../styles/RaidAssembler.styled";

const RaidBuffsPresent = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  hitTalentClasses,
}) => {
  const next = (e) => {
    e.preventDefault();
    hitTalentClasses.includes(values.classAndSpec) ? nextStep() : nextStep(2);
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <MainContentContainer>
      <StyledCapHeader>
        Will you have a Shadow Priest and/or Balance druid in your party?{" "}
      </StyledCapHeader>
      <RadioContainer>
        <div className="raidbuffs-container">
          <label> Shadow Priest</label>
          <StyledInputBtn
            text={"sp-hit-buff"}
            image={"images/Shadow_Priest.webp"}
            name="spBuff"
            handleChange={handleChange}
            type={"checkbox"}
            checked={values.spBuff ? true : false}
          />
        </div>
        <div className="raidbuffs-container">
          <label> Boomkin </label>
          <StyledInputBtn
            text={"boomy-hit-buff"}
            image={"images/Balance_Druid.webp"}
            name="boomyBuff"
            handleChange={handleChange}
            type={"checkbox"}
            checked={values.boomyBuff ? true : false}
          />
        </div>
      </RadioContainer>
      <ButtonContainer>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton onClick={next}>
          Next <span id="next-arrow">→</span>
        </StyledNextPrevButton>
      </ButtonContainer>
      <SmallContentContainer>
        <span>
          <span className="priest">Shadow Priest</span> Buff
        </span>
        {values.spBuff ? <CheckCircle /> : <CrossIcon />}
      </SmallContentContainer>
      <SmallContentContainer>
        <span>
          <span className="druid">Balance Druid</span> Buff
        </span>
        {values.boomyBuff ? <CheckCircle /> : <CrossIcon />}
      </SmallContentContainer>
    </MainContentContainer>
  );
};

export default RaidBuffsPresent;
