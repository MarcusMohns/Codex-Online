import React from "react";

const RaidBuffsPresent = ({ nextStep, prevStep, handleChange, values }) => {
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
      <h1>Raidbuffs availible?</h1>
      <label htmlFor={"sp-hit-buff"} key={"sp-hit-buff"}>
        <input
          type="radio"
          onChange={handleChange("raidBuffsPresent")}
          id={"sp-hit-buff"}
          name="raidBuffsPresent"
          value={"sp-hit-buff"}
        />
        Shadow Priest?
        {/* <img src={spec.image} alt="spec" /> */}
      </label>
      <label htmlFor={"boomy-hit-buff"} key={"boomy-hit-buff"}>
        <input
          type="radio"
          onChange={handleChange("raidBuffsPresent")}
          id={"boomy-hit-buff"}
          name="raidBuffsPresent"
          value={"boomy-hit-buff"}
        />
        {/* <img src={spec.image} alt="spec" /> */}
        Boomkin?
      </label>
      <input onClick={previous} type="button" value="previous" />
      <input onClick={next} type="button" value="next" />
    </div>
  );
};

export default RaidBuffsPresent;
