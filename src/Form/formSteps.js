import React from 'react';
import FirstPage from './firstPage';
import SecondPage from './secondPage';
import Completed from './completed';

const FormSteps = (step, setStep, user, setUser) => [
    {
        title: 'First step',
        content: (
            <FirstPage
                setStep={setStep}
                step={step}
                user={user}
                setUser={setUser}
            />
        ),
    },
    {
        title: 'Second step',
        content: (
            <SecondPage setStep={setStep} step={step} user={user} setUser={setUser} />
        ),
    },
    {
        title: 'Complete',
        content: <Completed user={user} />,
    },
]
export default FormSteps
