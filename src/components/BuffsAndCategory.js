import {
  CategoryContainer,
  StyledBuff,
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";

// import SpecList from "../SpecList";

const BuffsAndCategory = ({ category, currentBuffs }) => {
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
        console.log(AllBuffsInRaid);
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
          <p className="tooltiptext">
            <h3>Blessing of Kings</h3>
          </p>
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
