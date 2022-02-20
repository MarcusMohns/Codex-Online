import styled from "styled-components";
import COLORS from "../../components";

export const BackGround = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 100%;
  padding: 0px;
  height: 100vw;
  background-color: black;
  background-image: url("/images/howling_fjord.png");
  background-repeat: no-repeat;
  background-position: top;
`;
export const Main = styled.main`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 100vw;
  min-width: 100%;
  min-height: 80%;
  margin-top: 20%;
  height: auto;
  background-color: ${COLORS.fadedBackground};
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
  width: 40%;
  background-color: ${COLORS.background};
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
`;
