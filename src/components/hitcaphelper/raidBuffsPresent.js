import React from "react";
import { RadioContainer } from "./components/ContentContainers";
import { MainContentContainer } from "./components/ContentContainers";
import StyledInputBtn from "./components/StyledInputBtn";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import { CheckCircle } from "../styles/RaidAssembler.styled";
import { CrossIcon } from "../styles/RaidAssembler.styled";

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
      <h1>Raidbuffs availible?</h1>
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
      <div>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton onClick={next}>
          Next <span id="next-arrow">→</span>
        </StyledNextPrevButton>
      </div>
      <p>
        Shadow Priest Buff {values.spBuff ? <CheckCircle /> : <CrossIcon />}
      </p>
      <p>
        Balance Druid Buff {values.boomyBuff ? <CheckCircle /> : <CrossIcon />}
      </p>
    </MainContentContainer>
  );
};

export default RaidBuffsPresent;
