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

  const pageSwitch = () => {
    switch (props.dash) {
      case "dashboard":
        return (
          <DealerDashboardMain
            leadsClick={leadClick}
            salesClick={salesClick}
            managerClick={managerClick}
          />
        );
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

  const modalSwitch = () => {
    switch (isShowing) {
      case "leads":
        return (
          <Portal>
            <form className="leads-form" onSubmit={handleSubmit}>
              <h3 className="leads-form_title">Create A Lead..</h3>
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
              <button className="submitBtn">Submit</button>
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
