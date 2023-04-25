const RaidRole = ({ player }) => {
  switch (player.role) {
    case "tank":
      return (
        <img
          className="role-icon"
          src="images/Tank_icon.png"
          srcSet="images/Tank_icon.png 1x"
          alt="shield"
        />
      );
    case "healer":
      return (
        <img
          className="role-icon"
          src="images/Healer_icon.png"
          srcSet="images/Healer_icon.png 1x"
          alt="plus sign"
        />
      );
    case "dps":
      return (
        <img
          className="role-icon"
          src="images/DPS_icon.png"
          srcSet="images/DPS_icon.png 1x"
          alt="sword"
        />
      );
    default:
      return (
        <img
          className="role-icon"
          src="images/DPS_icon.png"
          srcSet="images/DPS_icon.png 1x"
          alt="sword"
        />
      );
  }
};

export default RaidRole;
