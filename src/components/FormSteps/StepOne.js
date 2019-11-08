import React from "react";

const StepOne = props => {
  const saveAndContinue = () => {
    props.next();
  };

  return (
    <form>
      <label htmlFor="email">
        <input
          type="email"
          id="email"
          name="email"
          value={props.value.email}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="username">
        <input
          type="text"
          id="username"
          name="username"
          value={props.value.username}
          onChange={props.handleChange}
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          id="password"
          name="password"
          value={props.value.password}
          onChange={props.handleChange}
        />
      </label>
      <button onClick={saveAndContinue}>Continue</button>
    </form>
  );
};

export default StepOne;
