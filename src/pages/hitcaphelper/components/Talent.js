import React from "react";
import styled from "styled-components";

const StyledTalent = styled.div`
  min-height: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-top: 2rem;
  padding: 1rem;
  animation: 0.3s linear 0s fade-in;

  @keyframes fade-in {
    0% {
      filter: blur(2px);
      opacity: 0;
    }
    100% {
      filter: blur(0);
      opacity: 1;
    }
  }

  .slider {
    cursor: pointer;
  }
  .talent-img {
    width: 56px;
    height: 56px;
  }

  .points-status {
    font-family: Sans-serif;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1.1rem;
    letter-spacing: 1.5px;
  }

  img {
    padding-bottom: 0.6rem;
  }
`;

const Talent = ({
  image,
  srcSet,
  text,
  max,
  handleChange,
  talentPoints,
  multiplier,
}) => {
  return (
    <StyledTalent>
      <img src={image} alt="talent" srcSet={srcSet} className="talent-img" />
      {text}
      <input
        type="range"
        name="talent"
        className="slider"
        onChange={handleChange("talentPoints", multiplier)}
        min="0"
        max={max}
        step="1"
        defaultValue={talentPoints ? talentPoints : 0}
      ></input>
      <span></span>
      <span className="points-status">
        {talentPoints ? `${talentPoints / multiplier} / ${max}` : `0 / ${max}`}
      </span>
    </StyledTalent>
  );
};

export default Talent;
