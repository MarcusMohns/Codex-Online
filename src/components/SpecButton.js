
const SpecButton = ({text, image, onClick,color}) => {

        
    return (

        <button className='btn'  onClick={onClick} style={{background:color}}>

        <img src={image} className='btn-image'></img>    
        {" "+text}
        
        </button>

    )
}

export default SpecButton
