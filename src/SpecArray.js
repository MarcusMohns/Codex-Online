const SpecArray = [
  {
    text: "Blood Death Knight",
    image: "images/dk_blood.png",
    color: "rgb(196,30,58)",
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
    image: "images/dk_unholy.png",
    color: "rgb(196,30,58)",
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
    image: "images/dk_frost.png",
    color: "rgb(196,30,58)",
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
    image: "images/druid_balance.png",
    color: "rgb(255,124,10)",
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
    ],
  },
  {
    text: "Feral Druid",
    image: "images/druid_feral.png",
    color: "rgb(255,124,10)",
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
    ],
  },
  {
    text: "Restoration Druid",
    image: "images/druid_restoration.png",
    color: "rgb(255,124,10)",
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
    ],
  },
  {
    text: "Beast Mastery Hunter",
    image: "images/hunter_beastmastery.png",
    color: "rgb(170,211,114)",
    name: "",
    buffs: [
      {
        category: "Damage %",
        name: "Ferocious Inspiration",
        image: "images/Ferocious_Inspiration.png",
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
        name: "Nature resistance",
        image: "images/Aspect_Of_The_Wild.png",
      },
    ],
  },
  {
    text: "Marksman Hunter",
    image: "images/hunter_marksman.png",
    color: "rgb(170,211,114)",
    name: "",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Aimed Shot",
        image: "images/Aimed_Shot.png",
      },
      {
        category: "Attack Power %",
        name: "Trueshot Aura",
        image: "images/Trueshot_Aura.png",
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
        name: "Nature resistance",
        image: "images/Aspect_Of_The_Wild.png",
      },
    ],
  },
  {
    text: "Survival Hunter",
    image: "images/hunter_survival.png",
    color: "rgb(170,211,114)",
    name: "",
    buffs: [
      {
        category: "Replenishment",
        name: "Hunting Party",
        image: "images/Replenishment.png",
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
        name: "Nature resistance",
        image: "images/Aspect_Of_The_Wild.png",
      },
    ],
  },
  {
    text: "Arcane Mage",
    image: "images/mage_arcane.png",
    color: "rgb(63,199,235)",
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
    ],
  },
  {
    text: "Fire Mage",
    image: "images/mage_fire.png",
    color: "rgb(63,199,235)",
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
    ],
  },
  {
    text: "Frost Mage",
    image: "images/mage_frost.png",
    color: "rgb(63,199,235)",
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
    ],
  },

  {
    text: "Holy Paladin",
    image: "images/paladin_holy.png",
    color: "rgb(244,140,186)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        name: "Fire resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Frost resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Protection Paladin",
    image: "images/paladin_protection.png",
    color: "rgb(244,140,186)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        name: "Fire resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Frost resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Retribution Paladin",
    image: "images/paladin_retribution.png",
    color: "rgb(244,140,186)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        name: "Fire resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Frost resistance",
        image: "images/Aboms_Might.png",
      },
      {
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Discipline Priest",
    image: "images/priest_discipline.png",
    color: "rgb(255,255,255)",
    name: "",
    buffs: [
      {
        category: "Armor %",
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
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Holy Priest",
    image: "images/priest_holy.png",
    color: "rgb(255,255,255)",
    name: "",
    buffs: [
      {
        category: "Armor %",
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
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Shadow Priest",
    image: "images/priest_shadow.png",
    color: "rgb(255,255,255)",
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
        name: "Shadow resistance",
        image: "images/Aboms_Might.png",
      },
    ],
  },
  {
    text: "Assassination Rogue",
    image: "images/rogue_assassination.png",
    color: "rgb(255,244,104)",
    name: "",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: "images/Wound_Poison.png",
      },
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
    ],
  },
  {
    text: "Combat Rogue",
    image: "images/rogue_combat.png",
    color: "rgb(255,244,104)",
    name: "",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Wound Poison",
        image: "images/Wound_Poison.png",
      },
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
    ],
  },
  {
    text: "Subtlety Rogue",
    image: "images/rogue_subtlety.png",
    color: "rgb(255,244,104)",
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
    ],
  },

  {
    text: "Elemental Shaman",
    image: "images/shaman_elemental.png",
    color: "rgb(0,112,221)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        name: "Nature resistance",
        image: "images/Nature_Resistance_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
    ],
  },
  {
    text: "Enhancement Shaman",
    image: "images/shaman_enhancement.png",
    color: "rgb(0,112,221)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        name: "Nature resistance",
        image: "images/Nature_Resistance_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
    ],
  },
  {
    text: "Restoration Shaman",
    image: "images/shaman_restoration.png",
    color: "rgb(0,112,221)",
    name: "",
    buffs: [
      {
        category: "Armor",
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
        category: "Armor %",
        name: "Ancestral Healing",
        image: "images/Ancestral_Healing.png",
      },
      {
        category: "Melee Haste",
        name: "Windfury Totem ",
        image: "images/Windfury.png",
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
        name: "Nature resistance",
        image: "images/Nature_Resistance_Totem.png",
      },
      {
        name: "Interrupt",
        image: "images/Kick.png",
      },
      {
        name: "Mana Tide Totem",
        image: "images/Mana_Tide_Totem.png",
      },
    ],
  },
  {
    text: "Arms Warrior",
    image: "images/warrior_arms.png",
    color: "rgb(198,155,109)",
    name: "",
    buffs: [
      {
        category: "Healing Reduction",
        name: "Mortal Strike",
        image: "images/Mortal_Strike.png",
      },

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
    ],
  },
  {
    text: "Fury Warrior",
    image: "images/warrior_fury.png",
    color: "rgb(198,155,109)",
    name: "",
    buffs: [
      {
        category: "Attack Power Reduction",
        name: "Demoralizing Shout",
        image: "images/Demoralizing_Shout.png",
      },
      {
        category: "Healing Reduction",
        name: "Furious Attacks",
        image: "images/Furious_Attacks.png",
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
    ],
  },

  {
    text: "Protection Warrior",
    image: "images/warrior_protection.png",
    color: "rgb(198,155,109)",
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
    ],
  },
  {
    text: "Affliction Warlock",
    image: "images/warlock_affliction.png",
    color: "rgb(135,136,238)",
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
    ],
  },
  {
    text: "Demonology Warlock",
    image: "images/warlock_demonology.png",
    color: "rgb(135,136,238)",
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
    utility: [],
  },
  {
    text: "Destruction Warlock",
    image: "images/warlock_destruction.png",
    color: "rgb(135,136,238)",
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
    utility: [],
  },
];

export default SpecArray;
