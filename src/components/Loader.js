import styled from "styled-components";
import COLORS from "../components";

export const Loader = styled.div`
  margin: auto;
  margin-top: 25vw;
  border: 16px solid ${COLORS.fadedGrey};
  border-top: 16px solid ${COLORS.primary};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (min-width: 900px) {
  }
`;
