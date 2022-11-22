import React from "react";
import styled from "styled-components";

const StyledTalent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Talent = ({ image, text }) => {
  return (
    <StyledTalent>
      {image}
      {text}
    </StyledTalent>
  );
};

export default Talent;
