import styled from "styled-components";
import COLORS from "../colors";

const Header = styled.h1`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-align: center;
  color: white;
  width: 100%;
  height: 100%;
  margin-top: 10%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background-color: ${COLORS.fadedBlack};
  max-width: 100vw;
  width: auto;
  font-family: sans-serif;
  color: white;
  min-height: 100vh;
  .credit {
    display: flex;
    padding: 10px;
    margin: 5px;
    font-size: 1.1rem;
  }
  p {
    font-size: 1.3rem;
    margin-right: 10px;
    color: ${COLORS.fadedOffWhite};
    text-transform: uppercase;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    color: white;
  }

  @media screen and (min-width: 600px) {
    padding: 2rem 15rem;
    align-items: center;
  }
`;

const Credits = () => {
  return (
    <>
      <Header>Credits</Header>
      <Main>
        <div className="credit">
          <p>Tooltips:</p>
          <a
            href="https://www.wowhead.com/wotlk/tooltips"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.wowhead.com/wotlk/tooltips
          </a>
        </div>
        <div className="credit">
          <p>Wow related Icons:</p>
          <a
            href="https://www.wowhead.com/wotlk/icons"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.wowhead.com/wotlk/icons
          </a>
        </div>
        <div className="credit">
          <p>Other Icons and Images:</p>
          <a
            href="https://svgrepo.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://svgrepo.com/
          </a>
        </div>
        <div className="credit">
          <p>Cynthias Arena SVG:</p>
          <a
            href="https://www.svgrepo.com/svg/476829/arena"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.svgrepo.com/svg/476829/arena
          </a>
        </div>
      </Main>
    </>
  );
};
export default Credits;
