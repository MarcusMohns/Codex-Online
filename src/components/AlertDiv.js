import React from "react";
import styled from "styled-components";

const StyledErrorDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  font-size: 1.1rem;
  background: ${(props) => props.background};
  margin: 30px 10%;
  height: ${(props) => props.height};

  a {
    text-decoration: none;
    color: ${(props) => props.color};
    border-bottom: 1px solid black;
    margin-left: 5px;
  }
`;

function ErrorDiv({ text, background, color, height, postLink }) {
  return (
    <StyledErrorDiv background={background} height={height} color={color}>
      {text}
      {postLink}
    </StyledErrorDiv>
  );
}

export default ErrorDiv;
