const Checkbox = ({ text, onChange }) => {
	return (
		<p>
			<input type="checkbox" value={text} onChange={onChange} id={text} />
			<label htmlFor={text}>{text}</label>
		</p>
	);
};

export default Checkbox;
