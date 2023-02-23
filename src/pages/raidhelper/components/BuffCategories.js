import { StyledBuffCategories } from "../styles/RaidHelper.styled";
import BuffsAndCategory from "./BuffsAndCategory";
import BuffArray from "../../../data/BuffArray";
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
