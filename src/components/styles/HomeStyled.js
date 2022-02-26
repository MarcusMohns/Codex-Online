import styled from "styled-components";
import COLORS from "../../components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  justify-content: space-around;
  max-width: 100vw;
  min-width: 100%;
  min-height: 80%;
  height: auto;

  #gem-finder-container {
    @media (min-width: 900px) {
      flex-direction: row-reverse;
    }
  }
`;

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  height: 500px;
  background-color: ${COLORS.fadedBlack};
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
  background-image: url("/images/howling_fjord.png");
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  top: 10%;
  z-index: -1;
`;

export const PagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  min-height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${COLORS.fadedBlack};
  z-index: 10;

  .content-preview-image {
    border-radius: 5px;
    background-color: ${COLORS.fadedBlack};
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 3px 5px 10px -2px rgba(0, 0, 0, 0.6);
    opacity: 80%;
    max-width: 95%;
    max-height: 100%;
    margin-bottom: 20px;

    @media (min-width: 900px) {
      width: 100%;
      height: auto;
      margin: 15px;
    }
  }

  @media (min-width: 900px) {
    flex-direction: row;
    margin-bottom: 0px;
  }
  @media (min-width: 1200px) {
    padding: 2% 10rem;
  }
`;

export const PagePreviewText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  color: ${COLORS.offWhite};
  flex-grow: 1;
  margin: 15px;
`;

export const PagePreviewHeader = styled.h2`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  color: ${COLORS.offWhite};
  margin-bottom: 1rem;
  font-size: 22px;

  @media (min-width: 900px) {
    align-items: start;
  }
`;
