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
import { Link } from "@reach/router";

const DealerDashboard = props => {
  const [leadInfo, setLeadInfo] = useState({
    lead_firstname: "",
    lead_lastname: "",
    lead_email: "",
    lead_phone: "",
    lead_street: "",
    lead_city: "",
    lead_state: ""
  });
  const [salesInfo, setSalesInfo] = useState({
    salesman_firstname: "",
    salesman_lastname: "",
    salesman_email: "",
    salesman_username: "",
    salesman_password: ""
  });
  const [managerInfo, setManagerInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: ""
  });

  // Handle Change for lead form
  const handleLeadChange = e => {
    setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });
  };
  // Handle Change for Salesman form
  const handleSalesChange = e => {
    setSalesInfo({ ...salesInfo, [e.target.name]: e.target.value });
  };
  // Handle Change for Manager form
  const handleManagerChange = e => {
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
  };

  //  handle Submit for new lead form
  const handleLeadsSubmit = e => {
    e.preventDefault();
    console.log(leadInfo);
  };
  // handle submit for new salesman form
  const handleSalesSubmit = e => {
    e.preventDefault();
    console.log(salesInfo);
  };
  // handle submit for new manager form
  const handleManagerSubmit = e => {
    e.preventDefault();
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
        return <DealerDashboardMain />;
    }
  };

  const leadmodalcase =
    props.user === "salesman" ? "/sales/dash/newlead" : "/dealer/dash/newlead";
  console.log("LEAD MODAL CASE", leadmodalcase);

  console.log(props.location.pathname);
  console.log("PROPS IN DASH", props);
  const modalSwitch = () => {
    switch (props.location.pathname) {
      //case "/dealer/dash/newlead":
      case leadmodalcase:
        return (
          <Portal>
            <form className="leads-form" onSubmit={handleLeadsSubmit}>
              {/* <h3 className="leads-form_title">Create A Lead..</h3> */}
              <div className="leads-field">
                <input
                  type="text"
                  id="first_name"
                  name="lead_firstname"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_firstname}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">First Name</span>
                </label>
              </div>

              <div className="leads-field">
                <input
                  type="text"
                  id="last_name"
                  name="lead_lastname"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_lastname}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Last Name</span>
                </label>
              </div>

              <div className="leads-field">
                <input
                  type="text"
                  id="street"
                  name="lead_street"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_street}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Street</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="text"
                  id="city"
                  name="lead_city"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_city}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">City</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="text"
                  id="state"
                  name="lead_state"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_state}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">State</span>
                </label>
              </div>
              <div className="leads-field">
                <input
                  type="email"
                  id="email"
                  name="lead_email"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_email}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Email</span>
                </label>
              </div>
              <div id="phone-column" className="leads-field">
                <input
                  type="phone"
                  id="leads-phone"
                  name="lead_phone"
                  autoComplete="off"
                  required
                  className="leads-group"
                  value={leadInfo.lead_phone}
                  onChange={handleLeadChange}
                />
                <label htmlFor="inputField" className="leads-label-name">
                  <span className="leads-content-name">Phone</span>
                </label>
              </div>

              <Link
                className="leads-closeBtn"
                to={props.user === "salesman" ? "/sales/dash" : "/dealer/dash"}
              >
                Close
              </Link>

              <button className="leads-submitBtn">Submit</button>
            </form>
          </Portal>
        );
      case "/dealer/dash/newsalesperson":
        return (
          <Portal>
            <form onSubmit={handleSalesSubmit} className="salesperson-form">
              {/* <h3 className="salesperson-form__title">Add New Salesperson</h3> */}

              <div className="salesperson-field">
                <input
                  type="text"
                  id="first_name"
                  name="salesman_firstname"
                  autoComplete="off"
                  required
                  className="salesperson-group"
                  value={salesInfo.salesman_firstname}
                  onChange={handleSalesChange}
                />
                <label htmlFor="inputField" className="salesperson-label-name">
                  <span className="salesperson-content-name">First Name</span>
                </label>
              </div>
              <div className="salesperson-field">
                <input
                  type="text"
                  id="last_name"
                  name="salesman_lastname"
                  autoComplete="off"
                  required
                  className="salesperson-group"
                  value={salesInfo.salesman_lastname}
                  onChange={handleSalesChange}
                />
                <label htmlFor="inputField" className="salesperson-label-name">
                  <span className="salesperson-content-name">Last Name</span>
                </label>
              </div>
              <div className="salesperson-field">
                <input
                  type="text"
                  id="username"
                  name="salesman_username"
                  autoComplete="off"
                  required
                  className="salesperson-group"
                  value={salesInfo.salesman_username}
                  onChange={handleSalesChange}
                />
                <label htmlFor="inputField" className="salesperson-label-name">
                  <span className="salesperson-content-name">Username</span>
                </label>
              </div>

              <div className="salesperson-field">
                <input
                  type="text"
                  id="password"
                  name="salesman_password"
                  autoComplete="off"
                  required
                  className="salesperson-group"
                  value={salesInfo.salesman_password}
                  onChange={handleSalesChange}
                />
                <label htmlFor="inputField" className="salesperson-label-name">
                  <span className="salesperson-content-name">Password</span>
                </label>
              </div>

              <div id="sales-email-column" className="salesperson-field">
                <input
                  type="email"
                  id="email"
                  name="salesman_email"
                  autoComplete="off"
                  required
                  className="salesperson-group"
                  value={salesInfo.salesman_email}
                  onChange={handleSalesChange}
                />
                <label htmlFor="inputField" className="salesperson-label-name">
                  <span className="salesperson-content-name">Email</span>
                </label>
              </div>
              <Link className="salesperson-closeBtn" to="/dealer/dash">
                Close
              </Link>
              <button className="salesperson-submitBtn">Submit</button>
            </form>
          </Portal>
        );
      case "/dealer/dash/newmanager":
        return (
          <Portal>
            <form onSubmit={handleManagerSubmit} className="manager-form">
              {/* <h1 className="manager-form__title">Add New Manager</h1> */}

              <div className="manager-field">
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  autoComplete="off"
                  required
                  className="manager-group"
                  value={managerInfo.first_name}
                  onChange={handleManagerChange}
                />
                <label htmlFor="inputField" className="manager-label-name">
                  <span className="manager-content-name">First Name</span>
                </label>
              </div>
              <div className="manager-field">
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  autoComplete="off"
                  required
                  className="manager-group"
                  value={managerInfo.last_name}
                  onChange={handleManagerChange}
                />
                <label htmlFor="inputField" className="manager-label-name">
                  <span className="manager-content-name">Last Name</span>
                </label>
              </div>
              <div className="manager-field">
                <input
                  type="text"
                  id="username"
                  name="username"
                  autoComplete="off"
                  required
                  className="manager-group"
                  value={managerInfo.username}
                  onChange={handleManagerChange}
                />
                <label htmlFor="inputField" className="manager-label-name">
                  <span className="manager-content-name">Username</span>
                </label>
              </div>
              <div className="manager-field">
                <input
                  type="text"
                  id="password"
                  name="street"
                  autoComplete="off"
                  required
                  className="manager-group"
                  value={managerInfo.password}
                  onChange={handleManagerChange}
                />
                <label htmlFor="inputField" className="manager-label-name">
                  <span className="manager-content-name">Password</span>
                </label>
              </div>
              <div id="manager-email-column" className="manager-field">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autocomplete="off"
                  required
                  className="manager-group"
                  value={managerInfo.email}
                  onChange={handleManagerChange}
                />
                <label htmlFor="inputField" className="manager-label-name">
                  <span className="manager-content-name">Email</span>
                </label>
              </div>
              <Link className="manager-closeBtn" to="/dealer/dash">
                Close
              </Link>
              <button className="manager-submitBtn">Submit</button>
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
    dash: state.dealerNavigationReducer.link,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {})(DealerDashboard);
