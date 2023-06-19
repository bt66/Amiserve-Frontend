import { useState } from "react";
// import Head from "next/head";
import CloseIcon from "../../assets/close.svg";

import FormCard from "../../components/FormCard";

import {
  BillingInfo,
  ConfirmPurchase,
  ProjectInfo,
  DomainAndSSL,
} from "../../components/Forms";

import FormCompleted from "../../components/FormCompleted";

const AddProjectForm = ({handleClose}) => {
    const [formStep, setFormStep] = useState(0);

    const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
    const editDataStep = (step) => setFormStep(step);

    const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);

    return (
        <div className='p-2 absolute z-20 w-full h-screen bg-black bg-opacity-60'>
            <div className='bg-[#9F49F5] p-1 rounded-xl'>
                <div className='bg-[#3B2164] rounded-xl'>
                    <div className='flex justify-between items-center'>
                        <div>
                            <p className='text-3xl'>Add Project</p>
                        </div>
                        <div onClick={handleClose}>
                            <img src={CloseIcon} alt='close Icon'></img>
                        </div>
                    </div>
                    {/* content */}
                    <div>
                        <h1>Please fill the form correctly</h1>
                        <FormCard currentStep={formStep}  prevFormStep={prevFormStep}>
                            {formStep >= 0 && (
                            <ProjectInfo formStep={formStep} nextFormStep={nextFormStep} />
                            )}
                            {formStep >= 1 && (
                            <DomainAndSSL formStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} />
                            )}
                            {formStep >= 2 && (
                            <ConfirmPurchase formStep={formStep} nextFormStep={nextFormStep} prevFormStep={prevFormStep} editDataStep={editDataStep} />
                            )}

                            {formStep > 2 && <FormCompleted />}
                        </FormCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProjectForm;
