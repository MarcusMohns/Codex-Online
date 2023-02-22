import { memo } from "react";
import { StyledBuff } from "./styles/RaidAssembler.styled";

const Buff = ({ count, name, image, link, spellId }) => {
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
      <img src={image} alt="buff icon" />
    </StyledBuff>
  );
};

export default memo(Buff);
