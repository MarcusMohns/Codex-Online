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
      <img src={image} alt="talent" />
      {text}
      <input
        type="range"
        name="talent"
        onChange={handleChange("talentPoints")}
        min="0"
        max={max}
        step="1"
        defaultValue={talentPoints ? talentPoints : 0}
      ></input>
      <span>{talentPoints ? talentPoints : 0}</span>
    </StyledTalent>
  );
};

export default Talent;
