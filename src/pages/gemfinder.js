import { Container } from "../components/styles/Container.styled"
import { useState } from "react"
import Gems from "../components/Gems"
import gemArray from "../Gems.json"


const gemfinder = () => {

    const [gems,setGems] = useState(gemArray)
        
    return (
    <Container style={{flexDirection:"row"}}>
        <Gems gems={gems}/>
    </Container> 
    )
}

export default gemfinder
