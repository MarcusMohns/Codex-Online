import React from "react";
const ClassAndSpec = ({ nextStep, handleChange, values, SpecArray }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderRadioButtons = (specs) => {
    return specs.map((spec) => (
      <label
        htmlFor={spec.text}
        key={spec.text}
        className="input-radio-and-image"
      >
        <img src={spec.image} alt="spec" />
        <input
          type="radio"
          onChange={handleChange("classAndSpec")}
          id={spec.text}
          name="classAndSpec"
          value={spec.text}
        />
      </label>
    ));
  };

  return (
    <>
      <div className="radio-input-container">
        {renderRadioButtons(SpecArray)}
      </div>
      <input onClick={next} type="button" value="Next" />
    </>
  );
};

export default ClassAndSpec;
