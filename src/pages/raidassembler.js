import Header from '../components/Header';
import SpecButtons from '../components/SpecButtons';
import SpecList from '../SpecList';
import PlayersInRaid from '../components/PlayersInRaid';
import { useState } from 'react';
import RaidBuffs from '../components/RaidBuffs';
import {
	Main,
	SpecButtonContainer,
	RaidGroupContainer,
	RaidBuffContainer
} from '../components/styles/RaidAssembler.styled';

const RaidAssembler = () => {
	const [ raid, setRaid ] = useState([]);
	const [ buffs, setBuffs ] = useState([]);
	const [ count, setCount ] = useState(0);

	const deletePlayer = (id) => {
		setRaid(raid.filter((player) => player.id !== id));
		setBuffs(buffs.filter((playerBuffs) => playerBuffs.id !== id));
		setCount(count - 1);
	};

	const addPlayer = (player) => {
		if (count < 25) {
			const id = Math.floor(Math.random() * 10000 + 1);
			const newPlayer = { id, ...player };
			setRaid([ ...raid, newPlayer ]);
			const newBuffs = { id, ...player.buffs };
			setBuffs([ ...buffs, newBuffs ]);
			setCount(count + 1);
		} else {
			alert('Raid is full');
		}
	};
	return (
		<Main>
			<Header title="Raid Assembler" />
			<RaidGroupContainer>
				<div className="count"> {count} / 25 </div>
				<div className="grid">
					{raid.length > 0 ? <PlayersInRaid raid={raid} onDelete={deletePlayer} /> : 'No Players in Raid'}
				</div>
			</RaidGroupContainer>
			<RaidBuffContainer>
				<RaidBuffs buffs={buffs} />
			</RaidBuffContainer>
			<SpecButtonContainer>
				<SpecButtons specs={SpecList} onClick={addPlayer} />
			</SpecButtonContainer>
		</Main>
	);
};

export default RaidAssembler;
