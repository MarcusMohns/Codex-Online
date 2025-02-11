const RaidRole = ({ player }) => {
  switch (player.role) {
    case "tank":
      return <p className="role-icon">🛡️</p>;
    case "healer":
      return <p className="role-icon">➕</p>;
    case "dps":
      return <p className="role-icon">⚔️</p>;
    default:
      return <p className="role-icon">⚔️</p>;
  }
};

export default RaidRole;
