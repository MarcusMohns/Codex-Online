import COLORS from "../components";
import styled from "styled-components";
import { RiDiscordFill } from "@react-icons/all-files/ri/RiDiscordFill";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 75px;
  background-color: ${COLORS.fadedGrey};
  box-shadow: 0 0 0.2rem ${COLORS.fadedGrey};
  color: grey;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const DiscordIcon = styled(RiDiscordFill)`
  font-size: 2rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>Copyright</div>
      <div>Contact</div>
      <div>About</div>

      <a href="https://discord.gg/JskSjDrrwh" target="blank">
        <DiscordIcon />
        Connect
      </a>
    </StyledFooter>
  );
};

export default Footer;
