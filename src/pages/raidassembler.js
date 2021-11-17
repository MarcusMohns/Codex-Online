import { useState } from 'react';
import SpecList from '../SpecList';
import AllBuffs from '../AllBuffs';
import PlayersInRaid from '../components/PlayersInRaid';
import SpecButtons from '../components/SpecButtons';
import BuffCategories from '../components/BuffCategories';
//import RaidBuffs from '../components/RaidBuffs';
import { Main, SpecContainer, RaidContainer,BuffContainer} from '../components/styles/RaidAssembler.styled';


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
			addBuff(id, player)
			setCount(count + 1);
		} else {
			alert('Raid is full');
		}
	};

	const addBuff = (id, player) => {
			const newBuffs = { id, ...player.buffs };
			setBuffs([ ...buffs, newBuffs ]);
		
			for(let buffs in player.buffs) {
				console.log(player.buffs[buffs]);
				let div = document.getElementById(player.buffs[buffs]);
				var buffNode = document.createElement("div");
				buffNode.innerHTML += player.buffs[buffs]
				div.appendChild(buffNode);


				// Update SpecList to have the buff category and buff image, e.g
				// Agility and Strength: {Howl of Winter} : {HowlofWinter.img} 
		}

	}


	return (
		<Main>
		
	
			
			<RaidContainer className="raid-container">
				<div className="count"> {count} / 25 </div>
				{raid.length > 0 ? <PlayersInRaid raid={raid} onDelete={deletePlayer} /> : 'No Players in Raid'}
			</RaidContainer>
			<SpecContainer>
				<SpecButtons className='spec-buttons' specs={SpecList} onClick={addPlayer}/>
			</SpecContainer>

			<BuffContainer>
				{/* Pass in State */}
				<BuffCategories AllBuffs={AllBuffs} currentBuffs={buffs}></BuffCategories> 
			</BuffContainer>


		</Main>
	);
};

export default RaidAssembler;
