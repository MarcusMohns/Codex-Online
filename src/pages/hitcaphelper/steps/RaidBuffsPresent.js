import React from "react";
import {
  RadioContainer,
  SmallContentContainer,
  MainContentContainer,
  StyledCapHeader,
  ButtonContainer,
} from "../styles/HitCapHelper.styled";
import StyledInputBtn from "../components/StyledInputBtn";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  CheckCircle,
  CrossIcon,
} from "../../raidhelper/styles/RaidHelper.styled";

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
    prevStep(1, "raidHitBuff");
  };
  return (
    <MainContentContainer>
      <StyledCapHeader>
        <p>
          Will you have a Shadow Priest or Balance Druid in your
          <span className="underline">raid</span>?
        </p>
      </StyledCapHeader>
      <RadioContainer>
        <div className="raidbuffs-container">
          <label htmlFor="3"> Misery / Imp Fearie Fire</label>
          <StyledInputBtn
            id="3"
            text={3}
            image={"images/raidHitBuff.webp"}
            srcSet={"images/raidHitBuff.webp 1x"}
            name="raidHitBuff"
            handleChange={handleChange}
            type={"checkbox"}
            checked={values.raidHitBuff ? true : false}
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
        {values.raidHitBuff ? <CheckCircle /> : <CrossIcon />}
      </SmallContentContainer>
    </MainContentContainer>
  );
};

export default RaidBuffsPresent;
