import React from "react";
import styled from "styled-components";

const StyledTalent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Talent = ({ image, text, max }) => {
  return (
    <StyledTalent>
      {image}

      <label for={text}>{text}:</label>
      <input type="number" id={text} name={text} min="1" max={max}></input>
    </StyledTalent>
  );
};

export default Talent;
