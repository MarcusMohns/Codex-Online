const healerIcon = <img src="images/Healer_icon.png" alt="plus sign" />;
const tankIcon = <img src="images/Tank_icon.png" alt="shield" />;
const dpsIcon = <img src="images/DPS_icon.png" alt="sword" />;

const RaidRole = ({ player }) => {
  if (player.role === "tank") {
    return <div className="role-img">{tankIcon}</div>;
  } else if (player.role === "healer") {
    return <div className="role-img">{healerIcon}</div>;
  } else {
    return <div className="role-img">{dpsIcon}</div>;
  }
};

export default RaidRole;
