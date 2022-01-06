import { StyledBuffCategories } from "./styles/RaidAssembler.styled";
import BuffsAndCategory from "./BuffsAndCategory";
import BuffArray from "../BuffArray";
import { memo } from "react";

const BuffCategories = ({ currentBuffs }) => {
  return (
    <StyledBuffCategories>
      {BuffArray.map((category) => (
        <BuffsAndCategory
          key={category.name}
          id={category.name}
          category={category}
          currentBuffs={currentBuffs}
        />
      ))}
    </StyledBuffCategories>
  );
};

export default memo(BuffCategories);
