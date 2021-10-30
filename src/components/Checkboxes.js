import Checkbox from './Checkbox';

const Checkboxes = ({ filters, onChange }) => {
	return (
		<div>
			{filters.map((item) => {
				return (
					<div key={item.name}>
						<p className="category">{item.name}</p>
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
