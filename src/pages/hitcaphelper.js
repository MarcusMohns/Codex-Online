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
    raidBuffsPresent: "",
    result: "",
  };

  const [stepState, setStepState] = useState(state);
  const { step } = stepState;
  const { pveOrPvp, classAndSpec, talentPoints, raidBuffsPresent } = stepState;
  const values = { pveOrPvp, classAndSpec, talentPoints, raidBuffsPresent };

  const prevStep = () => {
    setStepState({ step: step - 1 });
  };

  const nextStep = () => {
    setStepState({ ...stepState, step: step + 1 });
  };

  const handleChange = (input) => (e) => {
    setStepState({ ...stepState, [input]: e.target.value });
    console.log(stepState);
  };

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
      console.log(step);
    // do nothing
  }
};

export default HitCapHelper;
