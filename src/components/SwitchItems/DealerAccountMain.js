import React, { useState } from "react";

const DealerAccountMain = () => {
  const [personalInformation, setPersonalInformation] = useState({
    first_name: "",
    last_name: "",
    birthday: "",
    phone: ""
  });

  const [emailInformation, setEmailInformation] = useState({
    email: "",
    password: ""
  });

  const handlePersonalInformationChange = e => {
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]: e.tatrget.value
    });
  };

  const handleEmailInformation = e => {
    setEmailInformation({
      ...emailInformation,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
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
          <form className="personal--information__fields">
            <div className="pi-field">
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="off"
                required
                className="input-group"
                value={personalInformation.first_name}
                onChange={handlePersonalInformationChange}
              />
              <label htmlFor="inputField" className="pi-label-name">
                <span className="pi-content-name">First Name</span>
              </label>
            </div>
            <div className="pi-field" id="last_name_grid_column">
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="off"
                required
                className="input-group"
                value={personalInformation.last_name}
                onChange={handlePersonalInformationChange}
              />
              <label htmlFor="inputField" className="pi-label-name">
                <span className="pi-content-name">Last Name</span>
              </label>
            </div>
            <div className="pi-field" id="date-styles">
              <input
                type="date"
                name="birthday"
                id="birthday"
                autoComplete="off"
                required
                className="input-group"
                value={personalInformation.birthday}
                onChange={handlePersonalInformationChange}
              />
              <label htmlFor="inputField" className="pi-label-name">
                <span className="pi-content-name"> Birth date</span>
              </label>
            </div>
            <div className="pi-field" id="phone_grid_column">
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                required
                className="input-group"
                value={personalInformation.phone}
                onChange={handlePersonalInformationChange}
              />
              <label htmlFor="inputField" className="pi-label-name">
                <span className="pi-content-name">Phone Number</span>
              </label>
            </div>

            <button className="pi-submitBtn">Save</button>
          </form>
        </div>
      </div>
      <h4 className="ea-subtitle">E-mail Address</h4>
      <div className="email--address__information">
        <div className="email--address__desc">
          <p>
            Review and update your email adress, Double check accuracy. Password
            must be used for validation.
          </p>
        </div>
        <div className="email--address__form-section">
          <form className="email--address__fields">
            <div className="ea-field">
              <input
                type="email"
                name="email"
                id="email"
                className="ea-group"
                autoComplete="off"
                required
                value={emailInformation.email}
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
                name="password"
                id="password"
                className="ea-group"
                autoComplete="off"
                required
                value={emailInformation.password}
                onChange={handleEmailInformation}
              />
              <label htmlFor="inputField" className="ea-label-name">
                <span className="ea-content-name">Password</span>
              </label>
            </div>
            <button className="ea-submitBtn">Save</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default DealerAccountMain;
