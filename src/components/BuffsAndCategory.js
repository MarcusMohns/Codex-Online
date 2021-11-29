import {
  CategoryContainer,
  StyledBuff,
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";

const BuffsAndCategory = ({ category, currentBuffs, categoryTooltip }) => {
  let newBuff = [];
  let count = 0;
  let categoryColor = "pink";
  let AllBuffsInRaid = Object.values(currentBuffs);

  for (let aPlayersBuffs of AllBuffsInRaid) {
    // iterate over state
    for (let buff of aPlayersBuffs) {
      if (buff.buffCategory === category) {
        // if the buff and the category thats being created match
        categoryColor = "#72e263";
        newBuff.push(
          <StyledBuff key={count++}>
            <p>{buff.buffName}</p>
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
        <div className="tooltip">
          <div className="tooltiptext">
            <div className="title">
              <h3>{category}</h3>
            </div>
            {categoryTooltip.map((specName) => (
              <div key={`${specName} ${category}`}>{specName}</div>
            ))}
          </div>
        </div>
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
