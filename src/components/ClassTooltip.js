import { StyledClassToolTip } from "./styles/RaidAssembler.styled";

const ClassTooltip = ({ text, buffs, utility }) => {
  return (
    <StyledClassToolTip>
      <p className="class-tooltip-title">{text}</p>
      {buffs.map((buff, index) => (
        <div
          key={`${text}-${buff.name}-${index}`}
          className="class-tooltip-buff-content"
        >
          {buff.name}
          <img
            src={`${buff.image}`}
            alt={`${buff.name}`}
            className="class-tooltip-image"
          />
          {buff.category}
        </div>
      ))}
      {utility.map((spell, index) => (
        <div
          key={`${text}-${spell.name}-${index}`}
          className="class-tooltip-utility-content"
        >
          {spell.name}
          <img
            src={spell.image}
            alt={`${spell.name}`}
            className="class-tooltip-image"
          />
        </div>
      ))}
    </StyledClassToolTip>
  );
};

export default ClassTooltip;
