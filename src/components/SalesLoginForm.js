import React, { useState } from "react";
import { navigate } from "@reach/router";
import Logo from "./Logo/Logo";
//import { Link } from "@reach/router";
import { salesLoginUser } from "../actions/index";
import { connect } from "react-redux";

const SalesLoginForm = props => {
  const [user, setUser] = useState({
    salesman_username: "",
    salesman_password: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    props.salesLoginUser(user, navigate);
  };

  return (
    <>
      <div className="login-wrapper">
        <div className="login-form">
          <Logo />
          <div className="login-form-container">
            <form className="login-stepOne">
              <h2 className="login-title">Salesman Account Log In</h2>
              <label htmlFor="username">
                <i className="icon fas fa-user"></i>
                <input
                  type="text"
                  id="username"
                  name="salesman_username"
                  value={user.salesman_username}
                  onChange={handleChange}
                  placeholder="Username..."
                />
              </label>
              <label htmlFor="password">
                <i className="icon fas fa-lock"></i>
                <input
                  type="password"
                  id="password"
                  name="salesman_password"
                  value={user.salesman_password}
                  onChange={handleChange}
                  placeholder="Password..."
                />
              </label>
              {!user.salesman_username || !user.salesman_password ? (
                <button type="button" className="button disabledBtn" disabled>
                  Log In
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="continueBtn button"
                >
                  Log In
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { salesLoginUser })(SalesLoginForm);
