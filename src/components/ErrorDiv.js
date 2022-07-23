import React from "react";
import styled from "styled-components";

const StyledErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3a3a3a;
  font-size: 1.1rem;
  background: ${(props) => props.background};
  margin: 30px 10%;
  height: 80px;
`;

function ErrorDiv({ text, background }) {
  return <StyledErrorDiv background={background}>{text}</StyledErrorDiv>;
}

export default ErrorDiv;
