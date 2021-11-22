import {
  CategoryContainer,
  StyledBuff,
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";

const BuffsAndCategory = ({ category, currentBuffs }) => {
  let newBuff = [];
  let count = 0;
  let categoryColor = "pink";
  let AllBuffsInRaid = Object.values(currentBuffs);

  for (let aPlayersBuffs of AllBuffsInRaid) {
    // iterate over state
    for (let buff of aPlayersBuffs) {
      if (buff.buffCategory === category) {
        categoryColor = "#72e263";

        // if the buff and the category thats being created match
        newBuff.push(
          <StyledBuff key={count++}>
            {buff.buffName}
            <img src={buff.buffImg} alt="buff icon" />
          </StyledBuff>
        );
        // add buff to newBuff
      }
    }
  }
  return (
    <CategoryContainer>
      <StyledCategory color={categoryColor}>
        {category}
        {categoryColor === "#72e263" ? <CheckCircle /> : <CrossIcon />}
      </StyledCategory>

      {newBuff}
    </CategoryContainer>
  );
};

BuffsAndCategory.defaultProps = {
  category: "No category found",
  newBuff: "No Buff found",
};

export default BuffsAndCategory;
