import React, { memo } from "react";
import {
  ManaIcon,
  CooldownIcon,
  StyledRaidCooldowns,
  PowerUpIcon,
  CombatResIcon,
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
  const ManaCooldowns = ["Mana Tide Totem", "Hymn of Hope", "Innervate"];
  const CombatResCooldowns = ["Rebirth"];
  const PowerUpCooldowns = ["Hysteria", "Power Infusion", "Bloodlust/Heroism"];
  const raidUtilities = Object.values(utilities);

  const ourRaidCooldowns = [];
  const ourManaCooldowns = [];
  const ourBattleResCooldowns = [];
  const ourPowerUpCooldowns = [];

  for (let ourUtilities of raidUtilities) {
    for (let utility of ourUtilities) {
      if (raidCooldowns.includes(utility.name)) {
        ourRaidCooldowns.push([utility]);
      } else if (ManaCooldowns.includes(utility.name)) {
        ourManaCooldowns.push([utility]);
      } else if (CombatResCooldowns.includes(utility.name)) {
        ourBattleResCooldowns.push([utility]);
      } else if (PowerUpCooldowns.includes(utility.name)) {
        ourPowerUpCooldowns.push([utility]);
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
      </div>
    </StyledRaidCooldowns>
  );
};

export default memo(RaidCooldowns);
