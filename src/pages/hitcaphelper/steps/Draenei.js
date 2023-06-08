import React from "react";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  ButtonContainer,
  MainContentContainer,
  RadioContainer,
  SmallContentContainer,
  StyledCapHeader,
} from "../styles/HitCapHelper.styled";
import StyledInputBtn from "../components/StyledInputBtn";
import {
  CheckCircle,
  CrossIcon,
} from "../../raidhelper/styles/RaidHelper.styled";

const Draenei = ({
  nextStep,
  prevStep,
  handleChange,
  values,
  hitTalentClasses,
  casters,
}) => {
  const next = (e) => {
    e.preventDefault();

    if (casters.includes(values.classAndSpec)) {
      nextStep(1);
    } else {
      hitTalentClasses.includes(values.classAndSpec)
        ? nextStep(2)
        : nextStep(3);
    }
  };

  const previous = (e) => {
    e.preventDefault();
    prevStep(1, "draenei");
  };

  return (
    <MainContentContainer>
      <StyledCapHeader>Will you have a Draenei in your party?</StyledCapHeader>
      <RadioContainer>
        <div className="draenei-container">
          <label htmlFor="draenei"> Heroic Presence </label>
          <StyledInputBtn
            id="draenei"
            text={1}
            image={"images/heroic_presence.webp"}
            srcSet={"images/heroic_presence.webp 1x"}
            name="draenei"
            handleChange={handleChange}
            type={"checkbox"}
            checked={values.draenei ? true : false}
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
          <span className="priest">Draenei</span> Buff
        </span>
        {values.draenei ? <CheckCircle /> : <CrossIcon />}
      </SmallContentContainer>
    </MainContentContainer>
  );
};

export default Draenei;
