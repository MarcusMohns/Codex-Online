import Utility from "./Utility";
const Utilities = ({ utilities }) => {
  utilities = Object.values(utilities);
  let currentUtils = [];
  const existsAlready = [];

  for (let playerUtility of utilities) {
    for (let aUtility of playerUtility) {
      if (!existsAlready.includes(aUtility.name)) {
        existsAlready.push(aUtility.name);
        currentUtils.push({
          name: aUtility.name,
          image: aUtility.image,
          count: 1,
        });
      } else {
        for (let util of currentUtils) {
          if (util.name === aUtility.name) {
            util.count++;
          }
        }
      }
    }
  }
  return (
    <div>
      {currentUtils.map((utility, index) => (
        <Utility key={index} utility={utility} />
      ))}
    </div>
  );
};

export default Utilities;
