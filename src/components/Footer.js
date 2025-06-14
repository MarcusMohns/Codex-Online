import styled from "styled-components";
import { RiDiscordFill } from "@react-icons/all-files/ri/RiDiscordFill";
import { Link } from "react-router-dom";
import COLORS from "../colors";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  min-height: 70px;
  width: 100%;
  background-color: ${COLORS.greyBg};
  font-size: 0.9rem;
  margin-top: 12rem;
  flex-wrap: wrap;
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
  font-size: 1.5rem;
  margin-right: 2px;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href="mailto: marcus@mohns.se" target="blank">
        Contact
      </a>
      <Link to="/credits" className="link-button">
        Credits
      </Link>
      <Link to="/terms" className="link-button">
        Terms
      </Link>
      <a href="https://discord.gg/JskSjDrrwh" target="blank">
        <DiscordIcon />
        Connect
      </a>
    </StyledFooter>
  );
};

export default Footer;
