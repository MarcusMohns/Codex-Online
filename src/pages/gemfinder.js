import { useState, useEffect } from 'react';
import GemTable from '../components/GemTable';
import gemArray from '../Gems.json';
import Checkboxes from '../components/Checkboxes';
import filterNames from '../FilterNames';
import { Main, GemFinder } from '../components/styles/GemFinder.styled';

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
	// Sets our state depending on which checkboxes are ticked.
	const gemFilterer = () => {
		let newArray = gemArray;
		currentFilters.forEach((aFilter) => {
			if (filterNames[2].content.includes(aFilter))
				// Gem color
				newArray = newArray.filter((gem) => currentFilters.includes(gem.color));
			else if (filterNames[3].content.includes(aFilter))
				//Gem quality
				newArray = newArray.filter((gem) => currentFilters.includes(gem.quality));
			else if (filterNames[0].content.includes(aFilter) || filterNames[1].content.includes(aFilter))
				// Main Attributes, Secondary Attributes
				newArray = newArray.filter((gem) => gem.stats.includes(aFilter));
			else {
				return alert('Error');
			}
		});

		setGems(newArray);
	};

	// resets currentFilters when the page is rendered
	useEffect(() => {
		currentFilters = [];
	}, []);

	return (
		<Main>
			<Checkboxes filters={filterNames} onChange={handleChange} />
			{gems.length > 0 ? (
				<GemFinder>
					<GemTable gems={gems} />
				</GemFinder>
			) : (
				'No gems found :('
			)}
		</Main>
	);
};

export default gemfinder;
