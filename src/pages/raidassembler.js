import { useReducer,useState } from 'react';
import SpecList from '../SpecList';
import PlayersInRaid from '../components/PlayersInRaid';
import SpecButtons from '../components/SpecButtons';
import BuffCategories from '../components/BuffCategories';
//import RaidBuffs from '../components/RaidBuffs';
import { Main, SpecContainer, RaidContainer,BuffContainer} from '../components/styles/RaidAssembler.styled';

const formReducer = (state, action) => {
		if (action.name in state) {
		let newEntry = state[action.name].slice(-state[action.name].length)
		newEntry.push(action.value)
			return {
			...state,
			[action.name]:newEntry	
}
		}
		else {
			return {
				
				...state,
				[action.name]:[action.value]
				
			};
};

};


const RaidAssembler = () => {
	const [ raid, setRaid ] = useState([]);
	const [ buffs, setBuffs ] = useReducer(formReducer,{});
	const [ count, setCount ] = useState(0);


	const deletePlayer = (id) => {
		setRaid(raid.filter((player) => player.id !== id));
		setCount(count - 1);
		delete buffs[id];
	
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

		for (let buff of player.buffs ) {
			let newBuff = 
			{
				buffCategory:buff.category,
				buffName: buff.name,
				buffImg: buff.image,
			}
			setBuffs({
				name:id,
				value: newBuff,
			});
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
				<BuffCategories currentBuffs={buffs}></BuffCategories> 
			</BuffContainer>


		</Main>
	);
};

export default RaidAssembler;
