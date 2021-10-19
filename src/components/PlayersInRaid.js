const SpecList = [
    {
      text:'Blood Death Knight',
      color:'red',
      buffs:["Agility and Strength", "Attack Power %"]
    },
    {    
  
      text:'Unholy Death Knight',
      color:'red',
      buffs:["Agility and Strength", "Spell Damage %","Disease Damage"]
    }]


const PlayersInRaid = () => {
    return (
        <>
          {SpecList.map((player)=> (
  
            <h3 key={player.text}>{player.text}</h3>
            
          ))}  
        </>
    
    )
}

export default PlayersInRaid
