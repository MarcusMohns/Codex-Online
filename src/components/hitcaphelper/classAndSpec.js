import React from "react";
const ClassAndSpec = ({ nextStep, handleChange, values, SpecArray }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderRadioButtons = (specs) => {
    return specs.map((spec) => (
      <label htmlFor={spec.text} key={spec.text}>
        <input
          type="radio"
          onChange={handleChange("classAndSpec")}
          id={spec.text}
          name="classAndSpec"
          value={spec.text}
        />
        <img src={spec.image} alt="spec" />
      </label>
    ));
  };

  return (
    <div>
      <h1>classAndSpec</h1>
      {renderRadioButtons(SpecArray)}
      <input onClick={next} type="button" value="Button" />
    </div>
  );
};

export default ClassAndSpec;
