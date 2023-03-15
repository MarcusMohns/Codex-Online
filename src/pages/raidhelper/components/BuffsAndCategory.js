import { CategoryContainer } from "../styles/RaidHelper.styled";
import Buff from "./Buff";
import Category from "./Category";

const BuffsAndCategory = ({ category, currentBuffs }) => {
  let newBuffs = [];
  let exists_already = [];
  let categoryColor = "pink";
  let allBuffsInRaid = Object.values(currentBuffs);

  if (allBuffsInRaid.length > 0) {
    for (let aPlayersBuffs of allBuffsInRaid) {
      // iterate over state
      for (let buff of aPlayersBuffs) {
        if (buff.buffCategory === category.name) {
          // If buff matches category being created
          categoryColor = "#72e263";
          if (!exists_already.includes(buff.buffName)) {
            // if buff is not already displayed
            exists_already = [...exists_already, buff.buffName];
            newBuffs = [
              ...newBuffs,
              {
                name: buff.buffName,
                image: buff.buffImg,
                icon: buff.buffIcon,
                link: buff.buffLink,
                spellId: buff.buffSpellId,
                count: 1,
              },
            ];
          } else {
            // if it is displayed add +1 to the count.
            for (let newBuff of newBuffs) {
              if (newBuff.name === buff.buffName) {
                newBuff.count++;
              }
            }
          }

          // add buff to newBuffs
        }
      }
    }
  }
  return (
    <CategoryContainer>
      <Category
        category={category}
        categoryColor={categoryColor}
        name={category.name}
        image={category.image}
        icon={category.icon}
      />
      {newBuffs.map((buff) => (
        <Buff
          count={buff.count}
          name={buff.name}
          image={buff.image}
          icon={buff.icon}
          link={buff.link}
          spellId={buff.spellId}
          key={(buff.count, buff.name)}
        />
      ))}
    </CategoryContainer>
  );
};

BuffsAndCategory.defaultProps = {
  category: "No category found",
  currentBuffs: "No Buffs found",
};

export default BuffsAndCategory;
