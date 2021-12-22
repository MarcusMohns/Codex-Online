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
  image: require("../images/hunter_beastmastery.png").default,
  name: "missing spec",
  count: 0,
};

export default Utility;
