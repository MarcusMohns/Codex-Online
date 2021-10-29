import Checkbox from './Checkbox';

const Checkboxes = ({ filters, onChange }) => {
	return (
		<div>
			{filters.map((item) => {
				return (
					<ul key={item.name}>
						<p id="category">{item.name}</p>
						{item.content.map((content, index) => (
							<Checkbox key={index} text={content} onChange={onChange} />
						))}
					</ul>
				);
			})}
		</div>
	);
};

export default Checkboxes;
