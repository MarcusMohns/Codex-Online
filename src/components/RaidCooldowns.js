import React, { memo } from "react";
import {
  ManaIcon,
  CooldownIcon,
  StyledRaidCooldowns,
  PowerUpIcon,
  CombatResIcon,
  MisdirectionCooldownIcon,
} from "./styles/RaidAssembler.styled";
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
  ];
  const manaCooldowns = ["Mana Tide Totem", "Hymn of Hope", "Innervate"];
  const combatResCooldowns = ["Rebirth"];
  const powerUpCooldowns = ["Hysteria", "Power Infusion", "Bloodlust/Heroism"];
  const misdirectCooldowns = ["Misdirection", "Tricks of the Trade"];
  const raidUtilities = Object.values(utilities);

  const ourRaidCooldowns = [];
  const ourManaCooldowns = [];
  const ourBattleResCooldowns = [];
  const ourPowerUpCooldowns = [];
  const ourMisdirectCooldowns = [];

  for (let ourUtilities of raidUtilities) {
    for (let utility of ourUtilities) {
      if (raidCooldowns.includes(utility.name)) {
        ourRaidCooldowns.push([utility]);
      } else if (manaCooldowns.includes(utility.name)) {
        ourManaCooldowns.push([utility]);
      } else if (combatResCooldowns.includes(utility.name)) {
        ourBattleResCooldowns.push([utility]);
      } else if (powerUpCooldowns.includes(utility.name)) {
        ourPowerUpCooldowns.push([utility]);
      } else if (misdirectCooldowns.includes(utility.name)) {
        ourMisdirectCooldowns.push([utility]);
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
        <Utilities utilities={ourBattleResCooldowns} />
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
