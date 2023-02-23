import React, { lazy, Suspense, useState } from "react";
import { Main } from "./styles/HitCapHelper.styled";
import SpecArray from "../../data/SpecArray";
import { Loader } from "../../components/Loader";
const ClassAndSpec = lazy(() => import("./steps/ClassAndSpec"));
const PveOrPvp = lazy(() => import("./steps/PveOrPvp"));
const Result = lazy(() => import("./steps/Result"));
const RaidBuffsPresent = lazy(() => import("./steps/RaidBuffsPresent"));
const TalentPoints = lazy(() => import("./steps/TalentPoints"));
const Draenei = lazy(() => import("./steps/Draenei"));

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

  const resetStep = () => {
    setStepState({
      step: 1,
      classAndSpec: "",
      pveOrPvp: "",
      draenei: "",
      talentPoints: "",
      raidHitBuff: "",
      result: "",
    });
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
          <Suspense fallback={<Loader />}>
            <ClassAndSpec
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
              SpecArray={SpecArray}
            />
          </Suspense>
        </Main>
      );
    case 2:
      return (
        <Main>
          <Suspense fallback={<Loader />}>
            <PveOrPvp
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
            />
          </Suspense>
        </Main>
      );
    case 3:
      return (
        <Main>
          <Suspense fallback={<Loader />}>
            <Draenei
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
              hitTalentClasses={hitTalentClasses}
              casters={casters}
            />
          </Suspense>
        </Main>
      );
    case 4:
      return (
        <Main>
          <Suspense fallback={<Loader />}>
            <RaidBuffsPresent
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
              hitTalentClasses={hitTalentClasses}
            />
          </Suspense>
        </Main>
      );
    case 5:
      return (
        <Main>
          <Suspense fallback={<Loader />}>
            <TalentPoints
              prevStep={prevStep}
              nextStep={nextStep}
              handleChange={handleChange}
              values={values}
              casters={casters}
            />
          </Suspense>
        </Main>
      );
    case 6:
      return (
        <Main>
          <Suspense fallback={<Loader />}>
            <Result
              prevStep={prevStep}
              nextStep={nextStep}
              resetStep={resetStep}
              handleChange={handleChange}
              values={values}
              hitTalentClasses={hitTalentClasses}
              casters={casters}
            />
          </Suspense>
        </Main>
      );
    default:
    // do nothing
  }
};

export default HitCapHelper;
