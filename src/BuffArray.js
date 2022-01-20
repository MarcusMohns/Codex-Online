const BuffArray = [
  {
    name: "Agility and Strength",
    source: [
      <div key={"agility-and-strength-provided-by"}>
        <span id="death-knight">Death Knights</span>
        <span id="shaman">Shamans</span>
      </div>,
    ],
    image: "images/Strength_Of_Earth_Totem.png",
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
    source: [
      <div key={"armor-percent-provided-by"}>
        <span id="priest">Disc Priests</span>
        <span id="priest">Holy Priests</span>
        <span id="shaman">Restoration Shamans</span>
      </div>,
    ],

    image: "images/Ancestral_Healing.png",
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
    source: [
      <div key={"armor-provided-by"}>
        <span id="shaman">Shamans</span> <span id="paladin">Paladins</span>
      </div>,
    ],
    image: "images/Devotion_Aura.png",
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
    source: [
      <div key={"armor-reduction-major-provided-by"}>
        <span id="rogue">Rogues</span> <span id="warrior">Warriors</span>
      </div>,
    ],
    image: "images/Sunder_Armor.png",
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
    source: [
      <div key={"armor-reduction-minor-provided-by"}>
        <span id="druid">Druids</span> <span id="warlock">Warlocks</span>
      </div>,
    ],

    image: "images/Faerie_Fire.png",
    text: (
      <div>
        <div className="spell-names">Faerie Fire, Curse of Weakness</div>
        <span className="debuff">Decreases</span> the Armor of the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">5%</span>.
        <div className="fine-print">
          Warlocks using Curse of Weakness will suffer a DPS loss.
        </div>
      </div>
    ),
  },

  {
    name: "Attack Power %",
    source: [
      <div key={"attack-power-percent-provided-by"}>
        <span id="hunter">Marksman Hunter</span>
        <span id="shaman">Enhancement Shaman</span>
        <span id="death-knight">Blood Death Knight</span>
      </div>,
    ],
    image: "images/Trueshot_Aura.png",
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
    source: [
      <div key={"attack-power-provided-by"}>
        <span id="paladin">Paladins</span> <span id="warrior">Warriors</span>
      </div>,
    ],
    image: "images/Battle_Shout.png",
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
    source: [
      <div key={"bloodlust-provided-by"}>
        <span id="shaman">Shamans</span>
      </div>,
    ],
    image: "images/Bloodlust.png",
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
    source: [
      <div key={"bleed-damage-provided-by"}>
        <span id="warrior">Arms Warrior</span>
        <span id="druid">Feral Druid</span>
      </div>,
    ],
    image: "images/Trauma.png",
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
      <div key={"crit-strike-percent-provided-by"}>
        <span id="paladin">Protection Paladin</span>
        <span id="paladin">Retribution Paladin</span>
        <span id="rogue">Assassination Rogue</span>
        <span id="shaman">Elemental Shaman</span>
      </div>,
    ],
    image: "images/Totem_Of_Wrath.png",
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
    source: [
      <div key={"damage-percent-provided-by"}>
        <span id="hunter">Beast Mastery Hunter</span>
        <span id="paladin">Retribution Paladin</span>
        <span id="mage">Arcane Mage</span>
      </div>,
    ],
    image: "images/Sanctified_Retribution.png",
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
    source: [
      <div key={"damage-reduction-percent-provided-by"}>
        <span id="priest">Discipline Priest</span>
        <span id="paladin">Protection Paladin</span>
      </div>,
    ],
    image: "images/Renewed_Hope.png",
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
    source: [
      <div key={"disease-damage-provided-by"}>
        <span id="death-knight">Unholy Death Knight</span>
      </div>,
    ],
    image: "images/Crypt_Fever.png",
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
    source: [
      <div key={"haste-percent-provided-by"}>
        <span id="druid">Balance Druid</span>
        <span id="paladin">Retribution Paladin</span>
      </div>,
    ],
    image: "images/Moonkin_Form.png",
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
    source: [
      <div key={"healing-recieved-provided-by"}>
        <span id="druid">Restoration Druid</span>
        <span id="paladin">Protection Paladin</span>
      </div>,
    ],
    image: "images/Improved_Tree_Form.png",
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
    source: [
      <div key={"health-provided-by"}>
        <span id="warlock">Destruction Warlock</span>
        <span id="warrior">Warriors</span>
      </div>,
    ],
    image: "images/Commanding_Shout.png",
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
    source: [
      <div key={"intellect-provided-by"}>
        <span id="mage">Mages</span> <span id="warlock">Warlock</span>
      </div>,
    ],
    image: "images/Arcane_Intellect.png",
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
    source: [
      <div key={"mp5-provided-by"}>
        <span id="paladin">Paladins</span> <span id="shaman">Shamans</span>
      </div>,
    ],
    image: "images/Greater_Blessing_Of_Wisdom.png",
    text: (
      <div>
        <div className="spell-names">Blessing of Wisdom, Mana Spring Totem</div>
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
    source: [
      <div key={"melee-crit-provided-by"}>
        <span id="druid">Feral Druid</span>
        <span id="warrior">Fury Warrior</span>
      </div>,
    ],
    image: "images/Rampage.png",
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
    source: [
      <div key={"melee-haste-provided-by"}>
        <span id="shaman">Shamans</span>
        <span id="death-knight">Frost Death Knights</span>
        <span id="shaman">Enhancement Shamans</span>
      </div>,
    ],
    image: "images/Icy_Talons.png",
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
    source: [
      <div key={"motw-provided-by"}>
        <span id="druid">Druids</span>
      </div>,
    ],
    image: "images/Mark_Of_The_Wild.png",
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
    source: [
      <div key={"phys-vuln-provided-by"}>
        <span id="rogue">Combat Rogue</span>
        <span id="warrior">Arms Warrior</span>
      </div>,
    ],
    image: "images/Blood_Frenzy.png",
    text: (
      <div>
        <div className="spell-names">Savage Combat, Blood Frenzy</div>
        <span className="buff">Increases</span> physical damage caused to the{" "}
        <span className="debuff">enemy target</span> by{" "}
        <span className="buff-value">4%</span>.
      </div>
    ),
  },
  {
    name: "Improved Leader of the Pack",
    source: [
      <div key={"imp-leader-of-the-pack"}>
        <span id="druid">Feral Druid</span>
      </div>,
    ],

    image: "images/Leader_Of_The_Pack.png",
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
      <div key={"replenishment-provided-by"}>
        <span id="hunter">Survival Hunter</span>
        <span id="mage">Frost Mage</span>
        <span id="paladin">Retribution Paladin</span>
        <span id="priest">Shadow Priest</span>
        <span id="warlock">Destruction Warlock</span>
      </div>,
    ],
    image: "images/Replenishment.png",
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

    source: [
      <div key={"spell-crit-percent-provided-by"}>
        <span id="druid">Balance Druid</span>
        <span id="shaman">Elemental Shaman</span>
      </div>,
    ],

    image: "images/Elemental_Oath.png",
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
      <div key={"spell-crit-taken-provided-by"}>
        <span id="mage">Fire Mage</span> <span id="mage">Frost Mage</span>
        <span id="warlock">Affliction Warlock</span>
        <span id="warlock">Demonology Warlock</span>
      </div>,
    ],

    image: "images/Improved_Scorch.png",
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
    source: [
      <div key={"spell-damage-percent-provided-by"}>
        <span id="druid">Balance Druid</span>
        <span id="warlock">Warlocks</span>
        <span id="death-knight">Unholy Death Knights</span>
      </div>,
    ],
    image: "images/Earth_And_Moon.png",
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
    source: [
      <div key={"spell-haste-percent-provided-by"}>
        <span id="shaman">Shamans</span>
      </div>,
    ],
    image: "images/Wrath_Of_Air_Totem.png",
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
    source: [
      <div key={"spell-hit-provided-by"}>
        <span id="priest">Shadow Priest</span>
        <span id="druid">Balance Druid</span>
      </div>,
    ],

    image: "images/Misery.png",
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
    source: [
      <div key={"spell-power-provided-by"}>
        <span id="shaman">Elemental Shaman</span>
        <span id="warlock">Demonology Warlocks</span>
        <span id="shaman">Shamans</span>
      </div>,
    ],
    image: "images/Demonic_Pact.png",
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
    source: [
      <div key={"spirit-provided-by"}>
        <span id="priest">Priests</span>
        <span id="warlock">Affliction Warlock</span>
      </div>,
    ],
    image: "images/Divine_Spirit.png",
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
    source: [
      <div key={"stamina-provided-by"}>
        <span id="priest">Priests</span>
      </div>,
    ],
    image: "images/Power_Word_Fortitude.png",
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
    source: [
      <div key={"stats-percent-provided-by"}>
        <span id="paladin">Paladins</span>
      </div>,
    ],
    image: "images/Greater_Blessing_Of_Kings.png",
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
    name: "Attack Speed Reduction",
    source: [
      <div key={"attack-speed-reduction-provided-by"}>
        <span id="death-knight">Death Knights</span>
        <span id="warrior">Warriors</span>
      </div>,
    ],
    image: "images/Icy_Touch.png",
    text: (
      <div>
        <div className="spell-names">
          {" "}
          Icy Touch, Improved Icy Touch, Infected Wounds, Thunder Clap, Improved
          Thunder Clap
        </div>
        <span className="debuff">Reduces</span> Melee Attack Speed by{" "}
        <span className="buff-value">x</span>.
        <div>
          Icy Touch: <span className="buff-value">14%</span>.
        </div>
        <div>
          Improved Icy Touch: <span className="buff-value">20%</span>.
        </div>
        <div>
          Infected Wounds: <span className="buff-value">20%</span>.
        </div>
        <div>
          Thunder Clap: <span className="buff-value">10%</span>.
        </div>
        <div>
          Improved Thunder Clap: <span className="buff-value">20%</span>.
        </div>
      </div>
    ),
  },
  {
    name: "Attack Power Reduction",
    source: [
      <div key={"attack-power-reduction-provided-by"}>
        <span id="warrior">Warriors</span> <span id="warlock">Druids</span>
        <span id="druid">Warlocks</span>
      </div>,
    ],
    image: "images/Demoralizing_Shout.png",
    text: (
      <div>
        <div className="spell-names">
          Demoralizing Shout, Demoralizing Roar, Curse of Weakness
        </div>
        <span className="debuff">Decreases</span> nearby{" "}
        <span className="debuff">enemies'</span> attack power by{" "}
        <span className="buff-value">x</span>.
        <div>
          Demoralizing Shout: <span className="buff-value">411</span>.
        </div>
        <div>
          Improved Demoralizing Shout: <span className="buff-value">575</span>.
        </div>
        <div>
          Demoralizing Roar: <span className="buff-value">411</span>.
        </div>
        <div>
          Improved Demoralizing Roar: <span className="buff-value">575</span>.
        </div>
        <div>
          Curse of Weakness: <span className="buff-value">478</span>.
        </div>
        <div>
          Improved Curse of Weakness: <span className="buff-value">573</span>.
        </div>
        <div className="fine-print">
          Warlocks using Curse of Weakness will suffer a DPS loss.
        </div>
      </div>
    ),
  },
  {
    name: "Healing Reduction",
    source: [
      <div key={"healing-reduction-provided-by"}>
        <span id="hunter">Hunters</span> <span id="warlock">Arms Warrior</span>
        <span id="warlock">Fury Warrior</span> <span id="druid">Rogues</span>
      </div>,
    ],
    image: "images/Mortal_Strike.png",
    text: (
      <div>
        <div className="spell-names">
          {" "}
          Aimed Shot, Mortal Strike, Furious Attacks, Wound Poison
        </div>
        <span className="debuff">Decreases enemy target</span> Healing Taken by{" "}
        <span className="buff-value">50%</span>.
        <div className="fine-print">
          Rogues using Wound Poison will suffer a steep DPS loss.
        </div>
      </div>
    ),
  },
  {
    name: "Health Restore",
    source: [
      <div key={"health-restore-provided-by"}>
        <span id="paladin">Paladins</span>
      </div>,
    ],
    image: "images/Judgement_Of_Light.png",
    text: (
      <div>
        <div className="spell-names">Judgement of Light</div>
        Judges an <span className="debuff">enemy target</span> for 20 seconds,
        granting attacks made against the judged enemy a chance to heal{" "}
        <span className="buff-value">2%</span> of the{" "}
        <span className="buff">friendly targets'</span> health.
      </div>
    ),
  },
  {
    name: "Mana Restore",
    source: [
      <div key={"mana-restore-provided-by"}>
        <span id="paladin">Paladins</span>
      </div>,
    ],
    image: "images/Judgement_Of_Wisdom.png",
    text: (
      <div>
        <div className="spell-names">Judgement of Wisdom</div>
        Judges an <span className="debuff">enemy target</span> for 20 seconds,
        granting attacks made against the judged enemy a chance to restore{" "}
        <span className="buff-value">2%</span> of the{" "}
        <span className="buff">friendly targets'</span> mana.
      </div>
    ),
  },
];

export default BuffArray;
