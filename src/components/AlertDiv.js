import React from "react";
import styled from "styled-components";
import { FiAlertOctagon } from "@react-icons/all-files/fi/FiAlertOctagon";

const StyledErrorDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  font-size: 1.1rem;
  background: ${(props) => props.background};
  height: ${(props) => props.height};
  text-align: center;
  width: 75%;
  margin: 10px auto;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
    border-bottom: 1px solid black;
    margin-left: 2px;
  }

  p {
    margin-right: 15px;
    width: 100%;
  }
`;
const AlertIcon = styled(FiAlertOctagon)`
  display: flex;
  color: ${(props) => props.color};
  font-size: 1.6em;
  margin-left: 15px;
`;

function ErrorDiv({ text, background, color, height, postLink }) {
  return (
    <StyledErrorDiv background={background} height={height} color={color}>
      <AlertIcon />
      <p>
        {text} {postLink}
      </p>
    </StyledErrorDiv>
  );
}

export default ErrorDiv;
