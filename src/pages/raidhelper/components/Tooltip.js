import { memo } from "react";
const Tooltip = ({ category }) => {
  return (
    <div className="tooltip">
      <div className="tooltiptext">
        <div className="title">
          <h3>{category.name}</h3>
          {
            <img
              src={category.image}
              alt="Buff category"
              srcSet={`${category.image} 1x`}
            />
          }
        </div>
        <h3>Provided by:</h3>
        {category.source}
        <div className="spell-description">{category.text}</div>
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  category: {
    name: "missing tooltip",
    text: "missing tooltip",
    image: "images/hunter_beastmastery.png",
  },
};

export default memo(Tooltip);
