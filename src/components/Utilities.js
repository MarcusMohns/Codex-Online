import { StyledUtilities } from "./styles/RaidAssembler.styled";
import Utility from "./Utility";
import { memo } from "react";

const Utilities = ({ utilities }) => {
  const allUtilities = Object.values(utilities);
  let currentUtils = [];
  let existsAlready = [];

  for (let playerUtility of allUtilities) {
    for (let aUtility of playerUtility) {
      if (!existsAlready.includes(aUtility.name)) {
        existsAlready = [...existsAlready, aUtility.name];
        currentUtils = [
          ...currentUtils,
          {
            name: aUtility.name,
            image: aUtility.image,
            link: aUtility.link,
            spellId: aUtility.spellId,
            count: 1,
          },
        ];
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
      {currentUtils.map((utility, index) => (
        <Utility
          key={(utility.name + utility.count, index)}
          utility={utility}
        />
      ))}
    </StyledUtilities>
  );
};

export default memo(Utilities);
