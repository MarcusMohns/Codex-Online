import React from "react";
import { Main } from "../components/styles/HitCapHelper.styled";
import { useState } from "react";
import ClassAndSpec from "../components/hitcaphelper/ClassAndSpec";
import PveOrPvp from "../components/hitcaphelper/PveOrPvp";
import RaidBuffsPresent from "../components/hitcaphelper/RaidBuffsPresent";
import TalentPoints from "../components/hitcaphelper/TalentPoints";
import Result from "../components/hitcaphelper/Result";
import SpecArray from "../SpecArray";

const HitCapHelper = () => {
  const state = {
    step: 1,
    classAndSpec: "",
    pveOrPvp: "",
    talentPoints: "",
    raidHitbuff: "",
    result: "",
  };

  const [stepState, setStepState] = useState(state);
  const { step } = stepState;
  const { pveOrPvp, classAndSpec, talentPoints, raidHitbuff } = stepState;
  const values = { pveOrPvp, classAndSpec, talentPoints, raidHitbuff };

  const prevStep = (numOfSteps) => {
    numOfSteps
      ? setStepState({ ...stepState, step: step - numOfSteps })
      : setStepState({ ...stepState, step: step - 1 });
  };

  const nextStep = (numOfSteps) => {
    numOfSteps
      ? setStepState({ ...stepState, step: step + numOfSteps })
      : setStepState({ ...stepState, step: step + 1 });
  };

  const handleChange = (input) => (e) => {
    if (e.target.type === "checkbox") {
      e.target.checked
        ? setStepState({ ...stepState, [input]: e.target.value })
        : setStepState({ ...stepState, [input]: "" });
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
            hitTalentClasses={hitTalentClasses}
            casters={casters}
          />
        </Main>
      );
    case 3:
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
    case 4:
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
    case 5:
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
