const SpecList = [
    {
      text:'Blood Death Knight',
      image:require('./images/dk_blood.png').default,
      color:'red',
      buffs:["Agility and Strength", "Attack Power %"]
    },
    {    
  
      text:'Unholy Death Knight',
      image:require('./images/dk_unholy.png').default,
      color:'red',
      buffs:["Agility and Strength", "Spell Damage %","Disease Damage"]
    },
    {
  
      text:'Frost Death Knight',
      image:require('./images/dk_frost.png').default,
      color:'red',
      buffs:["Agility and Strength", "Melee Haste"],
    },
    {    
  
      text:'Balance Druid',
      image:require('./images/druid_balance.png').default,
      color:'orange',
      buffs:["Haste %", "Spell Crit", "Motw", "Spell Damage %", "Spell Hit"],
    },
    {    
  
      text:'Feral Druid',
      image:require('./images/druid_feral.png').default,
      color:'orange',
      buffs:["Melee Crit", "Motw","Armor Reduction(Minor)"],
    },
    {    
  
      text:'Restoration Druid',
      image:require('./images/druid_restoration.png').default,
      color:'orange',
      buffs:["Healing Received %", "Motw"]
    },
    {
  
      text:'Beast Mastery Hunter',
      image:require('./images/hunter_beastmastery.png').default,
      color:'green',
      buffs:["Damage %" ,"Armor Reduction(Minor)"],
    },
    {
  
      text:'Marksman Hunter',
      image:require('./images/hunter_marksman.png').default,
      color:'green',
      buffs:["Attack Power %", "Armor Reduction(Minor)"],
    },
    {
  
      text:'Survival Hunter',
      image:require('./images/hunter_survival.png').default,
      color:'green',
      buffs:["Replenishment", "Armor Reduction(Minor)"],
    },
    {    
  
      text:'Arcane Mage',
      image:require('./images/mage_arcane.png').default,
      color:'teal',
      buffs:["Damage %", "Intellect"],
    },
    {
  
      text:'Fire Mage',
      image:require('./images/mage_fire.png').default,
      color:'teal',
      buffs:["Intellect", "Spell Crit"],
    },
    {    
  
      text:'Frost Mage',
      image:require('./images/mage_frost.png').default,
      color:'teal',
      buffs:["Intellect","Replenishment" ,"Spell Crit"],
    },
    {
  
      text:'Holy Paladin',
      image:require('./images/paladin_holy.png').default,
      color:'pink',
      buffs:["Attack Power", "Mana per 5", "Stats 10%"],
    },
    {
  
      text:'Protection Paladin',
      image:require('./images/paladin_protection.png').default,
      color:'pink',
      buffs:["Attack Power", "Damage Reduction %", "Healing Received %","Mana per 5", "Stats 10%" ,"Crit Strike %"],
    },
    {
  
      text:'Retribution Paladin',
      image:require('./images/paladin_retribution.png').default,
      color:'pink',
      buffs:["Attack Power", "Damage %" ,"Haste %" ,"Mana per 5" ,"Replenishment", "Stats 10%", "Crit Strike %"],
    },
    {
  
      text:'Discipline Priest',
      image:require('./images/priest_discipline.png').default,
      color:'gray',
      buffs:["Armor %","Damage Reduction %","Spirit","Stamina"],
    },
    {
  
      text:'Holy Priest',
      image:require('./images/priest_holy.png').default,
      color:'gray',
      buffs:["Spirit","Stamina","Armor %"],
    },
    {
  
      text:'Shadow Priest',
      image:require('./images/priest_shadow.png').default,
      color:'gray',
      buffs:["Replenishment", "Spirit", "Stamina","Spell Hit"],
    },
    {
  
      text:'Assassination Rogue',
      image:require('./images/rogue_assassination.png').default,
      color:'yellow',
      buffs:["Armor Reduction(Major)","Crit Strike %"],
    },
    {
  
      text:'Combat Rogue',
      image:require('./images/rogue_combat.png').default,
      color:'yellow',
      buffs:["Armor Reduction(Major)", "Phys Vulnerability"],
    },
    {
  
      text:'Subtlety Rogue',
      image:require('./images/rogue_subtlety.png').default,
      color:'yellow',
      buffs:["Armor Reduction(Major)"],
    },
  
    {
  
      text:'Elemental Shaman',
      image:require('./images/shaman_elemental.png').default,
      color:'blue',
      buffs:["Agility and Strength", "Bloodlust", "Mana per 5", "Spell Crit", "Spell Haste", "Spellpower(Major)", "Crit Strike %","Spellpower(Minor)"],
    },
    {
  
      text:'Enhancement Shaman',
      image:require('./images/shaman_enhancement.png').default,
      color:'blue',
      buffs:["Agility and Strength", "Attack Power %", "Bloodlust", "Mana per 5", "Melee Haste", "Spellpower(Minor)"],
    },
    {
  
      text:'Restoration Shaman',
      image:require('./images/shaman_restoration.png').default,
      color:'blue',
      buffs:["Agility and Strength", "Armor %" ,"Bloodlust", "Mana per 5" ,"Spellpower(Minor)"],
    },
    {
  
      text:'Arms Warrior',
      image:require('./images/warrior_arms.png').default,
      color:'brown',
      buffs:["Attack Power","Health","Armor Reduction(Major)","Phys Vulnerability"],
    },
    {
  
      text:'Fury Warrior',
      image:require('./images/warrior_fury.png').default,
      color:'brown',
      buffs:["Attack Power", "Health", "Melee Crit", "Armor Reduction(Major)"],
    },
    {
  
      text:'Protection Warrior',
      image:require('./images/warrior_protection.png').default,
      color:'brown',
      buffs:["Attack Power", "Armor Reduction(Major)", "Health"],
    },
    {
  
      text:'Affliction Warlock',
      image:require('./images/warlock_affliction.png').default,
      color:'purple',
      buffs:["Intellect", "Spirit", "Armor Reduction(Minor)", "Spell Crit", "Spell Damage %"],
    },
    {
  
      text:'Demonology Warlock',
      image:require('./images/warlock_demonology.png').default,
      color:'purple',
      buffs:["Spellpower", "Armor Reduction(Minor)", "Spell Crit", "Spell Damage %"],
    },
    {
   
      text:'Destruction Warlock',
      image:require('./images/warlock_destruction.png').default,
      color:'purple',
      buffs:["Health", "Replenishment", "Armor Reduction(Minor)","Spell Damage %"],
    },
  ]
  
  
  export default SpecList