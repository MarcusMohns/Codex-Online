// import React from "react";
import COLORS from "../../../components";
import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  margin-top: 2rem;
  padding: 1rem;
  label {
    cursor: pointer;
  }

  .pvp-or-pve-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
  }

  .raidbuffs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
  height: auto;
  padding: 3rem;

  .radio-input-container {
    margin-top: 2rem;
  }
`;

export const SmallContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  padding: 0 1rem;
  color: #bfc0c0;

  .druid {
    color: ${COLORS.druid};
  }
  .priest {
    color: ${COLORS.priest};
  }
  svg {
    margin-left: 5px;
  }
`;

export const StyledCapHeader = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
  flex-direction: row;
  align-content: center;
  letter-spacing: 1px;
  font-size: 1.3rem;
  text-align: center;
  font-family: sans-serif;

  .druid {
    color: ${COLORS.druid};
  }
  .priest {
    color: ${COLORS.priest};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;
