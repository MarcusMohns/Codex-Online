import { StyledClassToolTip } from "./styles/RaidAssembler.styled";

const ClassTooltip = ({ text, buffs }) => {
  console.log(buffs);
  return (
    <StyledClassToolTip>
      {text}
      {buffs.map((buff, index) => (
        <div key={`${text}-${buff.name}-${index}`}>
          {buff.name}
          {buff.category}
          <img src={`${buff.image}`} alt={`${buff.name}`} />
        </div>
      ))}
    </StyledClassToolTip>
  );
};

export default ClassTooltip;
