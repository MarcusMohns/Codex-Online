const SpecArray = [
  {
    text: "Blood Death Knight",
    image: require("./images/dk_blood.png").default,
    color: "red",
    buffs: [
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: require("./images/Horn_Of_Winter.png").default,
      },
      {
        category: "Attack Power %",
        name: "Abomination's Might",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hysteria",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Unholy Death Knight",
    image: require("./images/dk_unholy.png").default,
    color: "red",
    buffs: [
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: require("./images/Horn_Of_Winter.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Ebon Plaguebringer",
        image: require("./images/Ebon_Plaguebringer.png").default,
      },
      {
        category: "Disease Damage",
        name: "Crypt Fever",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Frost Death Knight",
    image: require("./images/dk_frost.png").default,
    color: "red",
    buffs: [
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: require("./images/Horn_Of_Winter.png").default,
      },
      {
        category: "Melee Haste",
        name: "Improved Icy Talons",
        image: require("./images/Icy_Talons.png").default,
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Balance Druid",
    image: require("./images/druid_balance.png").default,
    color: "orange",
    buffs: [
      {
        category: "Haste %",
        name: "Improved Moonkin Form",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Crit %",
        name: "Moonkin Form",
        image: require("./images/Moonkin_Aura.png").default,
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: require("./images/Mark_Of_The_Wild.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Earth and Moon",
        image: require("./images/Ebon_Plaguebringer.png").default,
      },
      {
        category: "Spell Hit",
        name: "Improved Faerie Fire",
        image: require("./images/Faerie_Fire.png").default,
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Typhoon",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Feral Druid",
    image: require("./images/druid_feral.png").default,
    color: "orange",
    buffs: [
      {
        category: "Melee Crit",
        name: "Leader of the Pack",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Improved Leader of the Pack",
        name: "Improved Leader of the Pack",
        image: require("./images/dk_unholy.png").default,
      },

      {
        category: "Armor Reduction (Minor)",
        name: "Faerie Fire",
        image: require("./images/Faerie_Fire.png").default,
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: require("./images/Mark_Of_The_Wild.png").default,
      },
      {
        category: "Bleed Damage",
        name: "Mangle",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Restoration Druid",
    image: require("./images/druid_restoration.png").default,
    color: "orange",
    buffs: [
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: require("./images/Mark_Of_The_Wild.png").default,
      },
      {
        category: "Healing Recieved %",
        name: "Tree of Life",
        image: require("./images/Improved_Tree_Form.png").default,
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Beast Mastery Hunter",
    image: require("./images/hunter_beastmastery.png").default,
    color: "green",
    buffs: [
      {
        category: "Damage %",
        name: "Ferocious Inspiration",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Marksman Hunter",
    image: require("./images/hunter_marksman.png").default,
    color: "green",
    buffs: [
      {
        category: "Attack Power %",
        name: "Trueshot Aura",
        image: require("./images/Trueshot_Aura.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Survival Hunter",
    image: require("./images/hunter_survival.png").default,
    color: "green",
    buffs: [
      {
        category: "Replenishment",
        name: "Hunting Party",
        image: require("./images/Replenishment.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Wyvern Sting",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Arcane Mage",
    image: require("./images/mage_arcane.png").default,
    color: "teal",
    buffs: [
      {
        category: "Damage %",
        name: "Arcane Empowerment",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Fire Mage",
    image: require("./images/mage_fire.png").default,
    color: "teal",
    buffs: [
      {
        category: "Spell Crit Taken",
        name: "Improved Scorch",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Frost Mage",
    image: require("./images/mage_frost.png").default,
    color: "teal",
    buffs: [
      {
        category: "Spell Crit Taken",
        name: "Winter's Chill",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Replenishment",
        name: "Enduring Winter",
        image: require("./images/Replenishment.png").default,
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },

  {
    text: "Holy Paladin",
    image: require("./images/paladin_holy.png").default,
    color: "pink",
    buffs: [
      {
        category: "Armor",
        name: "Devotion Aura",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Protection Paladin",
    image: require("./images/paladin_protection.png").default,
    color: "pink",
    buffs: [
      {
        category: "Armor",
        name: "Devotion Aura",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Damage Reduction %",
        name: "Blessing of Sanctuary",
        image: require("./images/Greater_Blessing_Of_Sanctuary.png").default,
      },
      {
        category: "Healing Recieved %",
        name: "Improved Devotion Aura",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Retribution Paladin",
    image: require("./images/paladin_retribution.png").default,
    color: "pink",
    buffs: [
      {
        category: "Armor",
        name: "Devotion Aura",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Damage %",
        name: "Sanctified Retribution",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Replenishment",
        name: "Judgements of the Wise",
        image: require("./images/Replenishment.png").default,
      },
      {
        category: "Haste %",
        name: "Swift Retribution",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Discipline Priest",
    image: require("./images/priest_discipline.png").default,
    color: "white",
    buffs: [
      {
        category: "Armor %",
        name: "Inspiration",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Renewed Hope",
        name: "Damage Reduction %",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spirit",
        name: "Divine Spirit ",
        image: require("./images/Prayer_of_Spirit.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Pain Suppression",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Holy Priest",
    image: require("./images/priest_holy.png").default,
    color: "white",
    buffs: [
      {
        category: "Armor %",
        name: "Inspiration",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spirit",
        name: "Divine Spirit ",
        image: require("./images/Prayer_of_Spirit.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Shadow Priest",
    image: require("./images/priest_shadow.png").default,
    color: "white",
    buffs: [
      {
        category: "Spell Hit",
        name: "Misery ",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Replenishment",
        name: "Vampiric Touch",
        image: require("./images/Replenishment.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Assassination Rogue",
    image: require("./images/rogue_assassination.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Crit Strike %",
        name: "Master Poisoner",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Combat Rogue",
    image: require("./images/rogue_combat.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Phys Vulnerability",
        name: "Savage Combat",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Subtlety Rogue",
    image: require("./images/rogue_subtlety.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Phys Vulnerability",
        name: "Savage Combat",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },

  {
    text: "Elemental Shaman",
    image: require("./images/shaman_elemental.png").default,
    color: "blue",
    buffs: [
      {
        category: "Armor",
        name: "Stoneskin Totem",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
      },
      {
        category: "Spell Crit %",
        name: "Elemental Oath",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
      },
      {
        category: "Spell Power",
        name: "Totem of Wrath",
        image: require("./images/Totem_Of_Wrath.png").default,
      },
      {
        category: "Crit Strike %",
        name: "Totem of Wrath",
        image: require("./images/Totem_Of_Wrath.png").default,
      },
      {
        category: "Spell Power",
        name: "Flametongue Totem",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Melee Haste",
        name: "Windfury Totem ",
        image: require("./images/Windfury.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Enhancement Shaman",
    image: require("./images/shaman_enhancement.png").default,
    color: "blue",
    buffs: [
      {
        category: "Armor",
        name: "Stoneskin Totem",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
      },
      {
        category: "Attack Power %",
        name: "Unleashed Rage",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
      },
      {
        category: "Spell Power",
        name: "Flametongue Weapon",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Melee Haste",
        name: "Improved Windfury Totem ",
        image: require("./images/Windfury.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Restoration Shaman",
    image: require("./images/shaman_restoration.png").default,
    color: "blue",
    buffs: [
      {
        category: "Armor",
        name: "Stoneskin Totem",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
      },
      {
        category: "Spell Power",
        name: "Flametongue Totem",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
      },
      {
        category: "Armor %",
        name: "Ancestral Healing",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Melee Haste",
        name: "Windfury Totem ",
        image: require("./images/Windfury.png").default,
      },
    ],
    utility: [
      {
        name: "Remove Curse",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Disease",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Mana Tide Totem",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Arms Warrior",
    image: require("./images/warrior_arms.png").default,
    color: "brown",
    buffs: [
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Phys Vulnerability",
        name: "Blood Frenzy",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Bleed Damage",
        name: "Trauma",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Fury Warrior",
    image: require("./images/warrior_fury.png").default,
    color: "brown",
    buffs: [
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Melee Crit",
        name: "Rampage",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },

  {
    text: "Protection Warrior",
    image: require("./images/warrior_protection.png").default,
    color: "brown",
    buffs: [
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Vigilance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Affliction Warlock",
    image: require("./images/warlock_affliction.png").default,
    color: "purple",
    buffs: [
      {
        category: "Intellect",
        name: "Fel Intelligence",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spirit",
        name: "Fel Intelligence",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [
      {
        name: "Felhunter's Devour Magic",
        image: require("./images/Aboms_Might.png").default,
      },
    ],
  },
  {
    text: "Demonology Warlock",
    image: require("./images/warlock_demonology.png").default,
    color: "purple",
    buffs: [
      {
        category: "Spell Power",
        name: "Demonic Pact",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: require("./images/dk_unholy.png").default,
      },
    ],
    utility: [],
  },
  {
    text: "Destruction Warlock",
    image: require("./images/warlock_destruction.png").default,
    color: "purple",
    buffs: [
      {
        category: "Health",
        name: "Improved Imp",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
      },
      {
        category: "Replenishment",
        name: "Improved Soul Leech",
        image: require("./images/Replenishment.png").default,
      },
    ],
    utility: [],
  },
];

export default SpecArray;
