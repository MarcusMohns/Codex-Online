
const SpecButton = ({text, image, onClick}) => {

        
    return (
        <button onClick={onClick}>    
        {text}
        <img src={image}></img>    
        </button>
    )
}

export default SpecButton
