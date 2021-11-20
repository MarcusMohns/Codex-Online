
const BuffCategory = ({text,currentBuffs}) => {
    let newBuff = []
    let count= 0;
    let playerBuffArray = Object.values(currentBuffs)
    for (let buffArray of playerBuffArray) {
        // iterate over state
        for(let buff of buffArray) {
            if (buff.buffCategory === text) {
                // if the buff and the category thats being created match 
                newBuff.push(<div className="a-buff" key={count++}>{buff.buffName}<img src={buff.buffImg} alt="buff icon"/></div>)
                // add buff to newBuff
            }
        }  
    }     
    return (
        <div id={text}>
        {text}
        {newBuff}
        </div>
    )
}

export default BuffCategory
