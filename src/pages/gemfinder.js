import { Container } from "../components/styles/Container.styled"
import { useState } from "react"
import Gems from "../components/Gems"


const gemfinder = () => {

    const [gems,setGems] = useState([
        {name: "Bold Cardinal Ruby",
        color: "Red",
        quality: "Epic",
        stats: "20 Strength",
        },
        {name: "Quick King's Amber",
        color: "Yellow",
        quality: "Epic",
        stats: "20 Haste",
        },
        {name: "Solid Stormjewel",
        color: "Blue",
        quality: "Epic",
        stats: "20 Stamina",
        },
        
    ])

    return (
    <Container style={{flexDirection:"row"}}>
        <Gems gems={gems}/>
    </Container> 
    )
}

export default gemfinder
