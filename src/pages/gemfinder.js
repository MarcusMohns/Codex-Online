import { Container } from "../components/styles/Container.styled"
import { useState } from "react"


const gemfinder = () => {

    const [gems,setGems] = useState([
        {name: "Bold Cardinal Ruby",
        color: "red",
        quality: "epic",
        stats: "strength",
        },
        {name: "Quick King's Amber",
        color: "yellow",
        quality: "epic",
        stats: "haste",
        },
        {name: "Solid Stormjewel",
        color: "blue",
        quality: "epic",
        stats: "stamina",
        },
        
    ])

    return (
    <Container>
        <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Color</th>
                <th>Quality</th>
                <th>Stat</th>
            </tr>
        </thead>
        <tbody>
            {gems.map((gem) => (
            <tr>
                <td>{gem.name}</td>
                <td>{gem.color}</td>
                <td>{gem.quality}</td>
                <td>{gem.stats}</td>
            </tr>
            ))}
        </tbody>
        </table>
            
    </Container> 
    )
}

export default gemfinder
