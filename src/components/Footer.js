import COLORS from "../components";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: flex-end;
  height: 75px;
  background-color: ${COLORS.fadedGrey};
  box-shadow: 0 0 0.2rem ${COLORS.fadedGrey};
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>Copyright</div>
      <div>Contact</div>
      <div>About</div>
      <div>Connect</div>
    </StyledFooter>
  );
};

export default Footer;
