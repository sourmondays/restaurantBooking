import React, { useState, useReducer } from "react";
import { UserReducer, DefaultUser } from "../Form/userReducer";
import FormSteps from '../Form/formSteps';

const Main = () => {
  let [step, setStep] = useState(0)
  const [user, setUser] = useReducer(UserReducer, DefaultUser)
  let steps = FormSteps(step, setStep, user, setUser)

  return (
    <>
      <div>
        {/* <h1>Register User: {steps[`${step}`].title} </h1> */}

        <div>{steps[`${step}`].content}</div>
      </div>
    </>
  );
};

export default Main;
