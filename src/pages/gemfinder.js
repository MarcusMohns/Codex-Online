import { useState, useEffect } from 'react';
import GemTable from '../components/GemTable';
import gemArray from '../Gems';
import Checkboxes from '../components/Checkboxes';
import filterNames from '../FilterNames';
import { Main, GemTableContainer, CheckBoxContainer } from '../components/styles/GemFinder.styled';

let currentFilters = [];

const gemfinder = () => {
	const [ gems, setGems ] = useState(gemArray);
	const [ sort, setSort ] = useState(
		{ gemStats: false },
		{ gemQuality: false },
		{ gemColor: false },
		{ gemName: false }
	);

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

	const handleClick = (e) => {
		let sortedGems = [].concat(gems);
		gemSorter(sortedGems, e.target.className);
	};

	// Sets our state depending on which checkboxes are ticked.
	const gemFilterer = () => {
		let newArray = [].concat(gemArray);
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

	const gemSorter = (sortedGems, sortBy) => {
		console.log(sortBy);
		if (sortBy === 'gemQuality') {
			sortedGems.sort(function(a, b) {
				if (
					(a.quality === 'Perfect' && b.quality === 'Rare') ||
					(b.quality === 'Perfect' && a.quality === 'Rare')
				) {
					if (a.quality < b.quality) {
						return sort.gemQuality ? -1 : 1;
					}
					if (a.quality > b.quality) {
						return sort.gemQuality ? 1 : -1;
					}
					return 0;
				}

				if (a.quality < b.quality) {
					return sort.gemQuality ? 1 : -1;
				}
				if (a.quality > b.quality) {
					return sort.gemQuality ? -1 : 1;
				}

				return 0;
			});
			setSort((sort) => ({
				gemQuality: !sort.gemQuality
			}));
		}

		if (sortBy === 'gemStats') {
			setSort((sort) => ({
				gemStats: !sort.gemStats
			}));
		}

		if (sortBy === 'gemColor') {
			sortedGems.sort(function(a, b) {
				if (a.color < b.color) {
					return sort.gemColor ? 1 : -1;
				}
				if (a.color > b.color) {
					return sort.gemColor ? -1 : 1;
				}

				return 0;
			});
			setSort((sort) => ({
				gemColor: !sort.gemColor
			}));
		}

		if (sortBy === 'gemName') {
			sortedGems.sort(function(a, b) {
				if (a.name < b.name) {
					return sort.gemName ? 1 : -1;
				}
				if (a.name > b.name) {
					return sort.gemName ? -1 : 1;
				}

				return 0;
			});
			setSort((sort) => ({
				gemName: !sort.gemName
			}));
		}

		setGems(sortedGems);
	};

	// resets currentFilters when the page is rendered
	useEffect(() => {
		currentFilters = [];
	}, []);

	return (
		<Main>
			<CheckBoxContainer>
				<Checkboxes filters={filterNames} onChange={handleChange} />
			</CheckBoxContainer>
			<GemTableContainer>
				{gems.length > 0 ? (
					<GemTable gems={gems} onClick={handleClick} />
				) : (
					<p className="gemsNotFound">No gems found :(</p>
				)}
			</GemTableContainer>
		</Main>
	);
};

export default gemfinder;
