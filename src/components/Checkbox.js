const Checkbox = ({ text, onChange }) => {
	return (
		<p>
			<input type="checkbox" value={text} onChange={onChange} id={text} />
			<label for={text}>{text}</label>
		</p>
	);
};

export default Checkbox;
