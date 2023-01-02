import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import {
  MainContentContainer,
  StyledCapHeader,
  RadioContainer,
  SmallContentContainer,
  ButtonContainer,
} from "./components/ContentContainers";

const PveOrPvp = ({ nextStep, prevStep, handleChange, values }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep(1);
  };

  const previous = (e) => {
    e.preventDefault();
    prevStep(1, "pveOrPvp");
  };

  return (
    <MainContentContainer>
      <StyledCapHeader>Are you intending to PvE or PvP?</StyledCapHeader>
      <RadioContainer>
        <div className="pvp-or-pve-container">
          <label htmlFor="pvp">PvP</label>
          <StyledInputBtn
            text={"pvp"}
            image={"images/pvp.webp"}
            name="pveOrPvp"
            handleChange={handleChange}
            type={"radio"}
            checked={values.pveOrPvp === "pvp" ? true : false}
          />
        </div>
        <div className="pvp-or-pve-container">
          <label htmlFor="pve">PvE</label>
          <StyledInputBtn
            text={"pve"}
            image={"images/pve.webp"}
            name="pveOrPvp"
            handleChange={handleChange}
            type={"radio"}
            checked={values.pveOrPvp === "pve" ? true : false}
          />
        </div>
      </RadioContainer>
      <ButtonContainer>
        <StyledNextPrevButton onClick={previous}>
          Previous<span id="previous-arrow">←</span>
        </StyledNextPrevButton>
        <StyledNextPrevButton
          onClick={next}
          disabled={values.pveOrPvp ? "" : "disabled"}
          pointerEvents={values.pveOrPvp ? "auto" : "none"}
          opacity={values.pveOrPvp ? "100%" : "50%"}
        >
          Next <span id="next-arrow">→</span>
        </StyledNextPrevButton>
      </ButtonContainer>

      {values.pveOrPvp ? (
        <SmallContentContainer>
          Selected: {values.pveOrPvp === "pve" ? "PvE" : "PvP"}
        </SmallContentContainer>
      ) : (
        <SmallContentContainer>Selected: None</SmallContentContainer>
      )}
    </MainContentContainer>
  );
};

export default PveOrPvp;
