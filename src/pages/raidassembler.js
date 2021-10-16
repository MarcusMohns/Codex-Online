import {useState} from 'react'
import { Container } from '../components/styles/Container.styled';
import {RaidAssemblerContainer} from '../components/styles/RaidAssemblerContainer.styled'; 
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';
import PlayerInRaid from '../components/PlayerInRaid'

function onClick(specText) {
    console.log(specText)
}

const RaidAssembler = () => {
    const specs = SpecList

    return (
        <Container style={{	flexDirection: "row" , maxWidth:"90vw"}}>
            <div style={{width:"75vw"}}>
           
            </div>
            <RaidAssemblerContainer>
                <SpecButtons specs={specs} onClick={onClick}></SpecButtons>
            
            </RaidAssemblerContainer>
 
                        
        </Container>


    )
}

export default RaidAssembler