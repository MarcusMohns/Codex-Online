import BuffCategory from "./BuffCategory"

const BuffCategories = ({AllBuffs, currentBuffs}) => {
    return (
        <div>
        {AllBuffs.map((buff)=> (
        <BuffCategory 
        key={buff.name} 
        text={buff.name} 
        image={buff.image}/>
))} 
</div>
    )
}

export default BuffCategories
