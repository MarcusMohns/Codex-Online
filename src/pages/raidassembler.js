import { Container } from '../components/styles/Container.styled';
import Header from '../components/Header';
import {RaidAssemblerContainer} from '../components/styles/RaidAssemblerContainer.styled'; 
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';
import PlayersInRaid from '../components/PlayersInRaid';

function onClick(specText) {
    console.log(specText)
}


const RaidAssembler = () => {
    return (
        <>
        <Header title='Raid Assembler'/>
        <Container style={{	flexDirection: "row" , maxWidth:"90vw"}}>
            <div style={{width:"75vw"}}>
            <PlayersInRaid />
            </div>
            <RaidAssemblerContainer>
                <SpecButtons specs={SpecList} onClick={onClick}></SpecButtons>
            
            </RaidAssemblerContainer>
 
                        
        </Container>
        </>

    )
}

  
export default RaidAssembler