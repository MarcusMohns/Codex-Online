import COLORS from "../src/components";

const SpecArray = [
  {
    text: "Blood Death Knight",
    image: "images/Blood_Death_Knight.webp",
    color: COLORS.deathKnight,
    role: "tank",
    name: "",
    buffs: [
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: "images/Horn_Of_Winter.png",
      },
      {
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: "images/Icy_Touch.png",
      },
      {
        category: "Attack Power %",
        name: "Abomination's Might",
        image: "images/Aboms_Might.png",
      },
      {
        category: "Melee Haste",
        name: "Improved Icy Talons",
        image: "images/Icy_Talons.png",
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: "images/Death_Grip.png",
      },
      {
        name: "Hysteria",
        image: "images/Hysteria.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Chains of Ice",
        image: "images/Chains_Of_Ice.png",
      },
    ],
  },
  {
    text: "Unholy Death Knight",
    image: "images/Unholy_Death_Knight.webp",
    color: COLORS.deathKnight,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: "images/Icy_Touch.png",
      },
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: "images/Horn_Of_Winter.png",
      },
      {
        category: "Spell Damage %",
        name: "Ebon Plaguebringer",
        image: "images/Ebon_Plaguebringer.png",
      },
      {
        category: "Disease Damage",
        name: "Crypt Fever",
        image: "images/Crypt_Fever.png",
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: "images/Death_Grip.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Chains of Ice",
        image: "images/Chains_Of_Ice.png",
      },
    ],
  },
  {
    text: "Frost Death Knight",
    image: "images/Frost_Death_Knight.webp",
    color: COLORS.deathKnight,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: "images/Icy_Touch.png",
      },
      {
        category: "Agility and Strength",
        name: "Horn of Winter",
        image: "images/Horn_Of_Winter.png",
      },
      {
        category: "Melee Haste",
        name: "Improved Icy Talons",
        image: "images/Icy_Talons.png",
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: "images/Death_Grip.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Chains of Ice",
        image: "images/Chains_Of_Ice.png",
      },
    ],
  },
  {
    text: "Balance Druid",
    image: "images/Balance_Druid.webp",
    color: COLORS.druid,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: "images/Demoralizing_Roar.png",
      },
      {
        category: "Haste %",
        name: "Improved Moonkin Form",
        image: "images/Moonkin_Form.png",
      },
      {
        category: "Spell Crit %",
        name: "Moonkin Form",
        image: "images/Moonkin_Aura.png",
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: "images/Mark_Of_The_Wild.png",
      },
      {
        category: "Spell Damage %",
        name: "Earth and Moon",
        image: "images/Ebon_Plaguebringer.png",
      },
      {
        category: "Spell Hit",
        name: "Improved Faerie Fire",
        image: "images/Faerie_Fire.png",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Improved Faerie Fire",
        image: "images/Faerie_Fire.png",
      },
      {
        category: "Melee Hit Reduction",
        name: "Insect Swarm",
        image: "images/Insect_Swarm.png",
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: "images/Rebirth.png",
      },
      {
        name: "Innervate",
        image: "images/Innervate.png",
      },
      {
        name: "Typhoon",
        image: "images/Typhoon.png",
      },
      {
        name: "Tranquility",
        image: "images/Tranquility.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Cyclone",
        image: "images/Cyclone.png",
      },
    ],
  },
  {
    text: "Feral Druid",
    image: "images/Feral_Druid.webp",
    color: COLORS.druid,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Infected Wounds",
        image: "images/Infected_Wounds.png",
      },
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: "images/Demoralizing_Roar.png",
      },
      {
        category: "Melee Crit",
        name: "Leader of the Pack",
        image: "images/Leader_Of_The_Pack.png",
      },
      {
        category: "Improved Leader of the Pack",
        name: "Improved Leader of the Pack",
        image: "images/Leader_Of_The_Pack.png",
      },

      {
        category: "Armor Reduction (Minor)",
        name: "Faerie Fire",
        image: "images/Faerie_Fire.png",
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: "images/Mark_Of_The_Wild.png",
      },
      {
        category: "Bleed Damage",
        name: "Mangle",
        image: "images/Mangle.png",
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: "images/Rebirth.png",
      },
      {
        name: "Innervate",
        image: "images/Innervate.png",
      },
      {
        name: "Tranquility",
        image: "images/Tranquility.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Cyclone",
        image: "images/Cyclone.png",
      },
    ],
  },
  {
    text: "Restoration Druid",
    image: "images/Restoration_Druid.webp",
    color: COLORS.druid,
    role: "healer",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: "images/Demoralizing_Roar.png",
      },
      {
        category: "Mark of the Wild",
        name: "Mark of the Wild",
        image: "images/Mark_Of_The_Wild.png",
      },
      {
        category: "Healing Recieved %",
        name: "Tree of Life",
        image: "images/Improved_Tree_Form.png",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Faerie Fire",
        image: "images/Faerie_Fire.png",
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: "images/Rebirth.png",
      },
      {
        name: "Innervate",
        image: "images/Innervate.png",
      },
      {
        name: "Tranquility",
        image: "images/Tranquility.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Cyclone",
        image: "images/Cyclone.png",
      },
    ],
  },
  {
    text: "Beast Mastery Hunter",
    image: "images/Beast_Mastery_Hunter.webp",
    color: COLORS.hunter,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Damage %",
        name: "Ferocious Inspiration",
        image: "images/Ferocious_Inspiration.png",
      },

      {
        category: "Nature Resistance",
        name: "Aspect of the Wild",
        image: "images/Aspect_Of_The_Wild.png",
      },
      {
        category: "Melee Hit Reduction",
        name: "Scorpid Sting",
        image: "images/Scorpid_Sting.png",
      },
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: "images/Aimed_Shot.png",
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: "images/Misdirection.png",
      },
      {
        name: "Tranquilizing Shot",
        image: "images/Tranquilizing_Shot.png",
      },
      {
        name: "Frost Trap",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Freezing Trap",
        image: "images/Chains_Of_ice.png",
      },
    ],
  },
  {
    text: "Marksman Hunter",
    image: "images/Marksman_Hunter.webp",
    color: COLORS.hunter,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power %",
        name: "Trueshot Aura",
        image: "images/Trueshot_Aura.png",
      },
      {
        category: "Nature Resistance",
        name: "Aspect of the Wild",
        image: "images/Aspect_Of_The_Wild.png",
      },
      {
        category: "Melee Hit Reduction",
        name: "Scorpid Sting",
        image: "images/Scorpid_Sting.png",
      },
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: "images/Aimed_Shot.png",
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: "images/Misdirection.png",
      },
      {
        name: "Tranquilizing Shot",
        image: "images/Tranquilizing_Shot.png",
      },
      {
        name: "Frost Trap",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Freezing Trap",
        image: "images/Chains_Of_ice.png",
      },
    ],
  },
  {
    text: "Survival Hunter",
    image: "images/Survival_Hunter.webp",
    color: COLORS.hunter,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Replenishment",
        name: "Hunting Party",
        image: "images/Replenishment.png",
      },

      {
        category: "Nature Resistance",
        name: "Aspect of the Wild",
        image: "images/Aspect_Of_The_Wild.png",
      },
      {
        category: "Melee Hit Reduction",
        name: "Scorpid Sting",
        image: "images/Scorpid_Sting.png",
      },
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: "images/Aimed_Shot.png",
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: "images/Misdirection.png",
      },
      {
        name: "Tranquilizing Shot",
        image: "images/Tranquilizing_Shot.png",
      },
      {
        name: "Wyvern Sting",
        image: "images/Wyvern_Sting.png",
      },
      {
        name: "Frost Trap",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Freezing Trap",
        image: "images/Chains_Of_ice.png",
      },
    ],
  },
  {
    text: "Arcane Mage",
    image: "images/Arcane_Mage.webp",
    color: COLORS.mage,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Damage %",
        name: "Arcane Empowerment",
        image: "images/Arcane_Empowerment.png",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: "images/Arcane_Intellect.png",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: "images/Spellsteal.png",
      },
      {
        name: "Focus Magic",
        image: "images/Focus_Magic.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Frost Nova",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Polymorph",
        image: "images/Polymorph.png",
      },
    ],
  },
  {
    text: "Fire Mage",
    image: "images/Fire_Mage.webp",
    color: COLORS.mage,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Spell Crit Taken",
        name: "Improved Scorch",
        image: "images/Improved_Scorch.png",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: "images/Arcane_Intellect.png",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: "images/Spellsteal.png",
      },
      {
        name: "Focus Magic",
        image: "images/Focus_Magic.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Frost Nova",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Polymorph",
        image: "images/Polymorph.png",
      },
    ],
  },
  {
    text: "Frost Mage",
    image: "images/Frost_Mage.webp",
    color: COLORS.mage,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Spell Crit Taken",
        name: "Winter's Chill",
        image: "images/Winters_Chill.png",
      },
      {
        category: "Replenishment",
        name: "Enduring Winter",
        image: "images/Replenishment.png",
      },
      {
        category: "Intellect",
        name: "Arcane Intellect",
        image: "images/Arcane_Intellect.png",
      },
    ],
    utility: [
      {
        name: "Spellsteal",
        image: "images/Spellsteal.png",
      },
      {
        name: "Focus Magic",
        image: "images/Focus_Magic.png",
      },
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Frost Nova",
        image: "images/Frost_Nova.png",
      },
      {
        name: "Polymorph",
        image: "images/Polymorph.png",
      },
    ],
  },

  {
    text: "Holy Paladin",
    image: "images/Holy_Paladin.webp",
    color: COLORS.paladin,
    role: "healer",
    name: "",
    buffs: [
      {
        category: "Devotion Aura",
        name: "Devotion Aura",
        image: "images/Devotion_Aura.png",
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: "images/Greater_Blessing_Of_Might.png",
        checked: true,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: "images/Greater_Blessing_Of_Wisdom.png",
        checked: true,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: "images/Greater_Blessing_Of_Kings.png",
        checked: true,
      },
      {
        category: "Health Restore",
        name: "Judgement of Light",
        image: "images/Judgement_Of_Light.png",
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: "images/Judgement_Of_Wisdom.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Aura",
        image: "images/Fire_Resistance_Aura.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Aura",
        image: "images/Frost_Resistance_Aura.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Resistance Aura",
        image: "images/Shadow_Resistance_Aura.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Divine Sacrifice",
        image: "images/Divine_Sacrifice.png",
      },
      {
        name: "Hand of Sacrifice",
        image: "images/Hand_Of_Sacrifice.png",
      },
      {
        name: "Hand of Protection",
        image: "images/Hand_Of_Protection.png",
      },
      {
        name: "Hand of Freedom",
        image: "images/Hand_Of_Freedom.png",
      },
      {
        name: "Aura Mastery",
        image: "images/Aura_Mastery.png",
      },
      {
        name: "Divine Intervention",
        image: "images/Divine_Intervention.png",
      },
      {
        name: "Hammer of Justice",
        image: "images/Hammer_Of_Justice.png",
      },
    ],
  },
  {
    text: "Protection Paladin",
    image: "images/Protection_Paladin.webp",
    color: COLORS.paladin,
    role: "tank",
    name: "",
    buffs: [
      {
        category: "Devotion Aura",
        name: "Devotion Aura",
        image: "images/Devotion_Aura.png",
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: "images/Greater_Blessing_Of_Might.png",
        checked: true,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: "images/Greater_Blessing_Of_Wisdom.png",
        checked: true,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: "images/Greater_Blessing_Of_Kings.png",
        checked: true,
      },
      {
        category: "Damage Reduction %",
        name: "Blessing of Sanctuary",
        image: "images/Greater_Blessing_Of_Sanctuary.png",
        checked: true,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Sanctuary",
        image: "images/Greater_Blessing_Of_Sanctuary.png",
        checked: true,
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: "images/Heart_Of_The_Crusader.png",
      },
      {
        category: "Healing Recieved %",
        name: "Improved Devotion Aura",
        image: "images/Devotion_Aura.png",
      },
      {
        category: "Health Restore",
        name: "Judgement of Light",
        image: "images/Judgement_Of_Light.png",
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: "images/Judgement_Of_Wisdom.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Aura",
        image: "images/Fire_Resistance_Aura.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Aura",
        image: "images/Frost_Resistance_Aura.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Resistance Aura",
        image: "images/Shadow_Resistance_Aura.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Divine Sacrifice",
        image: "images/Divine_Sacrifice.png",
      },
      {
        name: "Hand of Sacrifice",
        image: "images/Hand_Of_Sacrifice.png",
      },
      {
        name: "Hand of Protection",
        image: "images/Hand_Of_Protection.png",
      },
      {
        name: "Hand of Freedom",
        image: "images/Hand_Of_Freedom.png",
      },
      {
        name: "Aura Mastery",
        image: "images/Aura_Mastery.png",
      },
      {
        name: "Divine Intervention",
        image: "images/Divine_Intervention.png",
      },
      {
        name: "Hammer of Justice",
        image: "images/Hammer_Of_Justice.png",
      },
    ],
  },
  {
    text: "Retribution Paladin",
    image: "images/Retribution_Paladin.webp",
    color: COLORS.paladin,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Devotion Aura",
        name: "Devotion Aura",
        image: "images/Devotion_Aura.png",
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: "images/Greater_Blessing_Of_Might.png",
        checked: true,
      },
      {
        category: "Mana per 5",
        name: "Blessing of Wisdom",
        image: "images/Greater_Blessing_Of_Wisdom.png",
        checked: true,
      },
      {
        category: "Stats 10%",
        name: "Blessing of Kings",
        image: "images/Greater_Blessing_Of_Kings.png",
        checked: true,
      },
      {
        category: "Crit Strike %",
        name: "Heart of the Crusader",
        image: "images/Heart_Of_The_Crusader.png",
      },
      {
        category: "Damage %",
        name: "Sanctified Retribution",
        image: "images/Sanctified_Retribution.png",
      },
      {
        category: "Replenishment",
        name: "Judgements of the Wise",
        image: "images/Replenishment.png",
      },
      {
        category: "Haste %",
        name: "Swift Retribution",
        image: "images/Swift_Retribution.png",
      },
      {
        category: "Health Restore",
        name: "Judgement of Light",
        image: "images/Judgement_Of_Light.png",
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: "images/Judgement_Of_Wisdom.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Aura",
        image: "images/Fire_Resistance_Aura.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Aura",
        image: "images/Frost_Resistance_Aura.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Resistance Aura",
        image: "images/Shadow_Resistance_Aura.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Divine Sacrifice",
        image: "images/Divine_Sacrifice.png",
      },
      {
        name: "Hand of Sacrifice",
        image: "images/Hand_Of_Sacrifice.png",
      },
      {
        name: "Hand of Protection",
        image: "images/Hand_Of_Protection.png",
      },
      {
        name: "Hand of Freedom",
        image: "images/Hand_Of_Freedom.png",
      },
      {
        name: "Aura Mastery",
        image: "images/Aura_Mastery.png",
      },
      {
        name: "Divine Intervention",
        image: "images/Divine_Intervention.png",
      },
      {
        name: "Hammer of Justice",
        image: "images/Hammer_Of_Justice.png",
      },
    ],
  },
  {
    text: "Discipline Priest",
    image: "images/Discipline_Priest.webp",
    color: COLORS.priest,
    role: "healer",
    name: "",
    buffs: [
      {
        category: "Phys Damage Reduction %",
        name: "Inspiration",
        image: "images/Inspiration.png",
      },
      {
        category: "Damage Reduction %",
        name: "Renewed Hope",
        image: "images/Renewed_Hope.png",
      },
      {
        category: "Spirit",
        name: "Divine Spirit",
        image: "images/Divine_Spirit.png",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: "images/Power_Word_Fortitude.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Protection",
        image: "images/Prayer_Of_Shadow_Resistance.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Mass Dispel",
        image: "images/Mass_Dispel.png",
      },
      {
        name: "Hymn of Hope",
        image: "images/Hymn_Of_Hope.png",
      },
      {
        name: "Divine Hymn",
        image: "images/Divine_Hymn.png",
      },
      {
        name: "Pain Suppression",
        image: "images/Pain_Suppression.png",
      },
      {
        name: "Mind Control",
        image: "images/Mind_Control.png",
      },
      {
        name: "Power Infusion",
        image: "images/Power_Infusion.png",
      },
      {
        name: "Psychic Scream",
        image: "images/Psychic_Scream.png",
      },
    ],
  },
  {
    text: "Holy Priest",
    image: "images/Holy_Priest.webp",
    color: COLORS.priest,
    role: "healer",
    name: "",
    buffs: [
      {
        category: "Reduced Phys Damage Taken",
        name: "Inspiration",
        image: "images/Inspiration.png",
      },
      {
        category: "Spirit",
        name: "Divine Spirit",
        image: "images/Divine_Spirit.png",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: "images/Power_Word_Fortitude.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Protection",
        image: "images/Prayer_Of_Shadow_Resistance.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Mass Dispel",
        image: "images/Mass_Dispel.png",
      },
      {
        name: "Hymn of Hope",
        image: "images/Hymn_Of_Hope.png",
      },
      {
        name: "Divine Hymn",
        image: "images/Divine_Hymn.png",
      },
      {
        name: "Guardian Spirit",
        image: "images/Holy_Priest.webp",
      },
      {
        name: "Mind Control",
        image: "images/Mind_Control.png",
      },
      {
        name: "Psychic Scream",
        image: "images/Psychic_Scream.png",
      },
    ],
  },
  {
    text: "Shadow Priest",
    image: "images/Shadow_Priest.webp",
    color: COLORS.priest,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Spell Hit",
        name: "Misery",
        image: "images/Misery.png",
      },
      {
        category: "Spirit",
        name: "Divine Spirit",
        image: "images/Divine_Spirit.png",
      },
      {
        category: "Replenishment",
        name: "Vampiric Touch",
        image: "images/Replenishment.png",
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: "images/Power_Word_Fortitude.png",
      },
      {
        category: "Shadow Resistance",
        name: "Shadow Protection",
        image: "images/Prayer_Of_Shadow_Resistance.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Dispel Magic",
        image: "images/Dispel_Magic.png",
      },
      {
        name: "Mass Dispel",
        image: "images/Mass_Dispel.png",
      },
      {
        name: "Hymn of Hope",
        image: "images/Hymn_Of_Hope.png",
      },
      {
        name: "Divine Hymn",
        image: "images/Divine_Hymn.png",
      },
      {
        name: "Mind Control",
        image: "images/Mind_Control.png",
      },
      {
        name: "Psychic Scream",
        image: "images/Psychic_Scream.png",
      },
    ],
  },
  {
    text: "Assassination Rogue",
    image: "images/Assassination_Rogue.webp",
    color: COLORS.rogue,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: "images/Expose_Armor.png",
      },
      {
        category: "Crit Strike %",
        name: "Master Poisoner",
        image: "images/Master_Poisoner.png",
      },
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: "images/Wound_Poison.png",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: "images/Tricks_Of_The_Trade.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Anesthetic Poison",
        image: "images/Anesthetic_Poison.png",
      },
      {
        name: "Mind-numbing Poison",
        image: "images/Crypt_Fever.png",
      },
      {
        name: "Blind",
        image: "images/Blind.png",
      },
      {
        name: "Dismantle",
        image: "images/Dismantle.png",
      },
    ],
  },
  {
    text: "Combat Rogue",
    image: "images/Combat_Rogue.webp",
    color: COLORS.rogue,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: "images/Expose_Armor.png",
      },
      {
        category: "Phys Vulnerability",
        name: "Savage Combat",
        image: "images/Savage_Combat.png",
      },
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: "images/Wound_Poison.png",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: "images/Tricks_Of_The_Trade.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Anesthetic Poison",
        image: "images/Anesthetic_Poison.png",
      },
      {
        name: "Mind-numbing Poison",
        image: "images/Crypt_Fever.png",
      },
      {
        name: "Blind",
        image: "images/Blind.png",
      },
      {
        name: "Dismantle",
        image: "images/Dismantle.png",
      },
    ],
  },
  {
    text: "Subtlety Rogue",
    image: "images/Subtlety_Rogue.webp",
    color: COLORS.rogue,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: "images/Expose_Armor.png",
      },
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: "images/Wound_Poison.png",
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: "images/Tricks_Of_The_Trade.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Anesthetic Poison",
        image: "images/Anesthetic_Poison.png",
      },
      {
        name: "Mind-numbing Poison",
        image: "images/Crypt_Fever.png",
      },
      {
        name: "Blind",
        image: "images/Blind.png",
      },
      {
        name: "Dismantle",
        image: "images/Dismantle.png",
      },
    ],
  },

  {
    text: "Elemental Shaman",
    image: "images/Elemental_Shaman.webp",
    color: COLORS.shaman,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Stoneskin Totem",
        name: "Stoneskin Totem",
        image: "images/Stoneskin_Totem.png",
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: "images/Strength_Of_Earth_Totem.png",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: "images/Mana_Spring_Totem.png",
      },
      {
        category: "Spell Crit %",
        name: "Elemental Oath",
        image: "images/Elemental_Oath.png",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: "images/Wrath_Of_Air_Totem.png",
      },
      {
        category: "Spell Power",
        name: "Totem of Wrath",
        image: "images/Totem_Of_Wrath.png",
      },
      {
        category: "Crit Strike %",
        name: "Totem of Wrath",
        image: "images/Totem_Of_Wrath.png",
      },
      {
        category: "Melee Haste",
        name: "Windfury Totem ",
        image: "images/Windfury.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Totem",
        image: "images/Fire_Resistance_Totem.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Totem",
        image: "images/Frost_Resistance_Totem.png",
      },
      {
        category: "Nature Resistance",
        name: "Nature Resistance Totem",
        image: "images/Nature_Resistance_Totem.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Cleansing Totem",
        image: "images/Cleansing_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        name: "Hex",
        image: "images/Hex.png",
      },
      {
        name: "Purge",
        image: "images/Purge.png",
      },
    ],
  },
  {
    text: "Enhancement Shaman",
    image: "images/Enhancement_Shaman.webp",
    color: COLORS.shaman,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Stoneskin Totem",
        name: "Stoneskin Totem",
        image: "images/Stoneskin_Totem.png",
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: "images/Strength_Of_Earth_Totem.png",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: "images/Mana_Spring_Totem.png",
      },
      {
        category: "Attack Power %",
        name: "Unleashed Rage",
        image: "images/Unleashed_Rage.png",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: "images/Wrath_Of_Air_Totem.png",
      },
      {
        category: "Spell Power",
        name: "Flametongue Totem",
        image: "images/Flametongue_Totem.png",
      },
      {
        category: "Melee Haste",
        name: "Improved Windfury Totem ",
        image: "images/Windfury.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Totem",
        image: "images/Fire_Resistance_Totem.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Totem",
        image: "images/Frost_Resistance_Totem.png",
      },
      {
        category: "Nature Resistance",
        name: "Nature Resistance Totem",
        image: "images/Nature_Resistance_Totem.png",
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Cleansing Totem",
        image: "images/Cleansing_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        name: "Hex",
        image: "images/Hex.png",
      },
      {
        name: "Purge",
        image: "images/Purge.png",
      },
    ],
  },
  {
    text: "Restoration Shaman",
    image: "images/Restoration_Shaman.webp",
    color: COLORS.shaman,
    role: "healer",
    name: "",
    buffs: [
      {
        category: "Stoneskin Totem",
        name: "Stoneskin Totem",
        image: "images/Stoneskin_Totem.png",
      },
      {
        category: "Agility and Strength",
        name: "Strength of Earth Totem",
        image: "images/Strength_Of_Earth_Totem.png",
      },
      {
        category: "Bloodlust/Heroism",
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        category: "Mana per 5",
        name: "Mana Spring Totem",
        image: "images/Mana_Spring_Totem.png",
      },
      {
        category: "Spell Power",
        name: "Flametongue Totem",
        image: "images/Flametongue_Totem.png",
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: "images/Wrath_Of_Air_Totem.png",
      },
      {
        category: "Reduced Phys Damage Taken",
        name: "Ancestral Healing",
        image: "images/Ancestral_Healing.png",
      },
      {
        category: "Melee Haste",
        name: "Windfury Totem ",
        image: "images/Windfury.png",
      },
      {
        category: "Fire Resistance",
        name: "Fire Resistance Totem",
        image: "images/Fire_Resistance_Totem.png",
      },
      {
        category: "Frost Resistance",
        name: "Frost Resistance Totem",
        image: "images/Frost_Resistance_Totem.png",
      },
      {
        category: "Nature Resistance",
        name: "Nature Resistance Totem",
        image: "images/Nature_Resistance_Totem.png",
      },
    ],
    utility: [
      {
        name: "Remove Curse",
        image: "images/Remove_Curse.png",
      },
      {
        name: "Dispel Disease",
        image: "images/Dispel_Disease.png",
      },
      {
        name: "Dispel Poison",
        image: "images/Dispel_Poison.png",
      },
      {
        name: "Cleansing Totem",
        image: "images/Cleansing_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Mana Tide Totem",
        image: "images/Mana_Tide_Totem.png",
      },
      {
        name: "Bloodlust/Heroism",
        image: "images/Bloodlust.png",
      },
      {
        name: "Hex",
        image: "images/Hex.png",
      },
      {
        name: "Purge",
        image: "images/Purge.png",
      },
    ],
  },
  {
    text: "Arms Warrior",
    image: "images/Arms_Warrior.webp",
    color: COLORS.warrior,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: "images/Demoralizing_Shout.png",
      },
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: "images/Battle_Shout.png",
        checked: true,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: "images/Commanding_Shout.png",
        checked: true,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: "images/Sunder_Armor.png",
      },
      {
        category: "Phys Vulnerability",
        name: "Blood Frenzy",
        image: "images/Blood_Frenzy.png",
      },
      {
        category: "Bleed Damage",
        name: "Trauma",
        image: "images/Trauma.png",
      },
      {
        category: "Attack Speed Reduction",
        name: "Thunderclap",
        image: "images/Thunderclap.png",
      },
      {
        category: "Healing Reduction",
        name: "Mortal Strike",
        image: "images/Mortal_Strike.png",
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Shattering Throw",
        image: "images/Shattering_Throw.png",
      },
      {
        name: "Intimidating Shout",
        image: "images/Intimidating_Shout.png",
      },
      {
        name: "Disarm",
        image: "images/Disarm.png",
      },
    ],
  },
  {
    text: "Fury Warrior",
    image: "images/Fury_Warrior.webp",
    color: COLORS.warrior,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: "images/Demoralizing_Shout.png",
      },

      {
        category: "Attack Power",
        name: "Battle Shout",
        image: "images/Battle_Shout.png",
        checked: true,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: "images/Commanding_Shout.png",
        checked: true,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: "images/Sunder_Armor.png",
      },
      {
        category: "Melee Crit",
        name: "Rampage",
        image: "images/Rampage.png",
      },
      {
        category: "Attack Speed Reduction",
        name: "Thunderclap",
        image: "images/Thunderclap.png",
      },
      {
        category: "Healing Reduction",
        name: "Mortal Strike",
        image: "images/Mortal_Strike.png",
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Shattering Throw",
        image: "images/Shattering_Throw.png",
      },
      {
        name: "Intimidating Shout",
        image: "images/Intimidating_Shout.png",
      },
      {
        name: "Disarm",
        image: "images/Disarm.png",
      },
    ],
  },

  {
    text: "Protection Warrior",
    image: "images/Protection_Warrior.webp",
    color: COLORS.warrior,
    role: "tank",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: "images/Demoralizing_Shout.png",
      },
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: "images/Battle_Shout.png",
        checked: true,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: "images/Commanding_Shout.png",
        checked: true,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: "images/Sunder_Armor.png",
      },
      {
        category: "Attack Speed Reduction",
        name: "Improved Thunderclap",
        image: "images/Thunderclap.png",
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Vigilance",
        image: "images/Vigilance.png",
      },
      {
        name: "Shattering Throw",
        image: "images/Shattering_Throw.png",
      },
      {
        name: "Intimidating Shout",
        image: "images/Intimidating_Shout.png",
      },
      {
        name: "Disarm",
        image: "images/Disarm.png",
      },
    ],
  },
  {
    text: "Affliction Warlock",
    image: "images/Affliction_Warlock.webp",
    color: COLORS.warlock,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Intellect",
        name: "Fel Intelligence",
        image: "images/Fel_Intelligence.png",
      },
      {
        category: "Spirit",
        name: "Fel Intelligence",
        image: "images/Fel_Intelligence.png",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: "images/Shadow_Bolt.png",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: "images/Curse_Of_The_Elements.png",
      },
    ],
    utility: [
      {
        name: "Felhunter's Devour Magic",
        image: "images/Devour_Magic.png",
      },
      {
        name: "Fear",
        image: "images/Fear.png",
      },
      {
        name: "Create Soulstone",
        image: "images/Create_Soulstone.png",
      },
    ],
  },
  {
    text: "Demonology Warlock",
    image: "images/Demonology_Warlock.webp",
    color: COLORS.warlock,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Spell Power",
        name: "Demonic Pact",
        image: "images/Demonic_Pact.png",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: "images/Curse_Of_The_Elements.png",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: "images/Shadow_Bolt.png",
      },
    ],
    utility: [
      {
        name: "Fear",
        image: "images/Fear.png",
      },
      {
        name: "Create Soulstone",
        image: "images/Create_Soulstone.png",
      },
    ],
  },
  {
    text: "Destruction Warlock",
    image: "images/Destruction_Warlock.webp",
    color: COLORS.warlock,
    role: "dps",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Health",
        name: "Improved Imp",
        image: "images/Blood_Pact.png",
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: "images/Curse_Of_The_Elements.png",
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: "images/Curse_Of_Weakness.png",
      },
      {
        category: "Replenishment",
        name: "Improved Soul Leech",
        image: "images/Replenishment.png",
      },
    ],
    utility: [
      {
        name: "Fear",
        image: "images/Fear.png",
      },
      {
        name: "Create Soulstone",
        image: "images/Create_Soulstone.png",
      },
    ],
  },
];

export default SpecArray;
