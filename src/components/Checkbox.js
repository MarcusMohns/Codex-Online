const Checkbox = ({ text, onChange }) => {
  return (
    <p className="a-checkbox">
      <input type="checkbox" value={text} onChange={onChange} id={text} />
      <span class="styled-checkmark"></span>
      <label htmlFor={text}>{text}</label>
    </p>
  );
};

Checkbox.defaultProps = {
  text: "missing checkbox",
};

export default Checkbox;
