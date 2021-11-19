import BuffCategory from "./BuffCategory"

const BuffCategories = ({AllBuffs, currentBuffs}) => {
    return (
        <div>
        {AllBuffs.map((buff)=> (
        <BuffCategory 
        key={buff.category}
        id={buff.category} 
        text={buff.category} 
        image={buff.image}
        currentBuffs = {currentBuffs}/>
))} 
        </div>
    )
}

export default BuffCategories