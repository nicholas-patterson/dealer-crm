import React, { useState } from "react";
import SideNav from "../SideNav";
import Logo from "../Logo/Logo";
import Portal from "../Portal";
import DealerDashboardMain from "../SwitchItems/DealerDashboardMain";
import DealerLeadsMain from "../SwitchItems/DealerLeadsMain";
import DealerInventoryMain from "../SwitchItems/DealerInventoryMain";
import DealerAccountMain from "../SwitchItems/DealerAccountMain";
import DealerHelpMain from "../SwitchItems/DealerHelpMain";
import { connect } from "react-redux";

const DealerDashboard = props => {
  const [leadInfo, setLeadInfo] = useState({
    first_name: "Nicholas",
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
  // Make seperate handleChange for each state
  const handleChange = e => {
    setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });
    setSalesInfo({ ...salesInfo, [e.target.name]: e.target.value });
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
  };

  // Make seperate handleSubmit for each form
  const handleSubmit = e => {
    e.preventDefault();
    console.log(leadInfo);
    console.log(salesInfo);
    console.log(managerInfo);
  };

  const pageSwitch = () => {
    switch (props.dash) {
      case "dashboard":
        return <DealerDashboardMain />;
      case "leads":
        return <DealerLeadsMain />;

      case "inventory":
        return <DealerInventoryMain />;
      case "account":
        return <DealerAccountMain />;
      case "help":
        return <DealerHelpMain />;
      default:
        return null;
    }
  };

  console.log(props.location.pathname);

  const modalSwitch = () => {
    switch (props.location.pathname) {
      case "/dealer/dash/newlead":
        return (
          <Portal>
            <form className="leads-form" onSubmit={handleSubmit}>
              {/* <h3 className="leads-form_title">Create A Lead..</h3> */}
              <div className="leads-field">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.first_name}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">First Name</span>
                </label>
              </div>

              <div className="leads-field">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.last_name}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Last Name</span>
                </label>
              </div>

              <div className="leads-field">
                <input
                  type="text"
                  id="street"
                  name="street"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.street}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Street</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="text"
                  id="city"
                  name="city"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.city}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">City</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="text"
                  id="state"
                  name="state"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.state}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">State</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.email}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Email</span>
                </label>
              </div>
              <div id="phone-column" className="leads-field">
                <input
                  type="phone"
                  id="leads-phone"
                  name="phone"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.phone}
                  onChange={handleChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Phone</span>
                </label>
              </div>
              <button className="leads-submitBtn">Submit</button>
            </form>
          </Portal>
        );
      case "/dealer/dash/newsalesperson":
        return (
          <Portal>
            <form onSubmit={handleSubmit} className="salesperson-form">
              <h3 className="salesperson-form__title">Add New Salesperson</h3>

              <input
                type="text"
                id="first_name"
                name="first_name"
                value={salesInfo.first_name}
                onChange={handleChange}
                placeholder="First Name..."
              />

              <input
                type="text"
                id="last_name"
                name="last_name"
                value={salesInfo.last_name}
                onChange={handleChange}
                placeholder="Last Name..."
              />

              <input
                type="text"
                id="username"
                name="username"
                value={salesInfo.username}
                onChange={handleChange}
                placeholder="Username..."
              />

              <input
                type="text"
                id="password"
                name="password"
                value={salesInfo.password}
                onChange={handleChange}
                placeholder="Password..."
              />
              <input
                type="email"
                id="email"
                name="email"
                value={salesInfo.email}
                onChange={handleChange}
                placeholder="Email..."
              />

              <button className="submitBtn">Submit</button>
            </form>
          </Portal>
        );
      case "/dealer/dash/newmanager":
        return (
          <Portal>
            <form onSubmit={handleSubmit} className="manager-form">
              <h1 className="manager-form__title">Add New Manager</h1>

              <input
                type="text"
                id="first_name"
                name="first_name"
                value={managerInfo.first_name}
                onChange={handleChange}
                placeholder="First Name..."
              />

              <input
                type="text"
                id="last_name"
                name="last_name"
                value={managerInfo.last_name}
                onChange={handleChange}
                placeholder="Last Name..."
              />

              <input
                type="text"
                id="username"
                name="username"
                value={managerInfo.username}
                onChange={handleChange}
                placeholder="Username..."
              />

              <input
                type="text"
                id="password"
                name="street"
                value={managerInfo.password}
                onChange={handleChange}
                placeholder="Password..."
              />

              <input
                type="email"
                id="email"
                name="email"
                value={managerInfo.email}
                onChange={handleChange}
                placeholder="Email..."
              />

              <button className="submitBtn">Submit</button>
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
          <div className="main-content-container">{pageSwitch()}</div>
        </div>
      </div>
      {modalSwitch()}
    </>
  );
};

const mapStateToProps = state => {
  return {
    dash: state.dealerNavigationReducer.link
  };
};

export default connect(mapStateToProps, {})(DealerDashboard);
