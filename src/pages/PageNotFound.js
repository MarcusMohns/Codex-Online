import React from "react";
import styled from "styled-components";
import { Header } from "../components/styles/RaidAssembler.styled";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;

  .not-found-error-text {
    color: white;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
  }

  .error-image-container {
    padding: 2rem;
    img {
      height: 256px;
      width: 256px;
    }
  }

  @media screen and (min-width: 600px) {
    padding: 0rem 15rem;
  }
`;

const PageNotFound = () => {
  return (
    <>
      <Header>PAGE NOT FOUND</Header>
      <Main>
        <div className="error-image-container">
          <img src="images/page-not-found-error.png" alt="404 Error" />
        </div>
        <p className="not-found-error-text">Couldnt find that page, sorry :(</p>
      </Main>
    </>
  );
};

export default PageNotFound;
