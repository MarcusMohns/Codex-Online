import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledTalent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  -moz-appearance: textfield;
  appearance: textfield;
  margin: 0;
`;

const Talent = ({ image, text, max }) => {
  const [numState, setNumState] = useState(0);

  const clickHandler = (num) => {
    if (num === 1 && numState < max) {
      // increments unless it's at max
      setNumState(numState + 1);
    } else if (num === -1 && numState > 0) {
      // decrements unless numState is 0
      setNumState(numState - 1);
    }
    return;
  };

  return (
    <StyledTalent>
      {image}
      {text}
      <div>
        <button onClick={() => clickHandler(-1)}>-</button>
        <span>{numState}</span>
        <button onClick={() => clickHandler(1)}>+</button>
      </div>
    </StyledTalent>
  );
};

export default Talent;
