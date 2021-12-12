const BuffArray = [
  {
    name: "Agility and Strength",
    source: ["Death Knights", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Armor %",
    source: ["Disc Priest", "Holy Priest", "Restoration Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "Reduces the targets physical damage taken by 10% for 15 seconds after being scored by a critical heal",
  },
  {
    name: "Armor Reduction (Major)",
    source: ["Rogues", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Armor Reduction (Minor)",
    source: ["Feral Druid", "Warlocks"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Attack Power %",
    source: ["Marksman Hunter", "Enhancement Shaman", "Blood Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Attack Power",
    source: ["Paladins", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Bloodlust/Heroism",
    source: ["Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Bleed Damage",
    source: ["Arms Warrior", "Feral Druid"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Crit Strike %",
    source: [
      "Protection Paladin",
      "Retribution Paladin",
      "Assassination Rogue",
      "Elemental Shaman",
    ],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Damage %",
    source: ["Beast Mastery Hunter", "Retribution Paladin", "Arcane Mage"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Damage Reduction %",
    source: ["Discipline Priest", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Disease Damage",
    source: ["Unholy Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Haste %",
    source: ["Balance Druid", "Retribution Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Healing Recieved %",
    source: ["Restoration Druid", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Health",
    source: ["Destruction Warlock", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Intellect",
    source: ["Affliction Warlock", "Mages"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Mana per 5",

    source: ["Paladins", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Melee Crit",

    source: ["Feral Druid", "Fury Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Melee Haste",
    source: ["Enhancement Shamans", ["Frost Death Knights"]],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Mark of the Wild",
    source: ["Druids"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Phys Vulnerability",

    source: ["Combat Rogue", "Arms Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Replenishment",
    source: [
      "Shadow Priest",
      "Survival Hunter",
      "Frost Mage",
      "Retribution Paladin",
      "Destruction Warlock",
    ],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spell Crit",
    source: [
      "Balance Druid",
      "Fire Mage",
      "Frost Mage",
      "Elemental Shaman",
      "Affliction Warlock",
      "Demonology Warlock",
    ],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spell Damage %",
    source: ["Balance Druid", "Warlocks", "Unholy Death Knights"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spell Haste",
    source: ["Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spell Hit",
    source: ["Balance Druid", "Shadow Priest"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spellpower",
    source: ["Demonology Warlock"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spellpower (Major)",
    source: ["Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spellpower (Minor)",
    source: ["Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Spirit",
    source: ["Priests", "Affliction Warlock"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },

  {
    name: "Stamina",
    source: ["Priests"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
  {
    name: "Stats 10%",
    source: ["Paladins"],
    image: require("./images/dk_unholy.png").default,
    text: "255 Strength and Agility",
  },
];

export default BuffArray;
