import { Container } from '../components/styles/Container.styled';
import { useState } from 'react';
import Gems from '../components/Gems';
import gemArray from '../Gems.json';
import Checkboxes from '../components/Checkboxes';
import filterNames from '../FilterNames';

let currentFilters = [];

const gemfinder = () => {
	const [ gems, setGems ] = useState(gemArray);

	// Add/Remove filters to currentFilters
	const handleChange = (e) => {
		if (e.target.checked) {
			currentFilters = [ ...currentFilters, e.target.value ];
		} else if (!e.target.checked) {
			currentFilters = currentFilters.filter((aFilter) => aFilter !== e.target.value);
		} else {
			return alert('error');
		}
		gemFilterer();
	};

	const gemFilterer = () => {
		let newArray = gemArray;
		currentFilters.forEach((aFilter) => {
			if (filterNames[2].content.includes(aFilter))
				newArray = newArray.filter((gem) => currentFilters.includes(gem.color));
			else if (filterNames[3].content.includes(aFilter))
				newArray = newArray.filter((gem) => currentFilters.includes(gem.quality));
			else if (filterNames[0].content.includes(aFilter) || filterNames[1].content.includes(aFilter))
				newArray = newArray.filter((gem) => gem.stats.includes(aFilter));
			else {
				alert('eeerrorrrr');
			}
		});

		setGems(newArray);
	};
	console.log(currentFilters);

	return (
		<Container style={{ flexDirection: 'row' }}>
			<Checkboxes filters={filterNames} onChange={handleChange} />
			<Gems gems={gems} />
		</Container>
	);
};

export default gemfinder;
