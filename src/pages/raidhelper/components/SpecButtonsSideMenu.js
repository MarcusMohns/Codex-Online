import { memo } from "react";
import SpecButton from "./SpecButton";
import SpecArray from "../../../data/SpecArray";
import { SpecContainer } from "../styles/RaidHelper.styled";

const SpecButtonsSideMenu = ({
  handleSpecTooltip,
  onClick,
  handleCloseSideMenu,
}) => {
  return (
    <SpecContainer>
      <button onClick={handleCloseSideMenu} className="close-button">
        ×
      </button>
      <div className={"spec-buttons"}>
        {SpecArray.map((spec) => (
          <SpecButton
            spec={spec}
            handleSpecTooltip={handleSpecTooltip}
            onClick={() => onClick(spec)}
            key={spec.text}
          />
        ))}
      </div>
    </SpecContainer>
  );
};

export default memo(SpecButtonsSideMenu);
