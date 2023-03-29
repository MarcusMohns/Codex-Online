import { StyledBuffCategories, BuffsDiv } from "../styles/RaidHelper.styled";
import BuffsAndCategory from "./BuffsAndCategory";
import BuffArray from "../../../data/BuffArray";
import { memo } from "react";

const BuffCategories = ({ currentBuffs }) => {
  return (
    <StyledBuffCategories>
      <BuffsDiv>
        <h2 className="type-header">Buffs & Debuffs</h2>
        {BuffArray.buffs.map((category) => (
          <BuffsAndCategory
            key={category.name}
            id={category.name}
            category={category}
            currentBuffs={currentBuffs}
          />
        ))}
      </BuffsDiv>
      <BuffsDiv>
        <h2 className="type-header">Caster Buffs</h2>
        {BuffArray.casterBuffs.map((category) => (
          <BuffsAndCategory
            key={category.name}
            id={category.name}
            category={category}
            currentBuffs={currentBuffs}
          />
        ))}
        <h2 className="type-header" id="phys-buffs">
          Melee Buffs
        </h2>
        {BuffArray.physicalBuffs.map((category) => (
          <BuffsAndCategory
            key={category.name}
            id={category.name}
            category={category}
            currentBuffs={currentBuffs}
          />
        ))}
      </BuffsDiv>
    </StyledBuffCategories>
  );
};

export default memo(BuffCategories);
