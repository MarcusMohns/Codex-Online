import { memo } from "react";
import { StyledBuff } from "./styles/RaidAssembler.styled";

const Buff = ({ count, name, image }) => {
  return (
    <StyledBuff>
      <p>
        {" "}
        {count}x {name}
      </p>
      <img src={image} alt="buff icon" />
    </StyledBuff>
  );
};

export default memo(Buff);
