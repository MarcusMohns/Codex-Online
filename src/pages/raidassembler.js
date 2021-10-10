import {useState} from 'react'
import { Container } from '../components/styles/Container.styled';
import SpecButtons from '../components/SpecButtons'
import SpecList from '../SpecList';

const RaidAssembler = () => {
    const [specs,setSpecs] = useState(SpecList)

    return (
        <Container>
            <SpecButtons specs={specs}></SpecButtons>
        </Container>
    )
}

export default RaidAssembler