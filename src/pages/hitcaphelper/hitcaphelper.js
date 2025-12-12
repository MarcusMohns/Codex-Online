import React, { lazy, Suspense, useState } from "react";
import { Main } from "./styles/HitCapHelper.styled";
import SpecArray from "../../data/SpecArray";
import { Loader } from "../../components/Loader";
import { casters, hitTalentClasses } from "../../data/PlayersWithOptions";
import startViewTransitionWrapper from "../../store";

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
  const { pveOrPvp, classAndSpec, draenei, talentPoints, raidHitBuff, step } =
    stepState;
  const values = { pveOrPvp, classAndSpec, draenei, talentPoints, raidHitBuff };

  const prevStep = (numOfSteps, stepPage) => {
    if (stepPage) {
      startViewTransitionWrapper(() =>
        setStepState({ ...stepState, [stepPage]: "", step: step - numOfSteps })
      );
    } else {
      startViewTransitionWrapper(() =>
        setStepState({ ...stepState, step: step - numOfSteps })
      );
    }
  };

  const nextStep = (numOfSteps) => {
    numOfSteps
      ? startViewTransitionWrapper(() =>
          setStepState({ ...stepState, step: step + numOfSteps })
        )
      : startViewTransitionWrapper(() =>
          setStepState({ ...stepState, step: step + 1 })
        );
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
