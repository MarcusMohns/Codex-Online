import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import { RadioContainer } from "./components/ContentContainers";
import { MainContentContainer } from "./components/ContentContainers";

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
    <MainContentContainer>
      <RadioContainer>
        <StyledInputBtn
          text={"pvp"}
          image={"images/pvp.webp"}
          name="pveOrPvp"
          handleChange={handleChange}
          type={"radio"}
          checked={values.pveOrPvp === "pvp" ? true : false}
        />

        <StyledInputBtn
          text={"pve"}
          image={"images/pve.webp"}
          name="pveOrPvp"
          handleChange={handleChange}
          type={"radio"}
          checked={values.pveOrPvp === "pve" ? true : false}
        />
      </RadioContainer>
      <div>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton onClick={next}>
          Next <span id="next-arrow">→</span>
        </StyledNextPrevButton>
      </div>

      {values.pveOrPvp ? (
        <div>{values.pveOrPvp}</div>
      ) : (
        <div>None selected</div>
      )}
    </MainContentContainer>
  );
};

export default PveOrPvp;
