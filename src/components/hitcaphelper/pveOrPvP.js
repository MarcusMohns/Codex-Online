import React from "react";
import StyledRadioBtn from "./components/StyledRadioBtn";

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
      <StyledRadioBtn
        text={"pvp"}
        image={"images/Greater_Blessing_Of_Wisdom.png"}
        name="pveOrpvp"
        handleChange={handleChange}
      />
      pvp
      <StyledRadioBtn
        text={"pve"}
        image={"images/Greater_Blessing_Of_Might.png"}
        name="pveOrpvp"
        handleChange={handleChange}
      />
      pve
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};

export default PveOrPvp;
