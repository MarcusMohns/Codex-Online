import styled from "styled-components";
import COLORS from "../colors";

export const Loader = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 40%;
  left: 0;
  right: 0;
  text-align: center;
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
`;
