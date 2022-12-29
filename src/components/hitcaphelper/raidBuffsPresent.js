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
    prevStep(1, "raidHitbuff");
  };
  return (
    <MainContentContainer>
      <StyledCapHeader>
        Will you have a Shadow Priest or Balance Druid in your party?
      </StyledCapHeader>
      <RadioContainer>
        <div className="raidbuffs-container">
          <label> Misery / Imp Fearie Fire</label>
          <StyledInputBtn
            text={3}
            image={"images/raidHitBuff.webp"}
            name="raidHitbuff"
            handleChange={handleChange}
            type={"checkbox"}
            checked={values.raidHitbuff ? true : false}
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
          <span className="priest">Misery / Imp. Fearie Fire</span> Buff
        </span>
        {values.raidHitbuff ? <CheckCircle /> : <CrossIcon />}
      </SmallContentContainer>
    </MainContentContainer>
  );
};

export default RaidBuffsPresent;
