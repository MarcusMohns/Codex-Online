import React from "react";
import styled from "styled-components";

const StyledClass = styled.label`
  input[type="radio"] {
    display: none;

    &:checked {
      ~ img {
        border: 2px solid grey;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  img {
    opacity: 60%;
    border: 2px solid transparent;
    border-radius: 15px;
    &:hover {
      opacity: 1;
    }
  }
`;

const ClassAndSpec = ({ nextStep, handleChange, values, SpecArray }) => {
  const next = (e) => {
    e.preventDefault();
    nextStep();
  };

  const renderRadioButtons = (specs) => {
    return specs.map((spec) => (
      <StyledClass
        htmlFor={spec.text}
        key={spec.text}
        className="input-radio-and-image"
      >
        <input
          type="radio"
          onChange={handleChange("classAndSpec")}
          id={spec.text}
          name="classAndSpec"
          value={spec.text}
        />
        <img src={spec.image} alt="spec" className="imageJesus" />
      </StyledClass>
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
