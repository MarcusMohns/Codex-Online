import Utility from "./Utility";
const Utilities = ({ utilities }) => {
  utilities = Object.values(utilities);

  return (
    <div>
      {utilities.map((utility, index) => (
        <Utility key={index} utility={utility} />
      ))}
    </div>
  );
};

export default Utilities;
