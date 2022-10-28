import React from "react";
import { Main } from "../components/styles/HitCapHelper.styled";
import { useState } from "react";

const HitCapHelper = () => {
  const state = {
    step: 1,
    pveOrPvp: "",
    classAndSpec: "",
    talentPoints: "",
    raidBuffsPresent: "",
  };

  const [stepState, setStepState] = useState(state);

  const prevStep = () => {
    const { step } = state;
    setStepState({ step: step - 1 });
  };

  const nextStep = () => {
    const { step } = state;
    setStepState({ step: step + 1 });
  };

  const handleChange = (input) => (e) => {
    setStepState({ [input]: e.target.value });
  };

  return (
    <>
      <Main>What</Main>;
    </>
  );
};

export default HitCapHelper;
