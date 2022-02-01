import { StyledClassToolTip } from "./styles/RaidAssembler.styled";

const ClassTooltip = ({ text, buffs, utility, color }) => {
  return (
    <StyledClassToolTip color={color}>
      <p className="class-tooltip-title">{text}</p>
      <h2 className="class-tooltip-header">Buffs</h2>
      {buffs.map((buff, index) => (
        <div
          key={`${text}-${buff.name}-${index}`}
          className="class-tooltip-buff-content"
        >
          <div className="class-tooltip-category-name"> {buff.category}</div>
          <div className="class-tooltip-buff">
            <h2 className="class-tooltip-buff-name">{buff.name}</h2>
            <img
              src={`${buff.image}`}
              alt={`${buff.name}`}
              className="class-tooltip-image"
            />
          </div>
        </div>
      ))}
      <h2 className="class-tooltip-header">Utilities</h2>
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
