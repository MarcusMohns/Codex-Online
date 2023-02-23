import React, { memo } from "react";
import {
  ManaIcon,
  CooldownIcon,
  StyledRaidCooldowns,
  PowerUpIcon,
  CombatResIcon,
  MisdirectionCooldownIcon,
} from "../styles/RaidHelper.styled";
import Utilities from "./Utilities";

const RaidCooldowns = ({
  setRaidCooldownsOpen,
  raidCooldownsOpen,
  utilities,
}) => {
  const raidCooldowns = [
    "Tranquility",
    "Divine Sacrifice",
    "Hand of Sacrifice",
    "Hand of Protection",
    "Aura Mastery",
    "Divine Hymn",
    "Pain Suppression",
    "Guardian Spirit",
  ];
  const manaCooldowns = ["Mana Tide Totem", "Hymn of Hope", "Innervate"];
  const combatResCooldowns = ["Rebirth", "Create Soulstone"];
  const powerUpCooldowns = ["Hysteria", "Power Infusion", "Bloodlust/Heroism"];
  const misdirectCooldowns = ["Misdirection", "Tricks of the Trade"];
  const raidUtilities = Object.values(utilities);

  let ourRaidCooldowns = [];
  let ourManaCooldowns = [];
  let ourCombatResCooldowns = [];
  let ourPowerUpCooldowns = [];
  let ourMisdirectCooldowns = [];

  for (let ourUtilities of raidUtilities) {
    for (let utility of ourUtilities) {
      if (raidCooldowns.includes(utility.name)) {
        ourRaidCooldowns = [...ourRaidCooldowns, [utility]];
      } else if (manaCooldowns.includes(utility.name)) {
        ourManaCooldowns = [...ourManaCooldowns, [utility]];
      } else if (combatResCooldowns.includes(utility.name)) {
        ourCombatResCooldowns = [...ourCombatResCooldowns, [utility]];
      } else if (powerUpCooldowns.includes(utility.name)) {
        ourPowerUpCooldowns = [...ourPowerUpCooldowns, [utility]];
      } else if (misdirectCooldowns.includes(utility.name)) {
        ourMisdirectCooldowns = [...ourMisdirectCooldowns, [utility]];
      }
    }
  }

  return (
    <StyledRaidCooldowns
      onClick={() => setRaidCooldownsOpen(!raidCooldownsOpen)}
    >
      <div className="cooldown-panel" onClick={(e) => e.stopPropagation()}>
        <h2 className="cooldown-header">Raid Cooldowns</h2>
        <h3 className="cooldown-subheader">
          <CooldownIcon />
          Damage Reduction & Healing
        </h3>
        <Utilities utilities={ourRaidCooldowns} />
        <h3 className="cooldown-subheader">
          <ManaIcon />
          Mana Restore
        </h3>
        <Utilities utilities={ourManaCooldowns} />
        <h3 className="cooldown-subheader">
          <PowerUpIcon />
          Powerups
        </h3>
        <Utilities utilities={ourPowerUpCooldowns} />
        <h3 className="cooldown-subheader">
          <CombatResIcon />
          Combat Ressurections
        </h3>
        <Utilities utilities={ourCombatResCooldowns} />
        <h3 className="cooldown-subheader">
          <MisdirectionCooldownIcon />
          Misdirection Effects
        </h3>
        <Utilities utilities={ourMisdirectCooldowns} />
      </div>
    </StyledRaidCooldowns>
  );
};

export default memo(RaidCooldowns);
