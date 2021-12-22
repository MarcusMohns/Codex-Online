const Tooltip = ({ category }) => {
  return (
    <div className="tooltip">
      <div className="tooltiptext">
        <div className="title">
          <h3>{category.name}</h3>
          {<img src={category.image} alt="Buff category" />}
        </div>
        <h3>Provided by:</h3>
        {category.source.map((specName) => (
          <div key={`${specName} ${category}`}>{specName}</div>
        ))}
        <div className="spell-description">{category.text}</div>
      </div>
    </div>
  );
};

Tooltip.defaultProps = {
  category: {
    name: "missing tooltip",
    text: "missing tooltip",
    image: require("../images/hunter_beastmastery.png").default,
  },
};

export default Tooltip;
