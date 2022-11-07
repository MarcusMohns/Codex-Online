import React from "react";

const TalentPoints = ({ nextStep, prevStep, handleChange, values }) => {
  console.log(values);
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e) => {
    e.preventDefault();
    prevStep();
  };

  switch (values.classAndSpec) {
    case "Shadow Priest":
      return <div>Shadow Priest</div>;
    case "Holy Priest":
      return <div>Shadow Priest</div>;
    default:
      return (
        <div>
          <h1>TalentPoints</h1>
          <input onClick={previous} type="button" value="previous" />
          <input onClick={next} type="button" value="next" />
        </div>
      );
  }
};

export default TalentPoints;
