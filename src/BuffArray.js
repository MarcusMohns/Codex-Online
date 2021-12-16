const BuffArray = [
  {
    name: "Agility and Strength",
    source: ["Death Knights", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Horn of Winter, Strength of Earth Totem
        </div>
        <span className="buff">Increases</span> Strength and Agility by{" "}
        <span>155</span> for all{" "}
        <span className="buff">party and raid members</span>.
      </div>
    ),
  },
  {
    name: "Armor %",
    source: ["Disc Priest", "Holy Priest", "Restoration Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Inspiration, Ancestral Healing </div>
        Reduces the <span className="buff">friendly targets</span> physical
        damage taken by <span className="buff-value">10%</span> for 15 seconds
        after being scored by a critical heal.
      </div>
    ),
  },
  {
    name: "Armor",
    source: ["Shamans", "Paladins"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div>
          <div className="spell-names">Devotion Aura, Stoneskin Totem</div>
          <span className="buff">Increases</span> Armor of all{" "}
          <span className="buff">party and raid members</span> by x
        </div>
        <div>
          Devotion Aura:<span className="buff-value">1205</span>
        </div>
        <div>
          Improved Devotion Aura:<span className="buff-value">1807</span>
        </div>
        <div>
          Stoneskin Totem: <span className="buff-value">1150</span>
        </div>
        <div>
          Improved Stoneskin Totem: <span className="buff-value">1380</span>
        </div>
        <div className="fine-print">
          Devotion Aura and Stoneskin Totem stack with one another
        </div>
      </div>
    ),
  },
  {
    name: "Armor Reduction (Major)",
    source: ["Rogues", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Sunder Armor, Expose Armor</div>
        <span className="debuff">Decreases</span> the Armor of the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">20%</span>.
        <div className="fine-print">
          Sunder Armor is preferable to Expose Armor.
        </div>
      </div>
    ),
  },

  {
    name: "Armor Reduction (Minor)",
    source: ["Feral Druid", "Warlocks"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Faerie Fire, Curse of Weakness</div>
        <span className="debuff">Decreases</span> the Armor of the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">5%</span>.
      </div>
    ),
  },

  {
    name: "Attack Power %",
    source: ["Marksman Hunter", "Enhancement Shaman", "Blood Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Trueshot Aura, Unleashed Rage, Abomination's Might{" "}
        </div>
        <span className="buff"> Increases</span> Attack Power by{" "}
        <span className="buff-value">10%</span> for all{" "}
        <span className="buff">party and raid members</span>.
      </div>
    ),
  },
  {
    name: "Attack Power",
    source: ["Paladins", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Blessing of Might, Battle Shout</div>
        <div>
          <span className="buff">Increases</span> Attack Power by x
        </div>
        <div>
          Battle Shout:<span className="buff-value"> 548</span>
        </div>
        <div>
          Improved Battle Shout:<span className="buff-value"> 695</span>
        </div>
        <div>
          Blessing of Might: <span className="buff-value"> 550</span>
        </div>
        <div>
          Improved Blessing of Might:<span className="buff-value"> 687</span>
        </div>
      </div>
    ),
  },
  {
    name: "Bloodlust/Heroism",
    source: ["Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Bloodlust,Heroism</div>
        Melee, ranged, and spell casting speed{" "}
        <span className="buff">increased</span> by{" "}
        <span className="buff-value">30%</span> for 40s.
      </div>
    ),
  },
  {
    name: "Bleed Damage",
    source: ["Arms Warrior", "Feral Druid"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Trauma, Mangle</div>
        <span className="buff">Increases</span> the effectiveness of Bleed
        effects on the <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">30%</span> additional damage.
      </div>
    ),
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
    text: (
      <div>
        <div className="spell-names">
          Heart of the Crusader, Master Poisoner, Totem of Wrath{" "}
        </div>
        <span className="buff"> Increases</span> the critical strike chance on
        the <span className="debuff">enemy target</span>by{" "}
        <span className="buff-value">3%</span>.
      </div>
    ),
  },
  {
    name: "Damage %",
    source: ["Beast Mastery Hunter", "Retribution Paladin", "Arcane Mage"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Ferocious Inspiration, Sanctified Retribution, Arcane Empowerment
        </div>
        <span className="buff">Increases</span> all damage dealt by{" "}
        <span className="buff">party and raid members </span> by{" "}
        <span className="buff-value">3%</span>.
      </div>
    ),
  },
  {
    name: "Damage Reduction %",
    source: ["Discipline Priest", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Renewed Hope, Blessing of Sanctuary</div>
        <span className="buff">Reduces</span> damage taken from all sources by{" "}
        <span className="buff-value">3%</span>.
      </div>
    ),
  },

  {
    name: "Disease Damage",
    source: ["Unholy Death Knight"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Ebon Plaguebringer</div>
        <span className="buff">Increases</span> disease damage taken by the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">30%</span>.
      </div>
    ),
  },

  {
    name: "Haste %",
    source: ["Balance Druid", "Retribution Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Improved Moonkin Form, Swift Retribution
        </div>
        <span className="buff">Increases</span> casting, ranged and melee
        attacks speeds by <span className="buff-value">3%</span> for all{" "}
        <span className="buff">party and raid members</span>.
      </div>
    ),
  },

  {
    name: "Healing Recieved %",
    source: ["Restoration Druid", "Protection Paladin"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Tree of Life, Improved Devotion Aura</div>
        <span className="buff">Increases</span> healing recieved by{" "}
        <span className="buff-value">6%</span> for all{" "}
        <span className="buff">party and raid members </span>.
      </div>
    ),
  },
  {
    name: "Health",
    source: ["Destruction Warlock", "Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Commanding Shout, Blood Pact</div>
        <div>
          Maximum health <span className="buff">increased</span> by x.
        </div>
        <div>
          Commanding Shout: <span className="buff-value">2255</span>.
        </div>
        <div>
          Improved Commanding Shout: <span className="buff-value">2818</span>.
        </div>
        <div>
          Blood Pact: <span className="buff-value">1330</span>.
        </div>
        <div>
          Improved Blood Pact: <span className="buff-value">1729</span>.
        </div>
      </div>
    ),
  },
  {
    name: "Intellect",
    source: ["Mages", "Affliction Warlock"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Arcane Intellect, Fel Intelligence</div>
        <div>
          Arcane Intellect: <span className="buff">Increases</span> Intellect by{" "}
          <span className="buff-value">60</span>.
        </div>

        <div>
          Fel Intelligence: <span className="buff">Increases</span> Intellect by{" "}
          <span className="buff-value">48</span>.
        </div>
      </div>
    ),
  },
  {
    name: "Mana per 5",
    source: ["Paladins", "Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div>
          <span className="buff">Restores</span> x mana every 5 seconds
        </div>

        <div>
          Blessing of Wisdom: <span className="buff-value">92</span>
        </div>

        <div>
          Improved Blessing of Wisdom <span className="buff-value">110</span>
        </div>

        <div>
          Mana Spring Totem:<span className="buff-value">91</span>
        </div>

        <div>
          Improved Mana Spring Totem:<span className="buff-value">109</span>
        </div>
      </div>
    ),
  },
  {
    name: "Melee Crit",
    source: ["Feral Druid", "Fury Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Rampage, Leader of the Pack:</div>
        <span className="buff">Increases</span> ranged and melee critical chance
        by <span className="buff-value">5%</span>.
      </div>
    ),
  },

  {
    name: "Melee Haste",
    source: ["Shamans", "Enhancement Shamans", "Frost Death Knights"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Windfury Totem, Improved Windfury Totem, Improved Icy Talons
        </div>
        <div>
          <span className="buff">Increases</span> the melee haste of all raid
          members by x
        </div>

        <div>
          Windfury Totem: <span className="buff-value">16%</span>.
        </div>

        <div>
          Improved Windfury Totem: <span className="buff-value">20%</span>.
        </div>

        <div>
          Improved Icy Talons: <span className="buff-value">20%</span>.
        </div>
      </div>
    ),
  },
  {
    name: "Mark of the Wild",
    source: ["Druids"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div>
          <div className="spell-names">Mark of the Wild</div>
          <div>Motw:</div>
          <span className="buff">Increases</span> Armor by{" "}
          <span className="buff-value">750</span>, all attributes by{" "}
          <span className="buff-value">36</span> and all resistances by{" "}
          <span className="buff-value">54</span>.
        </div>

        <div>
          <div>Improved Motw:</div>
          <span className="buff">Increases</span> Armor by{" "}
          <span className="buff-value">1050</span>, all attributes by{" "}
          <span className="buff-value">51</span> and all resistances by{" "}
          <span className="buff-value">75</span>.
        </div>
        <div className="fine-print">
          Alternatively, Drums of the Wild provide the same stats as the
          unupgraded Motw and can be bought off the auction house.
        </div>
      </div>
    ),
  },
  {
    name: "Phys Vulnerability",
    source: ["Combat Rogue", "Arms Warrior"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Savage Combat, Trauma</div>
        <span className="buff">Increases</span> physical damage caused to the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">4%</span>.
      </div>
    ),
  },
  {
    name: "Improved Leader of the Pack",
    source: ["Feral Druid"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Improved Leader of the Pack</div>
        Leader of the pack also causes{" "}
        <span className="buff">friendly targets</span> to{" "}
        <span className="buff">heal themselves</span> for{" "}
        <span className="buff-value">4%</span> of their total health when they
        critically hit with a melee or ranged attack.
        <div className="fine-print">May only occur every 6 seconds</div>
      </div>
    ),
  },
  {
    name: "Replenishment",
    source: [
      "Survival Hunter",
      "Frost Mage",
      "Retribution Paladin",
      "Shadow Priest",
      "Destruction Warlock",
    ],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Hunting Party, Enduring Winter, Judgements of the Wise,Vampiric Touch,
          Improved Soul Leech.
        </div>
        <span className="buff">Increases</span> the mana regeneration equal to
        3% of maximum mana per 5 sec for 15 seconds.
      </div>
    ),
  },
  {
    name: "Spell Crit %",
    source: ["Balance Druid", "Elemental Shaman"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Moonkin Aura, Elemental Oath</div>
        <span className="buff">Increases</span> spell critical strike chance by
        an additional <span className="buff-value">5%</span> for all{" "}
        <span className="buff">party and raid members </span>
      </div>
    ),
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
    text: (
      <div>
        <div className="spell-names">
          Improved Scorch, Winter's Chill, Improved Shadow Bolt{" "}
        </div>
        <span className="buff">Increases</span> the chance spells will
        critically hit the <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">5%</span>.
      </div>
    ),
  },
  {
    name: "Spell Damage %",
    source: ["Balance Druid", "Warlocks", "Unholy Death Knights"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Earth and Moon, Curse of the Elements, Ebon Plaguebringer
        </div>
        <span className="buff">Increases</span> spell damage taken by the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">13%</span>.
      </div>
    ),
  },
  {
    name: "Spell Haste",
    source: ["Shamans"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Wrath of Air Totem</div>
        <span className="buff">Increases</span> spell haste by 5% for all{" "}
        <span className="buff">party and raid members</span>{" "}
      </div>
    ),
  },
  {
    name: "Spell Hit",
    source: ["Balance Druid", "Shadow Priest"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Improved Faerie Fire, Misery</div>
        <span className="buff">Increases</span> the chance the{" "}
        <span className="debuff">enemy target</span> will be hit by spell
        attacks by <span className="buff-value">3%</span>.
      </div>
    ),
  },

  {
    name: "Spell Power",
    source: ["Elemental Shaman", "Shamans", "Demonology Warlocks"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">
          Totem of Wrath, Flametongue Totem, Demonic Pact
        </div>
        <div>
          <span className="buff">Increases</span> Spell Power by x for all{" "}
          <span className="buff">party and raid members</span>.
        </div>

        <div>
          Totem of Wrath: <span className="buff-value">280</span>.
        </div>

        <div>
          Flametongue Totem: <span className="buff-value">144</span>.
        </div>
        <div>
          Demonic Pact: <span className="buff-value">10%</span> of Warlocks
          Spell Damage.
        </div>
        <div className="fine-print">
          When the Warlock acquires enough Spell Power Demonic Pact will
          overshadow any other buff, note that the crit from Totem of Wrath
          still applies, even if the spell power might not.{" "}
        </div>
      </div>
    ),
  },

  {
    name: "Spirit",
    source: ["Priests", "Affliction Warlock"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Divine Spirit, Fel Intelligence</div>
        <div>
          <span className="buff">Increases</span> Spirit by x
        </div>

        <div>
          Divine Spirit: <span className="buff-value">80</span>.
        </div>

        <div>
          Fel Intelligence: <span className="buff-value">64</span>.
        </div>
      </div>
    ),
  },

  {
    name: "Stamina",
    source: ["Priests"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names">Power Word: Fortitude</div>
        <span className="buff">Increases</span> Stamina by{" "}
        <span className="buff-value">165</span>.
      </div>
    ),
  },
  {
    name: "Stats 10%",
    source: ["Paladins"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names"> Blessing of Kings</div>
        <span className="buff">Increases</span> stats by{" "}
        <span className="buff-value">10%</span>.
        <div className="fine-print">
          Alternatively, Drums of the Forgotten Kings provide 8% all stats and
          can be bought off the auction house.
        </div>
      </div>
    ),
  },
  {
    name: "Attack Speed Reduce",
    source: ["Warriors"],
    image: require("./images/dk_unholy.png").default,
    text: (
      <div>
        <div className="spell-names"> Thunderclap</div>
        <span className="debuff">Reduces</span> boss Attack Speed by{" "}
        <span className="buff-value">10%</span>.
      </div>
    ),
  },
];

export default BuffArray;
