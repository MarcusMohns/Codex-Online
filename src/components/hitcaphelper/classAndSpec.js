import React from "react";
import StyledRadioBtn from "./components/StyledRadioBtn";

const ClassAndSpec = ({ nextStep, handleChange, values, SpecArray }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderRadioButtons = (specs) => {
    return specs.map((spec) => (
      <StyledRadioBtn spec={spec} handleChange={handleChange} key={spec.text} />
    ));
  };

  return (
    <>
      <div className="radio-input-container">
        {renderRadioButtons(SpecArray)}
      </div>
      {values.classAndSpec ? (
        <div>{values.classAndSpec}</div>
      ) : (
        <div>None selected</div>
      )}
      <input onClick={next} type="button" value="Next" />
    </>
  );
};

export default ClassAndSpec;
