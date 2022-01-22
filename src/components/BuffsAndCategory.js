import {
  CategoryContainer,
  StyledBuff,
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";
import Tooltip from "./Tooltip";

const BuffsAndCategory = ({ category, currentBuffs }) => {
  let newBuffs = [];
  let exists_already = [];
  let categoryColor = "pink";
  let AllBuffsInRaid = Object.values(currentBuffs);

  if (AllBuffsInRaid.length > 0) {
    for (let aPlayersBuffs of AllBuffsInRaid) {
      // iterate over state
      for (let buff of aPlayersBuffs) {
        if (buff.buffCategory === category.name) {
          // If buff matches category being created
          categoryColor = "#72e263";

          if (!exists_already.includes(buff.buffName)) {
            // if buff is not already displayed
            exists_already.push(buff.buffName);
            newBuffs.push({
              name: buff.buffName,
              image: buff.buffImg,
              count: 1,
            });
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
      <StyledCategory color={categoryColor}>
        <Tooltip category={category} />
        <img
          src={category.image}
          className="category-image"
          alt={`${category.name}`}
        />
        <p className="category-name-text">{category.name}</p>
        {categoryColor === "#72e263" ? <CheckCircle /> : <CrossIcon />}
      </StyledCategory>
      {newBuffs.map((buff) => (
        <StyledBuff key={(buff.count, buff.name)}>
          <p>
            {" "}
            {buff.count}x {buff.name}
          </p>
          <img src={buff.image} alt="buff icon" />
        </StyledBuff>
      ))}
    </CategoryContainer>
  );
};

BuffsAndCategory.defaultProps = {
  category: "No category found",
  currentBuffs: "No Buffs found",
};

export default BuffsAndCategory;
