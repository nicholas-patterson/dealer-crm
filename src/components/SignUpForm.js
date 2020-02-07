import React, { useState } from "react";
import StepOne from "./FormSteps/StepOne";
import StepTwo from "./FormSteps/StepTwo";
import Logo from "./Logo/Logo";

const SignUpForm = () => {
  const [form, setForm] = useState({
    dealer_email: "",
    dealer_username: "",
    dealer_password: "",
    dealer_name: "",
    dealer_street: "",
    dealer_city: "",
    dealer_state: "",
    dealer_country: "",
    dealer_zipcode: ""
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
      <div className="wrapper">
        <div className="signup-form">
          <Logo />
          <div className="signup-form__stepper">
            <ul className="signup-form__stepper--unorderedlist">
              <li
                className={
                  "signup-form__stepper--item " +
                  (currentStep === 1 ? "one" : "dark")
                }
              >
                1
              </li>
              <li
                className={
                  "signup-form__stepper--item " +
                  (currentStep === 2 ? "two" : "dark")
                }
              >
                2
              </li>
            </ul>
          </div>
          {formSwitch()}
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
