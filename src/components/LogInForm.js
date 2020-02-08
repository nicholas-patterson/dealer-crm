import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { connect } from "react-redux";
import { loginUser, getUserType } from "../actions/index";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";

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

  const handleSubmit = e => {
    e.preventDefault();
    console.log(user);
    props.loginUser(user, navigate);
  };

  const handleSalesForm = e => {
    props.getUserType("salesman");
  };

  return (
    <>
      <div className="wrapper">
        <div className="login-form">
          <Logo />
          <div className="login-form-container">
            <form className="login-stepOne">
              <h2 className="login-title">Dealer Account Log In</h2>
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
            <span
              style={{
                textAlign: "center",
                display: "block",
                fontWeight: 300,
                paddingTop: "2rem"
              }}
            >
              Salesman Login{" "}
              <Link
                onClick={handleSalesForm}
                style={{
                  color: "white",
                  borderBottom: "1px solid #39c"
                }}
                to="/saleslogin"
              >
                Click Here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(null, { loginUser, getUserType })(LogInForm);
