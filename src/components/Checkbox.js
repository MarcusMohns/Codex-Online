const Checkbox = ({ text, onChange }) => {
  return (
    <p className="aCheckbox">
      <input type="checkbox" value={text} onChange={onChange} id={text} />
      <label htmlFor={text}>{text}</label>
    </p>
  );
};

Checkbox.defaultProps = {
  text: "missing checkbox",
};

export default Checkbox;
