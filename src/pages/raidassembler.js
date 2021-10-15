import {useState} from 'react'
import { Container } from '../components/styles/Container.styled';
import {RaidAssemblerContainer} from '../components/styles/RaidAssemblerContainer.styled'; 
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';

const RaidAssembler = () => {
    const [specs,setSpecs] = useState(SpecList)

    return (
        <Container style={{	flexDirection: "row" , maxWidth:"90vw"}}>
            <div style={{width:"75vw"}}>
            Generate the raid composition here
            </div>
            <RaidAssemblerContainer>

                <SpecButtons specs={specs}></SpecButtons>
            
            </RaidAssemblerContainer>
 
                        
        </Container>


    )
}

export default RaidAssembler