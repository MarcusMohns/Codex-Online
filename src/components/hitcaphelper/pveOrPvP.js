import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";
import RadioContainer from "./components/RadioContainer";
import StyledNextPrevButton from "./components/StyledNextPrevButton";

const PveOrPvp = ({ nextStep, prevStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <RadioContainer>
        <StyledInputBtn
          text={"pvp"}
          image={"images/pvp.webp"}
          name="pveOrPvp"
          handleChange={handleChange}
          type={"radio"}
        />

        <StyledInputBtn
          text={"pve"}
          image={"images/pve.webp"}
          name="pveOrPvp"
          handleChange={handleChange}
          type={"radio"}
        />
      </RadioContainer>

      <StyledNextPrevButton onClick={previous}>
        Previous<span id="previous-arrow">←</span>
      </StyledNextPrevButton>
      <StyledNextPrevButton onClick={next}>
        Next <span id="next-arrow">→</span>
      </StyledNextPrevButton>
    </div>
  );
};

export default PveOrPvp;
