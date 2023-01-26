import styled from "styled-components";
import { RiDiscordFill } from "@react-icons/all-files/ri/RiDiscordFill";
import { Link } from "react-router-dom";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 120px;
  width: 100%;
  background-color: #222;
  border-top: 2px solid #34343a;
  color: grey;
  font-size: 0.9rem;
  margin-top: 10rem;
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
      <div>About</div>
      <a href="mailto: warcraftcodex@gmail.com" target="blank">
        Contact us
      </a>
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
