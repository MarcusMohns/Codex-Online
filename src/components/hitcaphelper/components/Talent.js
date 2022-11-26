import React from "react";
import styled from "styled-components";

const StyledTalent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0;
`;

const Talent = ({ image, text, max, handleChange, talentPoints }) => {
  return (
    <StyledTalent>
      {image}
      {text}
      <input
        type="range"
        onChange={handleChange("talentPoints")}
        min="0"
        max={max}
        step="1"
      ></input>
      <span>{talentPoints}</span>
    </StyledTalent>
  );
};

export default Talent;
