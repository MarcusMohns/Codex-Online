const BlessingCheckboxes = ({ text }) => {
  return (
    <div>
      <input
        type="checkbox"
        name={text.replace(/\s+/g, "")}
        id={`${text.replace(/\s+/g, "")}-bok-checkbox`}
        value="Kings"
        defaultChecked
      />{" "}
      <label htmlFor={`${text.replace(/\s+/g, "")}-bok-checkbox`}>BoK</label>
      <input
        type="checkbox"
        name={text.replace(/\s+/g, "")}
        id={`${text.replace(/\s+/g, "")}-bom-checkbox`}
        value="Might"
      />{" "}
      <label htmlFor={`${text.replace(/\s+/g, "")}-bom-checkbox`}>BoM</label>
      <input
        type="checkbox"
        name={text.replace(/\s+/g, "")}
        id={`${text.replace(/\s+/g, "")}-bow-checkbox`}
        value="Wisdom"
      />{" "}
      <label htmlFor={`${text.replace(/\s+/g, "")}-bow-checkbox`}>BoW</label>
    </div>
  );
};

export default BlessingCheckboxes;
