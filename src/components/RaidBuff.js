const RaidBuff = ({text}) => {
    let allBuffs = ""
    
    for (const [key, value] of Object.entries(text)) {
        if (key!=="id") {
            allBuffs += value + ",";
        }
    }
        return (
        <div>
            {allBuffs}
        </div>
    )
}

export default RaidBuff
