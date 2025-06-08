import styled from "styled-components";
import COLORS from "../../../colors";

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
  background-color: ${COLORS.fadedBackground};

  .highlight {
    color: ${COLORS.goldHighlight};
  }

  #divider {
    display: flex;
    align-items: end;
    width: 100%;
    height: 300px;
    background: ${COLORS.fadedBackground};
    background: linear-gradient(
      9deg,
      ${COLORS.fadedBlack} 50%,
      ${COLORS.fadedBackground} 0%
    );

    h3 {
      color: ${COLORS.offWhite};
      text-align: center;
      font-size: 2rem;
      margin-left: 10%;
      margin-bottom: 3rem;
    }
  }
`;

export const HeroContainer = styled.div`
  max-width: 100vw;
  min-width: 100%;
  color: ${COLORS.offWhite};
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: ${COLORS.fadedBlack};
  background-image: url("images/grizzly_hills.webp");
  background-repeat: no-repeat;

  .hero-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    padding: 2rem;
    @media (min-width: 1200px) {
      width: 50%;
    }
  }

  .hero-header {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 1rem;
    @media (min-width: 1200px) {
      font-size: 3.5rem;
      text-align: left;
    }
  }
  .hero-subtitle {
    font-size: 0.9rem;
    text-align: center;
  }

  .hero-overline {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin-bottom: 0.5rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.fadedBackground};
  justify-content: space-around;
  box-sizing: border-box;
  min-height: 90vh;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const PagePreviewCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 80%;
  background-color: ${COLORS.fadedGrey};
  box-shadow: 3px 5px 10px -2px rgba(12, 11, 11, 0.6);
  color: ${COLORS.offWhite};
  padding: 1rem;
  margin-top: 2rem;
  min-height: 500px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;

  .link-button {
    display: inline-block;
    background: ${COLORS.primary};
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    padding: 15px;
    border: 2px solid transparent;

    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: ${COLORS.darkPrimary};
    }
  }
  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 600px) {
    width: 20%;
    margin-top: 0rem;
  }
`;

export const CardHeader = styled.h3`
  color: ${COLORS.offWhite};
  font-size: 1.4rem;
  text-align: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
`;

export const CardText = styled.p`
  color: ${COLORS.offWhite};
  font-size: 0.9rem;
  text-align: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
`;

export const CardImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin: 1rem 0;
`;

export const PagePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  min-height: 100%;
  width: 100%;
  z-index: 10;
  background-color: ${COLORS.fadedBlack};

  @media (min-width: 500px) {
  }
  @media (min-width: 760px) {
  }
  @media (min-width: 1200px) {
  }
`;

export const PagePreviewText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${COLORS.offWhite};
  flex-grow: 1;
  margin: 15px;
  width: 80%;
  text-align: center;
  font-size: 1.1rem;
  font-family: sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;

  .highlight {
    color: ${COLORS.goldHighlight};
  }

  .step-container {
    display: none;
    align-items: center;
    justify-content: center;
    color: ${COLORS.goldHighlight};
    background-color: ${COLORS.fadedBlack};
    margin-top: 1rem;
    border-radius: 5px;
    text-align: center;
    letter-spacing: 0;

    @media (min-width: 900px) {
      display: flex;
      flex-direction: row;
      font-size: 1.2rem;
      width: 100%;
    }
  }
  @media (min-width: 900px) {
    text-align: inherit;
    align-items: start;
  }
  .a-step {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
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
    border-radius: 50%;
    font-family: sans-serif;
    color: white;
    border: 2px solid ${COLORS.goldHighlight};
  }

  .link-button {
    display: inline-block;
    background: ${COLORS.primary};
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    padding: 15px 30px;
    border: 2px solid transparent;

    cursor: pointer;
    margin-top: 1rem;
    text-decoration: none;
    &:hover {
      background: ${COLORS.darkPrimary};
    }
  }
`;
