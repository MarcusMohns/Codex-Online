import { StyledClassToolTip } from "../styles/RaidHelper.styled";
import { memo } from "react";
const ClassTooltip = ({ classTooltipOpen, setClassTooltipOpen, spec }) => {
  return (
    <StyledClassToolTip
      color={spec.color}
      onClick={() => setClassTooltipOpen(!classTooltipOpen)}
    >
      <div className="tooltip" onClick={(e) => e.stopPropagation()}>
        <div className="class-tooltip-header">
          <div className="class-tooltip-header-text">Buffs & Debuffs</div>
          <p className="class-tooltip-player-info">
            <span className="class-tooltip-class-color">{spec.text}</span>
            <img
              src={spec.icon}
              alt="class icon"
              className="class-tooltip-class-image"
            />
          </p>
          <div className="class-tooltip-close-window-btn">
            <div
              className="class-tooltip-close-window-icn"
              onClick={() => setClassTooltipOpen(!classTooltipOpen)}
            >
              x
            </div>
          </div>
        </div>

        <div className="buffs-tooltip-container">
          <h2 className="class-tooltip-subheader">Buffs</h2>
          {spec.buffs.map((buff, index) => (
            <div
              className="class-tooltip-buff-and-category"
              key={`${spec.text}-${buff.name}-${index}`}
            >
              <div className="class-tooltip-category-name">{buff.category}</div>
              <a
                className="class-tooltip-buff"
                key={buff.name}
                href={buff.link}
                data-wowhead={`item-${buff.spellId}`}
                target="_blank"
                rel="noreferrer"
              >
                {buff.name}
                <img
                  src={`${buff.image}`}
                  alt={`${buff.name}`}
                  className="class-tooltip-image"
                />
              </a>
            </div>
          ))}
        </div>

        <div className="utility-tooltip-container">
          <h2 className="class-tooltip-subheader">Utilities</h2>
          {spec.utility.map((spell, index) => (
            <div
              className="class-tooltip-buff-and-category"
              key={`${spec.text}-${spell.name}-${index}`}
            >
              <a
                className="class-tooltip-buff"
                key={spell.name}
                href={spell.link}
                data-wowhead={`item-${spell.spellId}`}
                target="_blank"
                rel="noreferrer"
              >
                {spell.name}
                <img
                  src={spell.image}
                  alt={`${spell.name}`}
                  className="class-tooltip-image"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </StyledClassToolTip>
  );
};

export default memo(ClassTooltip);
