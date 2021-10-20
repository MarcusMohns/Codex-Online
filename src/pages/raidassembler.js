import { Container } from '../components/styles/Container.styled';
import Header from '../components/Header';
import {RaidAssemblerContainer} from '../components/styles/RaidAssemblerContainer.styled'; 
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';
import PlayersInRaid from '../components/PlayersInRaid';
import {useState} from 'react';

function onClick(specText) {
    console.log(specText.text)
}


const RaidAssembler = () => {
    
const [raid,setRaid] = useState([
    {
      text:'Blood Death Knight',
      color:'red',
      buffs:["Agility and Strength", "Attack Power %"]
    },
    {    
  
      text:'Unholy Death Knight',
      color:'red',
      buffs:["Agility and Strength", "Spell Damage %","Disease Damage"]
    }])

    
    return (
        <>
        <Header title='Raid Assembler'/>
        <Container style={{	flexDirection: "row" , maxWidth:"90vw"}}>
            <div style={{width:"75vw"}}>
            <PlayersInRaid raid={raid}/>
            </div>
            <RaidAssemblerContainer>
                <SpecButtons specs={SpecList} onClick={onClick}></SpecButtons>
            
            </RaidAssemblerContainer>
 
                        
        </Container>
        </>

    )
}

  
export default RaidAssembler