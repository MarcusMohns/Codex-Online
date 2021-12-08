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
        text: "The Death Knight blows the Horn of Winter, which generates 10 runic power and increases total Strength and Agility of all party or raid members within 30 yards by 155. Lasts 2 min.",
      },
      {
        category: "Attack Power %",
        name: "Abomination's Might",
        image: require("./images/Aboms_Might.png").default,
        text: "Increases the attack power by 10% of party and raid members whitin 100 yards. Also Increases your total Strength by 2%",
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
        text: "The Death Knight blows the Horn of Winter, which generates 10 runic power and increases total Strength and Agility of all party or raid members within 30 yards by 155. Lasts 2 min.",
      },
      {
        category: "Spell Damage %",
        name: "Ebon Plaguebringer",
        image: require("./images/Ebon_Plaguebringer.png").default,
        text: "Your Crypt Fever morphs into Ebon Plague, which increases magic damage taken by 13% in addition to increasing disease damage taken. Improves your critical strike chance with weapons and spells by 3% at all times.",
      },
      {
        category: "Disease Damage",
        name: "Crypt Fever",
        image: require("./images/dk_unholy.png").default,
        text: "Your diseases also cause Crypt Fever, which increases disease damage taken by the target by 30%.",
      },
    ],
    utility: [
      {
        name: "Death Grip",
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
        text: "The Death Knight blows the Horn of Winter, which generates 10 runic power and increases total Strength and Agility of all party or raid members within 30 yards by 155. Lasts 2 min.",
      },
      {
        category: "Melee Haste",
        name: "Improved Icy Talons",
        image: require("./images/Icy_Talons.png").default,
        text: "Increases the melee haste of all party and raid members within 100 yds by 20% and your haste by an additional 5%.",
      },
    ],
    utility: [
      {
        name: "Death Grip",
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
        text: "Your Moonkin Aura also causes affected targets to gain 3% haste and you to gain 30% of your spirit as additional spell damage.",
      },
      {
        category: "Spell Crit",
        name: "Moonkin Form",
        image: require("./images/Moonkin_Aura.png").default,
        text: "Shapeshift into Moonkin Form. While in this form the armor contribution from items is increased by 370%, damage taken while stunned is reduced by 15%, and all party and raid members within 100 yards have their spell critical chance increased by 5%. Single target spell critical strikes in this form have a chance to instantly regenerate 2% of your total mana. The Moonkin can not cast healing or resurrection spells while shapeshifted.",
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: require("./images/Mark_Of_The_Wild.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Damage %",
        name: "Earth and Moon",
        image: require("./images/Ebon_Plaguebringer.png").default,
        text: "Your Wrath and Starfire spells have a 100% chance to apply the Earth and Moon effect, which increases spell damage taken by 13% for 12 sec. Also increases your spell damage by 6%.",
      },
      {
        category: "Spell Hit",
        name: "Improved Faerie Fire",
        image: require("./images/Faerie_Fire.png").default,
        text: "Your Faerie Fire spell also increases the chance the target will be hit by spell attacks by 3%, and increases the critical strike chance of your damage spells by 3% on targets afflicted by Faerie Fire.",
      },
    ],
    utility: ["Rebirth", "Innervate"],
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
        text: "Your Moonkin Aura also causes affected targets to gain 3% haste and you to gain 30% of your spirit as additional spell damage.",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Faerie Fire",
        image: require("./images/Faerie_Fire.png").default,
        text: "Shapeshift into Moonkin Form. While in this form the armor contribution from items is increased by 370%, damage taken while stunned is reduced by 15%, and all party and raid members within 100 yards have their spell critical chance increased by 5%. Single target spell critical strikes in this form have a chance to instantly regenerate 2% of your total mana. The Moonkin can not cast healing or resurrection spells while shapeshifted.",
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: require("./images/Mark_Of_The_Wild.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Bleed Damage",
        name: "Mangle - Feral Druid",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Healing Recieved %",
        name: "Tree of Life",
        image: require("./images/Improved_Tree_Form.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Misdirection",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Misdirection",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Misdirection",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
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
        category: "Spell Crit",
        name: "Improved Scorch",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
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
        category: "Spell Crit",
        name: "Improved Scorch",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Replenishment",
        name: "Enduring Winter",
        image: require("./images/Replenishment.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: require("./images/Intellect.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
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
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
    ],
  },
  {
    text: "Protection Paladin",
    image: require("./images/paladin_protection.png").default,
    color: "pink",
    buffs: [
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Damage Reduction %",
        name: "Blessing of Sanctuary",
        image: require("./images/Greater_Blessing_Of_Sanctuary.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Healing Recieved %",
        name: "Improved Devotion Aura",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
    ],
  },
  {
    text: "Retribution Paladin",
    image: require("./images/paladin_retribution.png").default,
    color: "pink",
    buffs: [
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: require("./images/Greater_Blessing_Of_Wisdom.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: require("./images/Greater_Blessing_Of_Kings.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Damage %",
        name: "Sanctified Retribution",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Replenishment",
        name: "Judgements of the Wise",
        image: require("./images/Replenishment.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Haste %",
        name: "Swift Retribution",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Renewed Hope",
        name: "Damage Reduction %",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spirit",
        name: "Divine Spirit ",
        image: require("./images/Prayer_of_Spirit.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spirit",
        name: "Divine Spirit ",
        image: require("./images/Prayer_of_Spirit.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Replenishment",
        name: "Vampiric Touch",
        image: require("./images/Replenishment.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Word_Fortitude.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Crit Strike %",
        name: "Master Poisoner",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Phys Vulnerability",
        name: "Savage Combat",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
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
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Crit",
        name: "Elemental Oath",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spellpower (Major)",
        name: "Totem of Wrath",
        image: require("./images/Totem_Of_Wrath.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Crit Strike %",
        name: "Totem of Wrath",
        image: require("./images/Totem_Of_Wrath.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spellpower (Minor)",
        name: "Flametongue Totem",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Wind Shear",
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
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Attack Power %",
        name: "Unleashed Rage",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spellpower (Minor)",
        name: "Flametongue Weapon",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Melee Haste",
        name: "Improved Windfury Totem ",
        image: require("./images/Windfury.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Wind Shear",
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
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: require("./images/Strength_Of_Earth_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: require("./images/Bloodlust.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: require("./images/Mana_Spring_Totem.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spellpower (Minor)",
        name: "Flametongue Totem",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor %",
        name: "Ancestral Healing",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Wind Shear",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Phys Vulnerability",
        name: "Blood Frenzy",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Bleed Damage",
        name: "Trauma",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Pummel",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Melee Crit",
        name: "Rampage",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Pummel",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [
      {
        name: "Pummel",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Vigilance",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spirit",
        name: "Fel Intelligence",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Crit",
        name: "Improved Shadow Bolt",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [],
  },
  {
    text: "Demonology Warlock",
    image: require("./images/warlock_demonology.png").default,
    color: "purple",
    buffs: [
      {
        category: "Spellpower",
        name: "Demonic Pact",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Crit",
        name: "Improved Shadow Bolt",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
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
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/dk_unholy.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
      {
        category: "Replenishment",
        name: "Improved Soul Leech",
        image: require("./images/Replenishment.png").default,
        text: "'Increases the friendly target's armor by 750, all attributes by 37 and all resistances by 54 for 30 min.'",
      },
    ],
    utility: [],
  },
];

export default SpecArray;
