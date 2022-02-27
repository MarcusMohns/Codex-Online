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
  width: 100%;
  .step-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${COLORS.goldHighlight};
    background-color: ${COLORS.fadedBlack};
    margin-top: 1rem;
    border-radius: 5px;
    font-size: 1.1rem;
  }
  .step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 1.8rem;
    min-height: 1.8rem;
    padding: 0.2rem;
    font-size: 1.4rem;
    margin: 1rem;
    margin-right: 0.5rem;
    border-radius: 100%;
    font-family: sans-serif;
    color: white;
    border: 2px solid ${COLORS.goldHighlight};
  }

  .link-button {
    display: inline-block;
    background: ${COLORS.fadedBlack};
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    padding: 15px 30px;
    border: 1px solid ${COLORS.goldHighlight};
    cursor: pointer;
    margin-top: 1rem;
    text-decoration: none;
    &:hover {
      background: ${COLORS.fadedPrimary};
    }
  }
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
