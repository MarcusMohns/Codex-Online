import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 0rem 4rem;
  font-size: 1rem;
  color: white;
  margin-top: 7%;
  min-height: 60vh;
  overflow: hidden;

  .radio-input-container {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding-bottom: 1rem;
  }

  .input-radio-and-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;

    opacity: 0%;
    animation-name: FadeIn;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;

    @media screen and (max-width: 992px) {
      img {
        width: 40px;
        height: 40px;
      }
    }
    @media screen and (max-width: 650px) {
      img {
        width: 26px;
        height: 26px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    box-shadow: none;
    padding: 5px;
    font-size: 0.9rem;
    max-width: 90vw;
    min-width: 100%;
  }

  @keyframes FadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
