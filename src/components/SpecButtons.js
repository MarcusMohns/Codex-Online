// rafce
import SpecButton from "./SpecButton"


const SpecButtons = ({specs}) => {
   
    const onClick = () => {
        console.log("hey")
    }

    return (
        <>
          {specs.map((spec) => (
              <SpecButton 
              key={spec.id} 
              text={spec.text} 
              image={spec.image} 
              onClick={onClick}
              color={spec.color} />
          ))}  
        </>
    )
}

export default SpecButtons