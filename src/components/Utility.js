import { StyledUtility } from "./styles/RaidAssembler.styled";

const Utility = ({ utility }) => {
  return (
    <StyledUtility key={utility.name}>
      {utility.count}x {utility.name}
      <img src={utility.image} alt="utility spell, e.g misdirection" />
    </StyledUtility>
  );
};

Utility.defaultProps = {
  image: "images/hunter_beastmastery.png",
  name: "missing spec",
  count: 0,
};

export default Utility;
