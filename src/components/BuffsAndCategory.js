import {
  CategoryContainer,
  StyledBuff,
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";

const BuffsAndCategory = ({ category, currentBuffs, categoryTooltip }) => {
  let newBuffs = [];
  let exists_already = [];
  let categoryColor = "pink";
  let AllBuffsInRaid = Object.values(currentBuffs);

  if (AllBuffsInRaid.length > 0) {
    for (let aPlayersBuffs of AllBuffsInRaid) {
      // iterate over state
      for (let buff of aPlayersBuffs) {
        if (buff.buffCategory === category) {
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
        {category} {newBuffs.length > 0 ? `x${newBuffs.length}` : ""}
        {categoryColor === "#72e263" ? <CheckCircle /> : <CrossIcon />}
      </StyledCategory>
      {newBuffs.map((buff) => (
        <StyledBuff key={(buff.count, buff.name)}>
          {buff.count} <p>x {buff.name} </p>
          <img src={buff.image} alt="buff icon" />
        </StyledBuff>
      ))}
    </CategoryContainer>
  );
};

BuffsAndCategory.defaultProps = {
  category: "No category found",
  newBuffs: "No Buff found",
};

export default BuffsAndCategory;
