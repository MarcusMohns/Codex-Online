import Checkbox from "./Checkbox";

const Checkboxes = ({ filters, onChange }) => {
  return (
    <div className="categories-and-checkboxes">
      {filters.map((item) => {
        return (
          <div key={item.name} className="category-container">
            <p className="category-name">{item.name}</p>
            {item.content.map((content, index) => (
              <Checkbox key={index} text={content} onChange={onChange} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
