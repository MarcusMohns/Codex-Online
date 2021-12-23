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
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: require("./images/Icy_Touch.png").default,
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
        image: require("./images/Death_Grip.png").default,
      },
      {
        name: "Hysteria",
        image: require("./images/Hysteria.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Chains_Of_Ice.png").default,
      },
    ],
  },
  {
    text: "Unholy Death Knight",
    image: require("./images/dk_unholy.png").default,
    color: "red",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: require("./images/Icy_Touch.png").default,
      },
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
        image: require("./images/Crypt_Fever.png").default,
      },
    ],
    utility: [
      {
        name: "Death Grip",
        image: require("./images/Death_Grip.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Chains_Of_Ice.png").default,
      },
    ],
  },
  {
    text: "Frost Death Knight",
    image: require("./images/dk_frost.png").default,
    color: "red",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Improved Icy Touch",
        image: require("./images/Icy_Touch.png").default,
      },
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
        image: require("./images/Death_Grip.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Chains of Ice",
        image: require("./images/Chains_Of_Ice.png").default,
      },
    ],
  },
  {
    text: "Balance Druid",
    image: require("./images/druid_balance.png").default,
    color: "orange",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: require("./images/Demoralizing_Roar.png").default,
      },
      {
        category: "Haste %",
        name: "Improved Moonkin Form",
        image: require("./images/Moonkin_Form.png").default,
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
        image: require("./images/Rebirth.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Innervate.png").default,
      },
      {
        name: "Typhoon",
        image: require("./images/Typhoon.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Tranquility.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
      },
    ],
  },
  {
    text: "Feral Druid",
    image: require("./images/druid_feral.png").default,
    color: "orange",
    buffs: [
      {
        category: "Attack Speed Reduction",
        name: "Infected Wounds",
        image: require("./images/Infected_Wounds.png").default,
      },
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: require("./images/Demoralizing_Roar.png").default,
      },
      {
        category: "Melee Crit",
        name: "Leader of the Pack",
        image: require("./images/Leader_Of_The_Pack.png").default,
      },
      {
        category: "Improved Leader of the Pack",
        name: "Improved Leader of the Pack",
        image: require("./images/Leader_Of_The_Pack.png").default,
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
        image: require("./images/Mangle.png").default,
      },
    ],
    utility: [
      {
        name: "Rebirth",
        image: require("./images/Rebirth.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Innervate.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Tranquility.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
      },
    ],
  },
  {
    text: "Restoration Druid",
    image: require("./images/druid_restoration.png").default,
    color: "orange",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Roar",
        image: require("./images/Demoralizing_Roar.png").default,
      },
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
        image: require("./images/Rebirth.png").default,
      },
      {
        name: "Innervate",
        image: require("./images/Innervate.png").default,
      },
      {
        name: "Tranquility",
        image: require("./images/Tranquility.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
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
        image: require("./images/Ferocious_Inspiration.png").default,
      },
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: require("./images/Aimed_Shot.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Misdirection.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Tranquilizing_Shot.png").default,
      },
    ],
  },
  {
    text: "Marksman Hunter",
    image: require("./images/hunter_marksman.png").default,
    color: "green",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: require("./images/Aimed_Shot.png").default,
      },
      {
        category: "Attack Power %",
        name: "Trueshot Aura",
        image: require("./images/Trueshot_Aura.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Misdirection.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Tranquilizing_Shot.png").default,
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
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: require("./images/Aimed_Shot.png").default,
      },
    ],
    utility: [
      {
        name: "Misdirection",
        image: require("./images/Misdirection.png").default,
      },
      {
        name: "Tranquilizing Shot",
        image: require("./images/Tranquilizing_Shot.png").default,
      },
      {
        name: "Wyvern Sting",
        image: require("./images/Wyvern_Sting.png").default,
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
        image: require("./images/Arcane_Empowerment.png").default,
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
        image: require("./images/Spellsteal.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Focus_Magic.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
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
        image: require("./images/Improved_Scorch.png").default,
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
        image: require("./images/Spellsteal.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Focus_Magic.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
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
        image: require("./images/Winters_Chill.png").default,
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
        image: require("./images/Spellsteal.png").default,
      },
      {
        name: "Focus Magic",
        image: require("./images/Focus_Magic.png").default,
      },
      {
        name: "Remove Curse",
        image: require("./images/Remove_Curse.png").default,
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
        image: require("./images/Devotion_Aura.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/Greater_Blessing_Of_Might.png").default,
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
        category: "Health Restore",
        name: "Judgement of Light",
        image: require("./images/Judgement_Of_Light.png").default,
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: require("./images/Judgement_Of_Wisdom.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Divine_Sacrifice.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Hand_Of_Sacrifice.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Hand_Of_Protection.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Hand_Of_Freedom.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aura_Mastery.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Divine_Intervention.png").default,
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
        image: require("./images/Devotion_Aura.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/Greater_Blessing_Of_Might.png").default,
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
        image: require("./images/Heart_Of_The_Crusader.png").default,
      },
      {
        category: "Damage Reduction %",
        name: "Blessing of Sanctuary",
        image: require("./images/Greater_Blessing_Of_Sanctuary.png").default,
      },
      {
        category: "Healing Recieved %",
        name: "Improved Devotion Aura",
        image: require("./images/Devotion_Aura.png").default,
      },
      {
        category: "Health Restore",
        name: "Judgement of Light",
        image: require("./images/Judgement_Of_Light.png").default,
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: require("./images/Judgement_Of_Wisdom.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Divine_Sacrifice.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Hand_Of_Sacrifice.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Hand_Of_Protection.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Hand_Of_Freedom.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aura_Mastery.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Divine_Intervention.png").default,
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
        image: require("./images/Devotion_Aura.png").default,
      },
      {
        category: "Attack Power",
        name: "Blessing of Might",
        image: require("./images/Greater_Blessing_Of_Might.png").default,
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
        image: require("./images/Heart_Of_The_Crusader.png").default,
      },
      {
        category: "Damage %",
        name: "Sanctified Retribution",
        image: require("./images/Sanctified_Retribution.png").default,
      },
      {
        category: "Replenishment",
        name: "Judgements of the Wise",
        image: require("./images/Replenishment.png").default,
      },
      {
        category: "Haste %",
        name: "Swift Retribution",
        image: require("./images/Swift_Retribution.png").default,
      },
      {
        category: "Health Restore",
        name: "Judgement of Light",
        image: require("./images/Judgement_Of_Light.png").default,
      },
      {
        category: "Mana Restore",
        name: "Judgement of Wisdom",
        image: require("./images/Judgement_Of_Wisdom.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Divine Sacrifice",
        image: require("./images/Divine_Sacrifice.png").default,
      },
      {
        name: "Hand of Sacrifice",
        image: require("./images/Hand_Of_Sacrifice.png").default,
      },
      {
        name: "Hand of Protection",
        image: require("./images/Hand_Of_Protection.png").default,
      },
      {
        name: "Hand of Freedom",
        image: require("./images/Hand_Of_Freedom.png").default,
      },
      {
        name: "Aura Mastery",
        image: require("./images/Aura_Mastery.png").default,
      },
      {
        name: "Divine Intervention",
        image: require("./images/Divine_Intervention.png").default,
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
        image: require("./images/Inspiration.png").default,
      },
      {
        category: "Damage Reduction %",
        name: "Renewed Hope",
        image: require("./images/Renewed_Hope.png").default,
      },
      {
        category: "Spirit",
        name: "Divine Spirit",
        image: require("./images/Divine_Spirit.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Power_Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Mass_Dispel.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Hymn_Of_Hope.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Divine_Hymn.png").default,
      },
      {
        name: "Pain Suppression",
        image: require("./images/Pain_Suppression.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Mind_Control.png").default,
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
        image: require("./images/Inspiration.png").default,
      },
      {
        category: "Spirit",
        name: "Divine Spirit ",
        image: require("./images/Divine_Spirit.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Power_Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Mass_Dispel.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Hymn_Of_Hope.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Divine_Hymn.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Mind_Control.png").default,
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
        name: "Misery",
        image: require("./images/Misery.png").default,
      },
      {
        category: "Replenishment",
        name: "Vampiric Touch",
        image: require("./images/Replenishment.png").default,
      },
      {
        category: "Stamina",
        name: "Power Word: Fortitude",
        image: require("./images/Power_Word_Fortitude.png").default,
      },
    ],
    utility: [
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Dispel Magic",
        image: require("./images/Dispel_Magic.png").default,
      },
      {
        name: "Mass Dispel",
        image: require("./images/Mass_Dispel.png").default,
      },
      {
        name: "Hymn of Hope",
        image: require("./images/Hymn_Of_Hope.png").default,
      },
      {
        name: "Divine Hymn",
        image: require("./images/Divine_Hymn.png").default,
      },
      {
        name: "Mind Control",
        image: require("./images/Mind_Control.png").default,
      },
    ],
  },
  {
    text: "Assassination Rogue",
    image: require("./images/rogue_assassination.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: require("./images/Wound_Poison.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: require("./images/Expose_Armor.png").default,
      },
      {
        category: "Crit Strike %",
        name: "Master Poisoner",
        image: require("./images/Master_Poisoner.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Tricks_Of_The_Trade.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
    ],
  },
  {
    text: "Combat Rogue",
    image: require("./images/rogue_combat.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: require("./images/Wound_Poison.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Expose Armor",
        image: require("./images/Expose_Armor.png").default,
      },
      {
        category: "Phys Vulnerability",
        name: "Savage Combat",
        image: require("./images/Savage_Combat.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Tricks_Of_The_Trade.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
    ],
  },
  {
    text: "Subtlety Rogue",
    image: require("./images/rogue_subtlety.png").default,
    color: "yellow",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: require("./images/Wound_Poison.png").default,
      },
    ],
    utility: [
      {
        name: "Tricks of the Trade",
        image: require("./images/Tricks_Of_The_Trade.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
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
        image: require("./images/Stoneskin_Totem.png").default,
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
        image: require("./images/Elemental_Oath.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air_Totem.png").default,
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
        image: require("./images/Flametongue_Totem.png").default,
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
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Cleansing_Totem.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
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
        image: require("./images/Stoneskin_Totem.png").default,
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
        image: require("./images/Unleashed_Rage.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air_Totem.png").default,
      },
      {
        category: "Spell Power",
        name: "Flametongue Totem",
        image: require("./images/Flametongue_Totem.png").default,
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
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Cleansing_Totem.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
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
        image: require("./images/Stoneskin_Totem.png").default,
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
        image: require("./images/Flametongue_Totem.png").default,
      },
      {
        category: "Spell Haste",
        name: "Wrath of Air Totem",
        image: require("./images/Wrath_Of_Air_Totem.png").default,
      },
      {
        category: "Armor %",
        name: "Ancestral Healing",
        image: require("./images/Ancestral_Healing.png").default,
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
        image: require("./images/Remove_Curse.png").default,
      },
      {
        name: "Dispel Disease",
        image: require("./images/Dispel_Disease.png").default,
      },
      {
        name: "Dispel Poison",
        image: require("./images/Dispel_Poison.png").default,
      },
      {
        name: "Cleansing Totem",
        image: require("./images/Cleansing_Totem.png").default,
      },
      {
        name: "Nature resistance",
        image: require("./images/Aboms_Might.png").default,
      },
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
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
        category: "Healing Reduction",
        name: "Mortal Strike",
        image: require("./images/Mortal_Strike.png").default,
      },

      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: require("./images/Demoralizing_Shout.png").default,
      },
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/Commanding_Shout.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/Sunder_Armor.png").default,
      },
      {
        category: "Phys Vulnerability",
        name: "Blood Frenzy",
        image: require("./images/Blood_Frenzy.png").default,
      },
      {
        category: "Bleed Damage",
        name: "Trauma",
        image: require("./images/Trauma.png").default,
      },
      {
        category: "Attack Speed Reduction",
        name: "Thunderclap",
        image: require("./images/Thunderclap.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Shattering_Throw.png").default,
      },
    ],
  },
  {
    text: "Fury Warrior",
    image: require("./images/warrior_fury.png").default,
    color: "brown",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: require("./images/Demoralizing_Shout.png").default,
      },
      {
        category: "Healing Reduction",
        name: "Furious Attacks",
        image: require("./images/Furious_Attacks.png").default,
      },
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/Commanding_Shout.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/Sunder_Armor.png").default,
      },
      {
        category: "Melee Crit",
        name: "Rampage",
        image: require("./images/Rampage.png").default,
      },
      {
        category: "Attack Speed Reduction",
        name: "Thunderclap",
        image: require("./images/Thunderclap.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Shattering_Throw.png").default,
      },
    ],
  },

  {
    text: "Protection Warrior",
    image: require("./images/warrior_protection.png").default,
    color: "brown",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: require("./images/Demoralizing_Shout.png").default,
      },
      {
        category: "Attack Power",
        name: "Battle Shout",
        image: require("./images/Battle_Shout.png").default,
      },
      {
        category: "Health",
        name: "Commanding Shout",
        image: require("./images/Commanding_Shout.png").default,
      },
      {
        category: "Armor Reduction (Major)",
        name: "Sunder Armor",
        image: require("./images/Sunder_Armor.png").default,
      },
      {
        category: "Attack Speed Reduction",
        name: "Improved Thunderclap",
        image: require("./images/Thunderclap.png").default,
      },
    ],
    utility: [
      {
        name: "Interrupt",
        image: require("./images/Kick.png").default,
      },
      {
        name: "Vigilance",
        image: require("./images/Vigilance.png").default,
      },
      {
        name: "Shattering Throw",
        image: require("./images/Shattering_Throw.png").default,
      },
    ],
  },
  {
    text: "Affliction Warlock",
    image: require("./images/warlock_affliction.png").default,
    color: "purple",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
      },
      {
        category: "Intellect",
        name: "Fel Intelligence",
        image: require("./images/Fel_Intelligence.png").default,
      },
      {
        category: "Spirit",
        name: "Fel Intelligence",
        image: require("./images/Fel_Intelligence.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: require("./images/Shadow_Bolt.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/Curse_Of_The_Elements.png").default,
      },
    ],
    utility: [
      {
        name: "Felhunter's Devour Magic",
        image: require("./images/Devour_Magic.png").default,
      },
    ],
  },
  {
    text: "Demonology Warlock",
    image: require("./images/warlock_demonology.png").default,
    color: "purple",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
      },
      {
        category: "Spell Power",
        name: "Demonic Pact",
        image: require("./images/Demonic_Pact.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/Curse_Of_The_Elements.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
      },
      {
        category: "Spell Crit Taken",
        name: "Improved Shadow Bolt",
        image: require("./images/Shadow_Bolt.png").default,
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
        category: "Attack Power Reduction",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
      },
      {
        category: "Health",
        name: "Improved Imp",
        image: require("./images/Blood_Pact.png").default,
      },
      {
        category: "Spell Damage %",
        name: "Curse of the Elements",
        image: require("./images/Curse_Of_The_Elements.png").default,
      },
      {
        category: "Armor Reduction (Minor)",
        name: "Curse of Weakness",
        image: require("./images/Curse_Of_Weakness.png").default,
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
