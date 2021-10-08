import SpecButton from "./SpecButton"

const Header = ({title}) => {
    const onClick =  () => {
        console.log(specs)
    }
    
    
    return (
        <header>
            <h1>{title}</h1>
            <SpecButton text= 'hey' image='whatever' onClick={onClick} /> 
        </header>
    )
}

export default Header
