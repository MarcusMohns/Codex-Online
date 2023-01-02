import React from "react";
import { Main } from "../components/styles/HitCapHelper.styled";
import { useState } from "react";
import ClassAndSpec from "../components/hitcaphelper/ClassAndSpec";
import PveOrPvp from "../components/hitcaphelper/PveOrPvp";
import RaidBuffsPresent from "../components/hitcaphelper/RaidBuffsPresent";
import TalentPoints from "../components/hitcaphelper/TalentPoints";
import Result from "../components/hitcaphelper/Result";
import SpecArray from "../SpecArray";
import Draenei from "../components/hitcaphelper/Draenei";

const HitCapHelper = () => {
  const state = {
    step: 1,
    classAndSpec: "",
    pveOrPvp: "",
    draenei: "",
    talentPoints: "",
    raidHitBuff: "",
    result: "",
  };

  const [stepState, setStepState] = useState(state);
  const { step } = stepState;
  const { pveOrPvp, classAndSpec, draenei, talentPoints, raidHitBuff } =
    stepState;
  const values = { pveOrPvp, classAndSpec, draenei, talentPoints, raidHitBuff };

  const prevStep = (numOfSteps, stepPage) => {
    if (stepPage) {
      setStepState({ ...stepState, [stepPage]: "", step: step - numOfSteps });
    } else {
      setStepState({ ...stepState, step: step - numOfSteps });
    }
  };

  const nextStep = (numOfSteps) => {
    numOfSteps
      ? setStepState({ ...stepState, step: step + numOfSteps })
      : setStepState({ ...stepState, step: step + 1 });
  };

  const handleChange = (input, multiplier) => (e) => {
    if (e.target.type === "checkbox") {
      e.target.checked
        ? setStepState({ ...stepState, [input]: e.target.value })
        : setStepState({ ...stepState, [input]: "" });
    } else if (e.target.type === "range") {
      setStepState({ ...stepState, [input]: e.target.value * multiplier });
    } else {
      setStepState({ ...stepState, [input]: e.target.value });
    }
  };

  const hitTalentClasses = [
    "Blood Death Knight",
    "Unholy Death Knight",
    "Frost Death Knight",
    "Enhancement Shaman",
    "Balance Druid",
    "Elemental Shaman",
    "Restoration Shaman",
    "Beast Mastery Hunter",
    "Marksman Hunter",
    "Survival Hunter",
    "Arcane Mage",
    "Fire Mage",
    "Frost Mage",
    "Assassination Rogue",
    "Combat Rogue",
    "Subtlety Rogue",
    "Shadow Priest",
    "Affliction Warlock",
    "Demonology Warlock",
    "Destruction Warlock",
    "Arms Warrior",
    "Fury Warrior",
    "Protection Warrior",
  ];

  const casters = [
    "Balance Druid",
    "Arcane Mage",
    "Fire Mage",
    "Frost Mage",
    "Shadow Priest",
    "ELemental Shaman",
    "Affliction Warlock",
    "Demonology Warlock",
    "Destruction Warlock",
    "Discipline Priest",
    "Restoration Druid",
    "Restoration Shaman",
    "Holy Priest",
  ];

  switch (step) {
    case 1:
      return (
        <Main>
          <ClassAndSpec
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            SpecArray={SpecArray}
          />
        </Main>
      );
    case 2:
      return (
        <Main>
          <PveOrPvp
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
          />
        </Main>
      );
    case 3:
      return (
        <Main>
          <Draenei
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            hitTalentClasses={hitTalentClasses}
            casters={casters}
          />
        </Main>
      );
    case 4:
      return (
        <Main>
          <RaidBuffsPresent
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            hitTalentClasses={hitTalentClasses}
          />
        </Main>
      );
    case 5:
      return (
        <Main>
          <TalentPoints
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            casters={casters}
          />
        </Main>
      );
    case 6:
      return (
        <Main>
          <Result
            prevStep={prevStep}
            nextStep={nextStep}
            handleChange={handleChange}
            values={values}
            hitTalentClasses={hitTalentClasses}
            casters={casters}
          />
        </Main>
      );
    default:
    // do nothing
  }
};

export default HitCapHelper;
