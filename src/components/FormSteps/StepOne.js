import React from "react";

const StepOne = props => {
  const saveAndContinue = () => {
    props.next();
  };

  return (
    <form className="signup-stepOne">
      <label htmlFor="email">
        <i className="icon fas fa-envelope"></i>
        <input
          type="email"
          id="email"
          name="dealer_email"
          value={props.value.dealer_email}
          onChange={props.handleChange}
          placeholder="Email..."
          required
        />
      </label>
      <label htmlFor="username">
        <i className="icon fas fa-user"></i>
        <input
          type="text"
          id="username"
          name="dealer_username"
          value={props.value.dealer_username}
          onChange={props.handleChange}
          placeholder="Username..."
          required
        />
      </label>
      <label htmlFor="password">
        <i className="icon fas fa-lock"></i>
        <input
          type="password"
          id="password"
          name="dealer_password"
          value={props.value.dealer_password}
          onChange={props.handleChange}
          placeholder="Password..."
          required
        />
      </label>

      {props.value.dealer_email.length === 0 ||
      props.value.dealer_username.length === 0 ||
      props.value.dealer_password.length === 0 ? (
        <button disabled type="button" className="disabledBtn button">
          Continue
        </button>
      ) : (
        <button
          className="continueBtn button"
          type="button"
          onClick={saveAndContinue}
        >
          Continue
        </button>
      )}
    </form>
  );
};

export default StepOne;
