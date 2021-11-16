import BuffCategory from "./BuffCategory"

const BuffCategories = ({AllBuffs}) => {
    return (
        <div>
        {AllBuffs.map((buff)=> (
        <BuffCategory 
        key={buff.name} 
        text={buff.name} 
        image={buff.image}
        buff={buff}/>  
))} 
</div>
    )
}

export default BuffCategories
