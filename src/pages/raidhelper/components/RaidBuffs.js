import RaidBuff from "./RaidBuff";

const RaidBuffs = ({ buffs }) => {
  return (
    <div>
      {buffs.map((buff, id) => (
        <RaidBuff key={id} text={buff} />
      ))}
    </div>
  );
};

export default RaidBuffs;
