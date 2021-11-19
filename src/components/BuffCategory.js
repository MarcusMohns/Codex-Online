
const BuffCategory = ({text,currentBuffs, id}) => {
    let newBuff = []
    let playerBuffArray = Object.values(currentBuffs)

    for (let buffArray of playerBuffArray) {
        for(let buff of buffArray) {
            if (buff.buffCategory === text) {
                console.log(buff.buffCategory, buff.buffName)
                newBuff.push(<div>{buff.buffName}<img src={buff.buffImg} alt="buff icon"/></div>)
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
