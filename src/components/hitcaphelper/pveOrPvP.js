import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";
import RadioContainer from "./components/RadioContainer";

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

      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </RadioContainer>
  );
};

export default PveOrPvp;
