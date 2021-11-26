import { StyledBuffCategories } from "./styles/RaidAssembler.styled";
import BuffsAndCategory from "./BuffsAndCategory";
import BuffArray from "../BuffArray";

const BuffCategories = ({ currentBuffs }) => {
  return (
    <StyledBuffCategories>
      {BuffArray.map((category) => (
        <BuffsAndCategory
          key={category.name}
          id={category.name}
          category={category.name}
          categoryTooltip={category.source}
          currentBuffs={currentBuffs}
        />
      ))}
    </StyledBuffCategories>
  );
};

export default BuffCategories;
