import Checkbox from './Checkbox';

const Checkboxes = ({ filters, onChange }) => {
	return (
		<div className="checkBoxContainer">
			{filters.map((item) => {
				return (
					<div key={item.name} className="categoryContainer">
						<p className="categoryName">{item.name}</p>
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
