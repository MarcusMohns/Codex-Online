import { Container } from '../components/styles/Container.styled';
import Header from '../components/Header';
import {RaidAssemblerContainer} from '../components/styles/RaidAssemblerContainer.styled'; 
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';
import PlayersInRaid from '../components/PlayersInRaid';
import {useState} from 'react';

const RaidAssembler = () => {
    
    const [raid,setRaid] = useState([])


    const deletePlayer = (id) => {
        setRaid(raid.filter((player) => player.id !== id))
    }

    function addPlayer(player) {
        const id = Math.floor(Math.random() * 10000 + 1)
        const newPlayer = {id, ...player}
        setRaid([...raid,newPlayer])
        console.log(newPlayer)
    }


    return (
        <>
        <Header title='Raid Assembler'/>
        <Container style={{	flexDirection: "row" , maxWidth:"90vw"}}>
            <div style={{width:"75vw"}}>
            { raid.length > 0 ? (
                <PlayersInRaid raid={raid} onDelete={deletePlayer}/>
                ) : (
                    'No Players in Raid'
                )}
            </div>
            <RaidAssemblerContainer>
                <SpecButtons specs={SpecList} onClick={addPlayer}></SpecButtons>
            
            </RaidAssemblerContainer>
 
                        
        </Container>
        </>

    )
}

  
export default RaidAssembler