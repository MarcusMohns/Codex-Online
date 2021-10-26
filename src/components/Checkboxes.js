import Checkbox from './Checkbox';

const Checkboxes = ({ filters }) => {
	return (
		<div>
			{filters.map((item) => {
				return (
					<ul key={item.name}>
						{item.name}
						{item.content.map((content, index) => <Checkbox key={index} text={content} />)}
					</ul>
				);
			})}
		</div>
	);
};

export default Checkboxes;