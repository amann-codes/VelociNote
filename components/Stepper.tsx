import React, { useState } from "react";
import CreateOrg from "./CreateOrg";
import AddMembers from "./AddMembers";

interface StepperProps {
    close: () => void;
  }

export default function Stepper({close}:StepperProps) {
  const [step, setStep] = useState(1);
  return (
    <div>
      {step === 1 && <CreateOrg close={close} next={()=>setStep(step + 1)} />}
      {step === 2 && <AddMembers close={close}/>}
    </div>
  );
}
