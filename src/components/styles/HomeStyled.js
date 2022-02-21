import styled from "styled-components";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 100vw;
  min-width: 100%;
  min-height: 80%;
  height: auto;
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  min-height: 100%;
  margin-top: 50px;
  height: 500px;
  width: 80%;
  background-color: ${COLORS.fadedBlack};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  background-image: url("/images/howling_fjord.png");
  background-repeat: no-repeat;
  background-position: top;
`;
