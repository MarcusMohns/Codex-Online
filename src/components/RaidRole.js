const healerIcon = <img src="images/Healer_icon.png" alt="plus sign" />;
const tankIcon = <img src="images/Tank_icon.png" alt="shield" />;
const dpsIcon = <img src="images/DPS_icon.png" alt="sword" />;

const tanks = [
  "Protection Paladin",
  "Blood Death Knight",
  "Feral Druid",
  "Protection Warrior",
];
const healers = [
  "Discipline Priest",
  "Holy Priest",
  "Holy Paladin",
  "Restoration Druid",
  "Restoration Shaman",
];

const RaidRole = ({ classText }) => {
  if (tanks.includes(classText)) {
    return <div className="role-img">{tankIcon}</div>;
  } else if (healers.includes(classText)) {
    return <div className="role-img">{healerIcon}</div>;
  } else {
    return <div className="role-img">{dpsIcon}</div>;
  }
};

export default RaidRole;
