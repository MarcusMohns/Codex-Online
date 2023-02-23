const Checkbox = ({ text, onChange }) => {
  return (
    <label className="a-checkbox">
      <div className="label-text">{text}</div>
      <input type="checkbox" value={text} onChange={onChange} id={text} />
      <span className="styled-checkmark"></span>
    </label>
  );
};

Checkbox.defaultProps = {
  text: "missing checkbox",
};

export default Checkbox;
