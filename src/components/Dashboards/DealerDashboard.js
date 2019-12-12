import React, { useState } from "react";
import SideNav from "../SideNav";
import Logo from "../Logo/Logo";
import Portal from "../Portal";

const DealerDashboard = props => {
  const [isShowing, setIsShowing] = useState("");
  const [leadInfo, setLeadInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: ""
  });
  const [salesInfo, setSalesInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  });
  const [managerInfo, setManagerInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  });

  const leadClick = () => {
    setIsShowing("leads");
  };

  const salesClick = () => {
    setIsShowing("sales");
  };

  const managerClick = () => {
    setIsShowing("manager");
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });
    setSalesInfo({ ...salesInfo, [e.target.name]: e.target.value });
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
  };

  const modalSwitch = () => {
    switch (isShowing) {
      case "leads":
        return (
          <Portal>
            <form className="leads-form" onSubmit={handleSubmit}>
              <label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={leadInfo.first_name}
                  onChange={props.handleChange}
                  placeholder="First Name"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={leadInfo.last_name}
                  onChange={props.handleChange}
                  placeholder="Last Name"
                />
              </label>
              <label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={leadInfo.email}
                  onChange={props.handleChange}
                  placeholder="Email..."
                />
              </label>
              <label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={leadInfo.phone}
                  onChange={props.handleChange}
                  placeholder="Phone"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="street"
                  name="street"
                  value={leadInfo.street}
                  onChange={props.handleChange}
                  placeholder="Street"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={leadInfo.city}
                  onChange={props.handleChange}
                  placeholder="City"
                />
              </label>
              <label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={leadInfo.state}
                  onChange={props.handleChange}
                  placeholder="State"
                />
              </label>
              <button className="continueBtn">Submit</button>
            </form>
          </Portal>
        );
      case "sales":
        return (
          <Portal>
            <form onSubmit={handleSubmit}>
              <label>
                First Name
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={salesInfo.first_name}
                  onChange={props.handleChange}
                  placeholder="First Name..."
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={salesInfo.last_name}
                  onChange={props.handleChange}
                  placeholder="Last Name..."
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={salesInfo.email}
                  onChange={props.handleChange}
                  placeholder="Email..."
                />
              </label>
              <label>
                Username
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={salesInfo.username}
                  onChange={props.handleChange}
                  placeholder="Username..."
                />
              </label>
              <label>
                Password
                <input
                  type="text"
                  id="password"
                  name="street"
                  value={salesInfo.password}
                  onChange={props.handleChange}
                  placeholder="Password..."
                />
              </label>
            </form>
          </Portal>
        );
      case "manager":
        return (
          <Portal>
            <form onSubmit={handleSubmit}>
              <label>
                First Name
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={managerInfo.first_name}
                  onChange={props.handleChange}
                  placeholder="First Name..."
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={managerInfo.last_name}
                  onChange={props.handleChange}
                  placeholder="Last Name..."
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={managerInfo.email}
                  onChange={props.handleChange}
                  placeholder="Email..."
                />
              </label>
              <label>
                Username
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={managerInfo.username}
                  onChange={props.handleChange}
                  placeholder="Username..."
                />
              </label>
              <label>
                Password
                <input
                  type="text"
                  id="password"
                  name="street"
                  value={managerInfo.password}
                  onChange={props.handleChange}
                  placeholder="Password..."
                />
              </label>
            </form>
          </Portal>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="dealer-container">
        <div className="nav-container">
          <div className="nav-bar">
            <Logo />
            <SideNav />
          </div>
        </div>

        <div className="main-content-wrapper">
          <div className="main-content-container">
            <div className="header-dealer">
              <div className="header-dealer__name">Dealership: Ford</div>
              <div className="header-dealer__notifications">Notifications</div>
            </div>
            {/* ACTION AND RECENT ACTIVITY BOXES */}
            t.
            <div className="console-recent-activity-container">
              {/* START CONSOLE */}
              <div className="console">
                <h2 className="console__heading">what would you like to do?</h2>

                <div className="console__controls">
                  <div className="console__control" onClick={leadClick}>
                    <p>Add New Lead</p>
                  </div>

                  <div className="console__control" onClick={salesClick}>
                    <p>Add New Salesperson</p>
                  </div>

                  <div className="console__control" onClick={managerClick}>
                    <p>Add New Manager</p>
                  </div>
                </div>
              </div>

              {/* START RECENT ACTIVITY */}
              <div className="recent-activity">
                <h2 className="recent-activity__heading">
                  recent activity{" "}
                  <span
                    className="iconify recent-activity__help-icon"
                    data-icon="mdi:map-marker-question-outline"
                    data-inline="false"
                  ></span>
                </h2>
                <div className="recent-activity__items">
                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:account-badge-alert-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new lead
                    </div>
                    <div className="recent-activity__item__time">Just now</div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:alert-rhombus-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new salesperson
                    </div>
                    <div className="recent-activity__item__time">
                      1 hour ago
                    </div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:alert-rhombus-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new manager
                    </div>
                    <div className="recent-activity__item__time">
                      3 hours ago
                    </div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:alert-circle-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new vehicle
                    </div>
                    <div className="recent-activity__item__time">
                      4 hours ago
                    </div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:alert-circle-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new vehicle
                    </div>
                    <div className="recent-activity__item__time">
                      4 hours ago
                    </div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:account-badge-alert-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new lead
                    </div>
                    <div className="recent-activity__item__time">
                      6 hours ago
                    </div>
                  </div>

                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:account-badge-alert-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new lead
                    </div>
                    <div className="recent-activity__item__time">
                      6 hours ago
                    </div>
                  </div>
                  <div className="recent-activity__item">
                    <div className="recent-activity__item__box recent-activity__item__icon">
                      <span
                        className="iconify"
                        data-icon="mdi:account-badge-alert-outline"
                        data-inline="false"
                      ></span>
                    </div>
                    <div className="recent-activity__item__box recent-activity__item__text">
                      You added a new lead
                    </div>
                    <div className="recent-activity__item__time">
                      6 hours ago
                    </div>
                  </div>
                </div>
                {/* END RECENT ACTIVITY */}

                {/* END ACTION AND RECENT ACTIVITY BOXES */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalSwitch()}
    </>
  );
};

export default DealerDashboard;
