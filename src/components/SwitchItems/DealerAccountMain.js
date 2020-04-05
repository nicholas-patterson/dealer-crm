import React, { useState } from "react";
import { connect } from "react-redux";
import {
  updateEmail,
  updatePassword,
  updateUsername,
  clearError,
} from "../../actions";
import Banner from "react-js-banner";
import { Helmet } from "react-helmet";

const DealerAccountMain = (props) => {
  const [personalInformation, setPersonalInformation] = useState({
    dealer_username: props.dealer_username || "",
    dealer_password: "",
  });

  const [emailInformation, setEmailInformation] = useState({
    dealer_email: props.dealer || "",
    dealer_password: "",
  });

  const [passwordInformation, setPasswordInformation] = useState({
    curent_password: "",
    new_password: "",
    confirm_new_password: "",
  });

  const handlePersonalInformationChange = (e) => {
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.target.value,
    });
  };

  const handlePersonalInformationSection = (e) => {
    e.preventDefault();
    setPersonalInformation({ dealer_password: "" });
  };

  // handle change for email section
  const handleEmailInformation = (e) => {
    setEmailInformation({
      ...emailInformation,
      [e.target.name]: e.target.value,
    });
  };

  // handle change for password section
  const handlePasswordInformation = (e) => {
    setPasswordInformation({
      ...passwordInformation,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit for email section
  const handleEmailSection = (e) => {
    e.preventDefault();
    setEmailInformation({ dealer_password: "" });
  };

  // handle Submit for Password Section
  const handlePasswordSection = (e) => {
    e.preventDefault();
    props.clearError();
    setPasswordInformation({
      current_password: "",
      new_password: "",
      confirm_new_password: "",
    });
  };

  return (
    <>
      <Helmet>
        <title>Auto Acuity | Account</title>
      </Helmet>
      {props.errors ? <Banner title={props.errors} visibleTime={3000} /> : null}
      <div>
        <h2 className="pi-title">My Details</h2>
        <h4 className="pi-subtitle">Personal Information</h4>

        <div className="personal--information">
          <div className="personal--information__desc">
            <p>
              Review and update any personal information that you find necessary
              and then hit save.
            </p>
          </div>
          <div className="personal--information__form-section">
            <form
              className="personal--information__fields"
              onSubmit={handlePersonalInformationSection}
            >
              <div className="pi-field">
                <input
                  type="text"
                  name="dealer_username"
                  id="username"
                  autoComplete="off"
                  required
                  className="input-group"
                  value={personalInformation.dealer_username}
                  onChange={handlePersonalInformationChange}
                />
                <label htmlFor="inputField" className="pi-label-name">
                  <span className="pi-content-name">Username</span>
                </label>
              </div>
              <div className="pi-field" id="last_name_grid_column">
                <input
                  type="text"
                  name="dealer_password"
                  id="pass"
                  autoComplete="off"
                  required
                  className="input-group"
                  value={personalInformation.dealer_password}
                  onChange={handlePersonalInformationChange}
                />
                <label htmlFor="inputField" className="pi-label-name">
                  <span className="pi-content-name">Password</span>
                </label>
              </div>

              <button
                type="submit"
                onClick={() => props.updateUsername(personalInformation)}
                className="pi-submitBtn"
              >
                Save
              </button>
            </form>
          </div>
        </div>
        <h4 className="ea-subtitle">E-mail Address</h4>
        <div className="email--address__information">
          <div className="email--address__desc">
            <p>
              Review and update your email adress, Double check accuracy.
              Password must be used for validation.
            </p>
          </div>
          <div className="email--address__form-section">
            <form
              className="email--address__fields"
              onSubmit={handleEmailSection}
            >
              <div className="ea-field">
                <input
                  type="email"
                  name="dealer_email"
                  id="email"
                  className="ea-group"
                  autoComplete="off"
                  required
                  value={emailInformation.dealer_email}
                  onChange={handleEmailInformation}
                />
                <label htmlFor="inputField" className="ea-label-name">
                  <span className="ea-content-name">E-mail</span>
                </label>
              </div>
              {/* User must type in correct password to update email */}
              <div className="ea-field">
                <input
                  type="password"
                  name="dealer_password"
                  id="password"
                  className="ea-group"
                  autoComplete="off"
                  required
                  value={emailInformation.dealer_password}
                  onChange={handleEmailInformation}
                />
                <label htmlFor="inputField" className="ea-label-name">
                  <span className="ea-content-name">Password</span>
                </label>
              </div>
              <button
                type="submit"
                onClick={() => props.updateEmail(emailInformation)}
                className="ea-submitBtn"
              >
                Save
              </button>
            </form>
          </div>
        </div>
        <h4 className="pw-subtitle">Password</h4>
        <div className="password--information">
          <div className="password--information__desc">
            <p>
              To change password, enter your current password and then your new
              password; be sure to confirm your new password.
            </p>
          </div>
          <div className="password--information__form-section">
            <form
              onSubmit={handlePasswordSection}
              className="password__information__fields"
            >
              <div className="pw-field">
                <input
                  type="password"
                  name="current_password"
                  id="current_password"
                  className="pw-group"
                  autoComplete="off"
                  required
                  value={passwordInformation.current_password}
                  onChange={handlePasswordInformation}
                />
                <label htmlFor="inputField" className="pw-label-name">
                  <span className="pw-content-name">Current Password</span>
                </label>
              </div>
              <div className="pw-field">
                <input
                  type="password"
                  name="new_password"
                  id="new_password"
                  className="pw-group"
                  autoComplete="off"
                  required
                  value={passwordInformation.new_password}
                  onChange={handlePasswordInformation}
                />
                <label htmlFor="inputField" className="pw-label-name">
                  <span className="pw-content-name">New Password</span>
                </label>
              </div>
              <div className="pw-field">
                <input
                  type="password"
                  name="confirm_new_password"
                  id="confirm_new_password"
                  className="pw-group"
                  autoComplete="off"
                  required
                  value={passwordInformation.confirm_new_password}
                  onChange={handlePasswordInformation}
                />
                <label htmlFor="inputField" className="pw-label-name">
                  <span className="pw-content-name"> Confirm Password</span>
                </label>
              </div>
              <button
                onClick={() => props.updatePassword(passwordInformation)}
                type="submit"
                className="pw-submitBtn"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dealer: state.loginReducer.user.dealer_email,
    dealer_username: state.loginReducer.user.dealer_username,
    errors: state.loginReducer.error,
  };
};

export default connect(mapStateToProps, {
  updateEmail,
  updatePassword,
  updateUsername,
  clearError,
})(DealerAccountMain);
