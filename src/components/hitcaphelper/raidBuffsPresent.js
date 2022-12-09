import React from "react";
import RadioContainer from "./components/RadioContainer";
import StyledInputBtn from "./components/StyledInputBtn";

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
    <div>
      <h1>Raidbuffs availible?</h1>
      <RadioContainer>
        <StyledInputBtn
          text={"sp-hit-buff"}
          image={"images/Shadow_Priest.webp"}
          name="spBuff"
          handleChange={handleChange}
          type={"checkbox"}
        />
        <StyledInputBtn
          text={"boomy-hit-buff"}
          image={"images/Balance_Druid.webp"}
          name="boomyBuff"
          handleChange={handleChange}
          type={"checkbox"}
        />
      </RadioContainer>
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};

export default RaidBuffsPresent;
