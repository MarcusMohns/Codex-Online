import { Container } from "../components/styles/Container.styled"
import { useState } from "react"
import Gems from "../components/Gems"
import gemArray from "../Gems.json"
import Checkboxes from "../components/Checkboxes"
import Filters from "../Filters"



const gemfinder = () => {
    const [gems,setGems] = useState(gemArray)
        
    return (
    <Container style={{flexDirection:"row"}}>
        <Checkboxes filters={Filters} />
        <Gems gems={gems}/>
    </Container> 
    )
}

export default gemfinder
