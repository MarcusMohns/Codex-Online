import React from "react";
import StyledInputBtn from "../components/StyledInputBtn";
import StyledNextPrevButton from "../components/StyledNextPrevButton";
import {
  MainContentContainer,
  StyledCapHeader,
  SmallContentContainer,
} from "../styles/HitCapHelper.styled";

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
        srcSet={spec.srcSet}
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
      <StyledCapHeader>Select a class</StyledCapHeader>
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

      <StyledNextPrevButton
        onClick={next}
        disabled={values.classAndSpec ? "" : "disabled"}
        pointerEvents={values.classAndSpec ? "auto" : "none"}
        opacity={values.classAndSpec ? "100%" : "50%"}
      >
        Next <span id="next-arrow">→</span>
      </StyledNextPrevButton>
    </MainContentContainer>
  );
};

export default ClassAndSpec;
