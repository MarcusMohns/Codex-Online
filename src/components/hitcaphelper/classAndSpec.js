import React from "react";
import StyledInputBtn from "./components/StyledInputBtn";
import StyledNextPrevButton from "./components/StyledNextPrevButton";
import {
  MainContentContainer,
  StyledCapHeader,
  SmallContentContainer,
} from "./components/ContentContainers";

const ClassAndSpec = ({ nextStep, handleChange, values, SpecArray }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderRadioButtons = (specs) => {
    return specs.map((spec) => (
      <StyledInputBtn
        text={spec.text}
        image={spec.image}
        name="classAndSpec"
        handleChange={handleChange}
        key={spec.text}
        type={"radio"}
        checked={values.classAndSpec === spec.text ? true : false}
      />
    ));
  };

  return (
    <MainContentContainer>
      <StyledCapHeader>Select your class</StyledCapHeader>
      <div className="radio-input-container">
        {renderRadioButtons(SpecArray)}
      </div>
      {values.classAndSpec ? (
        <SmallContentContainer>
          Selected: {values.classAndSpec}
        </SmallContentContainer>
      ) : (
        <SmallContentContainer>Selected: None</SmallContentContainer>
      )}

      <StyledNextPrevButton onClick={next}>
        Next <span id="next-arrow">→</span>
      </StyledNextPrevButton>
    </MainContentContainer>
  );
};

export default ClassAndSpec;
