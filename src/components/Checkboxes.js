import Checkbox from "./Checkbox"

const Checkboxes = ({filters}) => {
    return (
        <div>
        {filters.map((item) => {
               return (
                <ul key={item.name}>
                {item.name}    
                {item.content.map((c,i) =>   
                    <Checkbox key={i} text={c}/>
                    )}
                </ul>
 
            )
        })}
        </div>
    
    
    
    
)}

export default Checkboxes
               
