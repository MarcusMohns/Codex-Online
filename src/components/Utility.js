import { StyledUtility } from "./styles/RaidAssembler.styled";

const Utility = ({ utility }) => {
  return (
    <StyledUtility key={utility.name}>
      {utility.count}x{utility.name}
      <img src={utility.image} alt="utility spell, e.g misdirection" />
    </StyledUtility>
  );
};

export default Utility;
