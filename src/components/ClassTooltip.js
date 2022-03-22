import { StyledClassToolTip } from "./styles/RaidAssembler.styled";
import { memo } from "react";
const ClassTooltip = ({ text, buffs, utility, color, image }) => {
  return (
    <StyledClassToolTip color={color}>
      <div className="tooltip">
        <p className="class-tooltip-title">{text}</p>
        <img
          src={image}
          alt="class specialization"
          className="class-tooltip-spec-image"
        />
        <div className="tooltip-buff-and-utility-container">
          <div className="buffs-tooltip-container">
            <h2 className="class-tooltip-header">Buffs</h2>
            {buffs.map((buff, index) => (
              <div
                key={`${text}-${buff.name}-${index}`}
                className="class-tooltip-spell-content"
              >
                <div className="class-tooltip-category-name">
                  {buff.category}
                </div>
                <div class="class-tooltip-buff">
                  <h2 className="class-tooltip-buff-name">{buff.name}</h2>
                  <img
                    src={`${buff.image}`}
                    alt={`${buff.name}`}
                    className="class-tooltip-image"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="utility-tooltip-container">
            <h2 className="class-tooltip-header">Utilities</h2>
            {utility.map((spell, index) => (
              <div
                key={`${text}-${spell.name}-${index}`}
                className="class-tooltip-spell-content"
              >
                <div class="class-tooltip-buff">
                  <h2 className="class-tooltip-buff-name">{spell.name}</h2>
                  <img
                    src={spell.image}
                    alt={`${spell.name}`}
                    className="class-tooltip-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StyledClassToolTip>
  );
};

export default memo(ClassTooltip);
