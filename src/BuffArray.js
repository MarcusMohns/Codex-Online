const BuffArray = [
  {
    name: "Agility and Strength",
    source: ["Death Knights", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases Strength and Agility by 155.",
  },
  {
    name: "Armor %",
    source: ["Disc Priest", "Holy Priest", "Restoration Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "Reduces the friendly targets physical damage taken by 10% for 15 seconds after being scored by a critical heal.",
  },
  {
    name: "Armor",
    source: ["Shamans", "Paladins"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Increases armor by x</div>,
      <div>Devotion Aura:1205</div>,
      <div>Improved Devotion Aura:1807</div>,
      <div>Stoneskin Totem: 1150 </div>,
      <div>Improved Stoneskin Totem: 1380</div>,
    ],
  },
  {
    name: "Armor Reduction (Major)",
    source: ["Rogues", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: "Decrease the armor of the target by 20%.",
  },

  {
    name: "Armor Reduction (Minor)",
    source: ["Feral Druid", "Warlocks"],
    image: require("./images/dk_unholy.png").default,
    text: "Decrease the armor of the target by 5%.",
  },

  {
    name: "Attack Power %",
    source: ["Marksman Hunter", "Enhancement Shaman", "Blood Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases Attack Power by 10%.",
  },
  {
    name: "Attack Power",
    source: ["Paladins", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Increases Attack Power by x</div>,
      <div>Battle Shout:548</div>,
      <div>Improved Battle Shout:695</div>,
      <div>Blessing of Might: 550</div>,
      <div>Improved Blessing of Might:687</div>,
    ],
  },
  {
    name: "Bloodlust/Heroism",
    source: ["Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: "Melee, ranged, and spell casting speed increased by 30%.",
  },
  {
    name: "Bleed Damage",
    source: ["Arms Warrior", "Feral Druid"],
    image: require("./images/dk_unholy.png").default,
    text: "All bleed effects cause 30% additional damage.",
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
    text: "Increases the critical strike chance by 3%.",
  },
  {
    name: "Damage %",
    source: ["Beast Mastery Hunter", "Retribution Paladin", "Arcane Mage"],
    image: require("./images/dk_unholy.png").default,
    text: "All damage caused by friendly targets is increased by 3%.",
  },
  {
    name: "Damage Reduction %",
    source: ["Discipline Priest", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "Reducing damage taken from all sources by 3%.",
  },

  {
    name: "Disease Damage",
    source: ["Unholy Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases disease damage taken by the target by 30%.",
  },

  {
    name: "Haste %",
    source: ["Balance Druid", "Retribution Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases casting, ranged and melee attacks speeds by 3%.",
  },

  {
    name: "Healing Recieved %",
    source: ["Restoration Druid", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases healing recieved by 6% for all party and raid members.",
  },
  {
    name: "Health",
    source: ["Destruction Warlock", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Commanding Shout: Maximum health increased by 2255.</div>,
      <div>Improved Commanding Shout: Maximum health increased by 2818.</div>,
      <div>Blood Pact: Totem: Maximum health increased by 1330.</div>,
      <div>Improved Blood Pact: Totem: Maximum health increased by 1729.</div>,
    ],
  },
  {
    name: "Intellect",
    source: ["Affliction Warlock", "Mages"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Arcane Intellect: Increases Intellect by 60.</div>,
      <div>Fel Intelligence: Increases Intellect by 48.</div>,
    ],
  },
  {
    name: "Mana per 5",
    source: ["Paladins", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Restores x mana every 5 seconds</div>,
      <div>Blessing of Wisdom: 92</div>,
      <div>Improved Blessing of Wisdom 110</div>,
      <div>Mana Spring Totem:91</div>,
      <div>Improved Mana Spring Totem:109</div>,
    ],
  },
  {
    name: "Melee Crit",
    source: ["Feral Druid", "Fury Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases ranged and melee critical chance by 5%.",
  },

  {
    name: "Melee Haste",
    source: ["Enhancement Shamans", "Frost Death Knights"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>
        Windfury Totem: Increases the melee haste of all raid members by 16%.
      </div>,
      <div>
        Improved Windfury Totem: Increases the melee haste of all raid members
        by 20%.
      </div>,
      <div>
        Improved Icy Talons: Increases the melee haste of all raid members by
        20%.
      </div>,
    ],
  },
  {
    name: "Mark of the Wild",
    source: ["Druids"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>
        Motw: Increases armor by 750, all attributes by 36 and all resistances
        by 54.
      </div>,
      <div>
        Improved Motw: Increases armor by 1050, all attributes by 51 and all
        resistances by 75.
      </div>,
    ],
  },
  {
    name: "Phys Vulnerability",
    source: ["Combat Rogue", "Arms Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases all physical damage caused to that target by 4%.",
  },
  {
    name: "Improved Leader of the Pack",
    source: ["Feral Druid"],
    image: require("./images/dk_unholy.png").default,
    text: "Leader of the pack also causes affected targets to heal themselves for 4% of their total health and 8% of their total mana when they deal a melee or ranged critical strike.",
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
    text: "Increases the mana regeneration equal to 3% of maximum mana per 5 sec for 15 seconds.",
  },
  {
    name: "Spell Crit Bonus",
    source: ["Balance Druid", "Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: "Raid members recieve a 5% bonus to their spell critical strike chance.",
  },
  {
    name: "Spell Crit Taken",
    source: [
      "Fire Mage",
      "Frost Mage",
      "Affliction Warlock",
      "Demonology Warlock",
    ],
    image: require("./images/dk_unholy.png").default,
    text: "Increases the chance spells will critically hit the target by 5%",
  },
  {
    name: "Spell Damage %",
    source: ["Balance Druid", "Warlocks", "Unholy Death Knights"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases spell damage taken by 13%.",
  },
  {
    name: "Spell Haste",
    source: ["Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: "Provides 5% spell haste",
  },
  {
    name: "Spell Hit",
    source: ["Balance Druid", "Shadow Priest"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases the chance the target will be hit by spell attacks by 3%.",
  },

  {
    name: "Spellpower",
    source: ["Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Totem of Wrath: Increases Spell Power by 280.</div>,
      <div>Flametongue Totem: Increases Spell Power by 144.</div>,
    ],
  },

  {
    name: "Spirit",
    source: ["Priests", "Warlocks"],
    image: require("./images/dk_unholy.png").default,
    text: [
      <div>Divine Spirit: Increases Spirit by 80.</div>,
      <div>Fel Intelligence: Increases Spirit by 64</div>,
    ],
  },
  {
    name: "Demonic Pact",
    source: ["Demonology Warlock"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases the raids spell power by 10% of Warlocks Spell Damage for 45sec",
  },

  {
    name: "Stamina",
    source: ["Priests"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases Stamina by 165.",
  },
  {
    name: "Stats 10%",
    source: ["Paladins"],
    image: require("./images/dk_unholy.png").default,
    text: "Increases stats by 10%.",
  },
];

export default BuffArray;
