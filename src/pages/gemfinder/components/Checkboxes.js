import Checkbox from "./Checkbox";

const Checkboxes = ({ filters, onChange }) => {
  return (
    <div className="categories-and-checkboxes">
      {filters.map((item) => {
        return (
          <div key={item.name} className="category-container">
            <p className="category-name">{item.name}</p>
            <div className="checkboxes">
              {item.content.map((content, index) => (
                <Checkbox key={index} text={content} onChange={onChange} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Checkboxes;
