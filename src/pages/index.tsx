import { Inter } from 'next/font/google'
import { useState } from "react";
import Pet from './Pet'
import PetOwnwer from './PetOwner'

const inter = Inter({ subsets: ['latin'] })


export default function ContacForm() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center">

      
      <div className="bg-white p-6 rounded-lg shadow-md w-full lg:max-w-xl">
      <div className='comfortaa text-s text-center my-5'>
          Thank you for considering Electric Sheep Veterinary Clinic for your pet's needs. Please fill out our new client/patient contact form in entirety to ensure we can provide you and your pet with the best possible care.
      </div>
      <hr />
        <div className="flex mb-4">
          <div className={`w-1/2 border-r border-gray-400 ${step === 1 ? "bg-blue-500 text-white" : "bg-gray-200" } p-2 text-center cursor-pointer`} onClick={() => setStep(1)}>
            Step 1
          </div>
          <div
            className={`w-1/2 ${step === 2 ? "bg-blue-500 text-white" : "bg-gray-200" } p-2 text-center cursor-pointer`} onClick={() => setStep(2)}>
            Step 2
          </div>
        </div>
        {step === 1 ? <PetOwnwer /> : <Pet />}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button className="bg-gray-300 px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400" onClick={handleBack}>
              Back
            </button>
          )}
          {step < 2 && (
            <button className="bg-blue-500 px-6 py-1.5 rounded-lg text-white hover:bg-blue-600" onClick={handleNext}>
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
