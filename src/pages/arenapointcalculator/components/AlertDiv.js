import React from "react";
import styled from "styled-components";
import { FiAlertOctagon } from "@react-icons/all-files/fi/FiAlertOctagon";

const StyledErrorDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  font-size: 1rem;
  background: ${(props) => props.background};
  height: ${(props) => `${props.height + 10}px`};
  text-align: center;
  width: 80%;
  padding: 10px;
  margin: 10px auto;

  a {
    text-decoration: none;
    color: ${(props) => props.color};
    border-bottom: 1px solid black;
    margin-left: 2px;
  }

  p {
    width: 100%;
    margin-right: 8px;
  }

  @media screen and (min-width: 992px) {
    height: ${(props) => `${props.height}px`};
    width: 50%;
  }
`;
const AlertIcon = styled(FiAlertOctagon)`
  display: flex;
  color: ${(props) => props.color};
  font-size: 1.6em;
  margin: 0 8px;
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
