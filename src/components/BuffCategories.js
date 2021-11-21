import { StyledBuffCategories } from "./styles/RaidAssembler.styled";
import BuffsAndCategory from "./BuffsAndCategory";
const Categories = [
  "Agility and Strength",
  "Armor %",
  "Armor Reduction(Major)",
  "Armor Reduction(Minor)",
  "Attack Power %",
  "Attack Power",
  "Bloodlust",
  "Crit Strike %",
  "Damage %",
  "Damage Reduction %",
  "Disease Damage",
  "Haste %",
  "Healing Received",
  "Health",
  "Intellect",
  "Mana per 5",
  "Melee Crit",
  "Melee Haste",
  "Motw",
  "Phys Vulnerability",
  "Replenishment",
  "Spell Crit",
  "Spell Damage %",
  "Spell Haste",
  "Spell Hit",
  "Spellpower",
  "Spellpower(Major)",
  "Spellpower(Minor)",
  "Spirit",
  "Stamina",
  "Stats 10%",
];
const BuffCategories = ({ currentBuffs }) => {
  return (
    <StyledBuffCategories>
      {Categories.map((category) => (
        <BuffsAndCategory
          key={category}
          id={category}
          category={category}
          currentBuffs={currentBuffs}
        />
      ))}
    </StyledBuffCategories>
  );
};

export default BuffCategories;
