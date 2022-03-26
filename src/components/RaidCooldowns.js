import React from "react";
import { StyledRaidCooldowns } from "./styles/RaidAssembler.styled";
import Utilities from "./Utilities";
import { memo } from "react";

const RaidCooldowns = ({
  setRaidCooldownsOpen,
  raidCooldownsOpen,
  utilities,
}) => {
  const raidCooldowns = [
    "Rebirth",
    "Innervate",
    "Tranquility",
    "Divine Sacrifice",
    "Hand of Sacrifice",
    "Hand of Protection",
    "Aura Mastery",
    "Divine Hymn",
    "Pain Suppression",
    "Mana Tide Totem",
    "Hymn of Hope",
  ];

  const raidUtilities = Object.values(utilities);
  const ourRaidCooldowns = raidUtilities.map((ourUtilities) =>
    ourUtilities.filter(
      // Filter out spells that are not raidCooldowns but keep structure the same as utilities so we can pass it into existing <Utilities>
      (utility) => raidCooldowns.includes(utility.name) && utility
    )
  );

  return (
    <StyledRaidCooldowns
      onClick={() => setRaidCooldownsOpen(!raidCooldownsOpen)}
    >
      <div className="cooldown-panel" onClick={(e) => e.stopPropagation()}>
        <h2 className="cooldown-header">Raid Cooldowns</h2>
        <Utilities utilities={ourRaidCooldowns} />
      </div>
    </StyledRaidCooldowns>
  );
};

export default memo(RaidCooldowns);
