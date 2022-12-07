import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";

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
      <h1>Pvp or Pve?</h1>
      <StyledInputBtn
        text={"pvp"}
        image={"images/Greater_Blessing_Of_Wisdom.png"}
        name="pveOrPvp"
        handleChange={handleChange}
        type={"radio"}
      />
      pvp
      <StyledInputBtn
        text={"pve"}
        image={"images/Greater_Blessing_Of_Might.png"}
        name="pveOrPvp"
        handleChange={handleChange}
        type={"radio"}
      />
      pve
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};

export default PveOrPvp;
