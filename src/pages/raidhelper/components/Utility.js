import { StyledUtility } from "../styles/RaidHelper.styled";

const Utility = ({ utility }) => {
  return (
    <StyledUtility
      key={utility.name}
      href={utility.link}
      data-wowhead={`item-${utility.spellId}`}
      target="_blank"
      rel="noreferrer"
    >
      {utility.count}x {utility.name}
      <img
        src={utility.icon}
        srcSet={`${utility.icon} 1x, ${utility.image} 2x`}
        alt="utility spell, e.g misdirection"
      />
    </StyledUtility>
  );
};

Utility.defaultProps = {
  image: "images/hunter_beastmastery.png",
  name: "missing spec",
  count: 0,
  spellId: "57330",
  link: "https://www.wowhead.com/wotlk/spell=57330/horn-of-winter",
};

export default Utility;
