import { Container } from '../components/styles/Container.styled';
import { useState, useEffect } from 'react';
import Gems from '../components/Gems';
import gemArray from '../Gems.json';
import Checkboxes from '../components/Checkboxes';
import filterNames from '../FilterNames';

const gemfinder = () => {
	const [ gems, setGems ] = useState(gemArray);
	const [ currentFilters, setCurrentFillters ] = useState([]);

	// Add/Remove filters to currentFilters
	const handleChange = (e) => {
		if (e.target.checked) {
			setCurrentFillters([ ...currentFilters, e.target.value ]);
		} else if (!e.target.checked) {
			setCurrentFillters(currentFilters.filter((aFilter) => aFilter !== e.target.value));
		} else {
			return alert('error');
		}
	};

	// Filter our state with (gems)
	useEffect(() => {
		console.log(currentFilters);
	});

	return (
		<Container style={{ flexDirection: 'row' }}>
			<Checkboxes filters={filterNames} onChange={handleChange} />
			<Gems gems={gems} />
		</Container>
	);
};

export default gemfinder;
