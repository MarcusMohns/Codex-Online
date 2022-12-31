// import React from "react";
import styled from "styled-components";

const StyledNextPrevButton = styled.button`
  background: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  display: inline-flex;
  height: 40px;
  width: 150px;
  border: 2px solid #bfc0c0;
  margin: 20px 20px 20px 20px;
  color: #bfc0c0;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.8em;
  letter-spacing: 1.5px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.1s;
  pointer-events: ${(props) => props.pointerEvents};
  opacity: ${(props) => props.opacity};

  #next-arrow {
    font-size: 1.1rem;
    position: absolute;
    opacity: 0;
    transform: translateX(60px);
    -webkit-transition: all 0.25s cubic-bezier(0.14, 0.59, 1, 1.01);
    transition: all 0.15s cubic-bezier(0.14, 0.59, 1, 1.01);
    padding-bottom: 1px;
  }
  #previous-arrow {
    font-size: 1.1rem;
    position: absolute;
    opacity: 0;
    transform: translateX(-60px);
    -webkit-transition: all 0.25s cubic-bezier(0.14, 0.59, 1, 1.01);
    transition: all 0.15s cubic-bezier(0.14, 0.59, 1, 1.01);
    padding-bottom: 1px;
  }

  &:hover {
    #next-arrow {
      opacity: 1;
      transform: translateX(50px);
    }
    #previous-arrow {
      opacity: 1;
      transform: translateX(-50px);
    }
  }
`;

export default StyledNextPrevButton;
