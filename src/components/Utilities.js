import { StyledUtilities } from "./styles/RaidAssembler.styled";
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
    <StyledUtilities>
      {currentUtils.map((utility) => (
        <Utility key={utility.name + utility.count} utility={utility} />
      ))}
    </StyledUtilities>
  );
};

export default Utilities;
