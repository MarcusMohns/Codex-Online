const Checkbox = ({ text, onChange }) => {
	return (
		<div>
			<input type="checkbox" value={text} onChange={onChange} />
			{text}
		</div>
	);
};

export default Checkbox;
