import { memo } from "react";
import {
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "./styles/RaidAssembler.styled";

import Tooltip from "./Tooltip";

const Category = ({ category, categoryColor, name, image }) => {
  return (
    <StyledCategory color={categoryColor}>
      <Tooltip category={category} />
      <img src={image} className="category-image" alt={`${name}`} />
      <p className="category-name-text">{name}</p>
      {categoryColor === "#72e263" ? <CheckCircle /> : <CrossIcon />}
    </StyledCategory>
  );
};

export default memo(Category);
