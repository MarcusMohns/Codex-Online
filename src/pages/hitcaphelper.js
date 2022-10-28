import React from "react";
import { Main } from "../components/styles/HitCapHelper.styled";
import { useState } from "react";
import ClassAndSpec from "../components/hitcaphelper/ClassAndSpec";
import PveOrPvp from "../components/hitcaphelper/PveOrPvp";
import RaidBuffsPresent from "../components/hitcaphelper/RaidBuffsPresent";
import TalentPoints from "../components/hitcaphelper/TalentPoints";
import Result from "../components/hitcaphelper/Result";

const HitCapHelper = () => {
  const state = [
    { step: 1 },
    { pveOrPvp: "" },
    { classAndSpec: "" },
    { talentPoints: "" },
    { raidBuffsPresent: "" },
    { result: "" },
  ];

  const [stepState, setStepState] = useState(state);
  const { step } = stepState[0];
  const { pveOrPvp, classAndSpec, talentPoints, raidBuffsPresent } = state;
  const values = { pveOrPvp, classAndSpec, talentPoints, raidBuffsPresent };

  const prevStep = () => {
    setStepState({ step: step - 1 });
  };

  const nextStep = () => {
    setStepState([{ step: stepState[0].step + 1 }, ...stepState]);
    console.log(stepState[0].step);
  };

  const handleChange = (input) => (e) => {
    setStepState({ [input]: e.target.value });
  };

  switch (step) {
    case 1:
      return (
        <ClassAndSpec
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <PveOrPvp
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <RaidBuffsPresent
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return (
        <TalentPoints
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 5:
      return (
        <Result
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    // never forget the default case, otherwise VS code would be mad!
    default:
    // do nothing
  }
};

export default HitCapHelper;
