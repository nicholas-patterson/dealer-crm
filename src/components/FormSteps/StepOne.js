import React from "react";

const StepOne = props => {
  const saveAndContinue = () => {
    props.next();
  };

  return (
    <form className="stepOne">
      <label htmlFor="email">
        <i class="icon fas fa-envelope"></i>
        <input
          type="email"
          id="email"
          name="email"
          value={props.value.email}
          onChange={props.handleChange}
          placeholder="Email..."
        />
      </label>
      <label htmlFor="username">
        <i className="icon fas fa-user"></i>
        <input
          type="text"
          id="username"
          name="username"
          value={props.value.username}
          onChange={props.handleChange}
          placeholder="Username..."
        />
      </label>
      <label htmlFor="password">
        <i className="icon fas fa-lock"></i>
        <input
          type="password"
          id="password"
          name="password"
          value={props.value.password}
          onChange={props.handleChange}
          placeholder="Password..."
        />
      </label>

      {props.value.email.length === 0 ||
      props.value.username.length === 0 ||
      props.value.password.length === 0 ? (
        <button disabled className="disabledBtn button">
          Continue
        </button>
      ) : (
        <button className="continueBtn button" onClick={saveAndContinue}>
          Continue
        </button>
      )}
    </form>
  );
};

export default StepOne;
