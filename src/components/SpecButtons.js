// rafce
import SpecButton from "./SpecButton"


const SpecButtons = ({specs, onClick}) => {

    return (
        <>
          {specs.map((spec) => (             
              <SpecButton 
              key={spec.text} 
              text={spec.text} 
              image={spec.image} 
              onClick={() => onClick(spec.text)}
              color={spec.color}/>
          ))}
          
        </>
    )
}

export default SpecButtons