const healerIcon = <img src="images/Healer_icon.png" alt="plus sign" />;
const tankIcon = <img src="images/Tank_icon.png" alt="shield" />;
const dpsIcon = <img src="images/DPS_icon.png" alt="sword" />;

const RaidRole = ({ player }) => {
  switch (player.role) {
    case "tank":
      return <div className="role-img">{tankIcon}</div>;
    case "healer":
      return <div className="role-img">{healerIcon}</div>;
    case "dps":
      return <div className="role-img">{dpsIcon}</div>;
    default:
      return <div className="role-img">{dpsIcon}</div>;
  }
};

export default RaidRole;
