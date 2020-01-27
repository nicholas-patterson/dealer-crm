import React, { useState } from "react";

import Logo from "./Logo/Logo";

const LogInForm = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <div className="wrapper">
        <div className="login-form">
          <Logo />
          <div className="login-form-container">
            <form className="login-stepOne">
              <h2 className="login-title">Account Log In</h2>
              <label htmlFor="username">
                <i className="icon fas fa-user"></i>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                  placeholder="Username..."
                />
              </label>
              <label htmlFor="password">
                <i className="icon fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  placeholder="Password..."
                />
              </label>
              {!user.username || !user.password ? (
                <button className="button disabledBtn" disabled>
                  Log In
                </button>
              ) : (
                <button className="continueBtn button">Log In</button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInForm;
