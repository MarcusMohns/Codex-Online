import Checkbox from "./Checkbox"

const Checkboxes = ({filters}) => {
    return (
        <ul>
            <li>
            {filters.map((filter) => (
                <Checkbox 
                text={filter} />
            ))}
            </li>
        </ul>
    )
}

export default Checkboxes
