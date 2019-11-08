import React, { useState } from "react";
import Header from "./Header";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";

const SignUpForm = () => {
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    dealership_name: "",
    dealership_street: "",
    dealership_city: "",
    dealership_state: "",
    dealership_country: "",
    dealership_zipcode: ""
  });

  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    setCurrentStep(currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(form);
  };

  const formSwitch = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            next={next}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={form}
          />
        );
      case 2:
        return (
          <StepTwo
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={form}
            prev={prev}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="form">
          <h4>Sign Up</h4>
          {formSwitch()}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
