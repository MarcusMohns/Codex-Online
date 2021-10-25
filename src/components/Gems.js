import React from 'react'
import { GemFinder } from './styles/GemFinder.styled'
const Gems = ({gems}) => {
    return (
        <GemFinder>
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
            
            <tr key={gem.name}>
                <td>{gem.name}</td>
                <td>{gem.color}</td>
                <td>{gem.quality}</td>
                <td>{gem.stats}</td>
            </tr>
            ))}
        </tbody>
        </table>
        </GemFinder>
            
    )
}

export default Gems
