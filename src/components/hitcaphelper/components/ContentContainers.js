// import React from "react";
import COLORS from "../../../components";
import styled from "styled-components";

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;

  .pvp-or-pve-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .raidbuffs-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0rem 2rem;
    padding-top: 3rem;
  }
`;

export const MainContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-content: center;
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
