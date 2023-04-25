import { memo } from "react";
import {
  StyledCategory,
  CrossIcon,
  CheckCircle,
} from "../styles/RaidHelper.styled";

import Tooltip from "./Tooltip";

const Category = ({ category, categoryColor, name, image, icon }) => {
  return (
    <StyledCategory color={categoryColor}>
      <Tooltip category={category} />
      <img
        src={icon}
        srcSet={`${icon} 1x, ${image} 1.33x`}
        className="category-image"
        alt={`${name}`}
      />
      <p className="category-name-text">{name}</p>
      {categoryColor === "#72e263" ? <CheckCircle /> : <CrossIcon />}
    </StyledCategory>
  );
};

export default memo(Category);
