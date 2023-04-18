const RaidRole = ({ player }) => {
  switch (player.role) {
    case "tank":
      return (
        <img className="role-icon" src="images/Tank_icon.png" alt="shield" />
      );
    case "healer":
      return (
        <img
          className="role-icon"
          src="images/Healer_icon.png"
          alt="plus sign"
        />
      );
    case "dps":
      return (
        <img className="role-icon" src="images/DPS_icon.png" alt="sword" />
      );
    default:
      return (
        <img className="role-icon" src="images/DPS_icon.png" alt="sword" />
      );
  }
};

export default RaidRole;
