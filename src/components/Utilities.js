import Utility from "./Utility";
const Utilities = ({ utilities }) => {
  utilities = Object.values(utilities);
  return (
    <div>
      {utilities.map((utility) => (
        <Utility utility={utility} />
      ))}
    </div>
  );
};

export default Utilities;
