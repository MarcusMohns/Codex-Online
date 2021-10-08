// rafce
import SpecButton from "./SpecButton"


const onClick = () => {
    console.log("hey")
}

const SpecButtons = ({specs}) => {

    return (
        <>
          {specs.map((spec) => (
              <SpecButton key={spec.id} 
              text={spec.text} 
              image={spec.image} 
              onClick={onClick} />
          ))}  
        </>
    )
}

export default SpecButtons