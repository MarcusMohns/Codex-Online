import { memo } from "react";
import { StyledBuff } from "../styles/RaidHelper.styled";

const Buff = ({ count, name, icon, link, spellId }) => {
  return (
    <StyledBuff
      key={name}
      href={link}
      data-wowhead={`item-${spellId}`}
      target="_blank"
      rel="noopener"
    >
      <p>
        {" "}
        {count}x {name}
      </p>
      <img src={icon} alt="buff icon" />
    </StyledBuff>
  );
};

export default memo(Buff);
