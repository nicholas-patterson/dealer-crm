import React, { useState } from "react";
import Logo from "./Logo/Logo";
import { connect } from "react-redux";
import { loginUser, getUserType, clearError } from "../actions/index";
import { navigate } from "@reach/router";
import { Link } from "@reach/router";
import Banner from "react-js-banner";

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
    props.loginUser(user, navigate);
    props.clearError();
  };

  const handleSalesForm = e => {
    props.getUserType("salesman");
  };

  return (
    <>
      <div className="login-wrapper">
        {props.errors ? (
          <Banner title={props.errors} visibleTime={3000} />
        ) : null}
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
              <span className="sales-login-link">
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
            </form>
            {/* <span
              style={{
                textAlign: "center",
                display: "block",
                fontWeight: 300,
                paddingTop: "2rem"
              }}
              className="sales-login-link"
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
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    errors: state.loginReducer.error
  };
};

export default connect(mapStateToProps, { loginUser, getUserType, clearError })(
  LogInForm
);
