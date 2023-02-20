import { StyledUtility } from "./styles/RaidAssembler.styled";

const Utility = ({ utility }) => {
  console.log(utility);
  return (
    <StyledUtility
      key={utility.name}
      href={utility.link}
      data-wowhead={`item-${utility.id}`}
    >
      {utility.count}x {utility.name}
      <img src={utility.image} alt="utility spell, e.g misdirection" />
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
