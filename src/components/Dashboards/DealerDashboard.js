import React, { useState, useEffect } from "react";
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
import {
  addLead,
  registerSalesman,
  getSalesmans,
  addSalesLead,
} from "../../actions/index";
import { navigate } from "@reach/router";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Chip from "@material-ui/core/Chip";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Howl, Howler } from "howler";
import addsound from "../../sounds/addsound.mp3";
import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import NavigationDrawer from "../NavigationDrawer";
import { Helmet } from "react-helmet";

const DealerDashboard = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const isLargeMobile = useMediaQuery({ query: "(max-width: 414px)" });
  useEffect(() => {
    return props.user === "dealer" ? props.getSalesmans() : undefined;
  }, []);

  const [leadInfo, setLeadInfo] = useState({
    lead_firstname: "",
    lead_lastname: "",
    lead_email: "",
    lead_phone: "",
    lead_street: "",
    lead_city: "",
    lead_state: "",
    lead_type: "",
    salesman_lead: "1",
    salesman_id: null,
    dealer_id: props.dealer_id || null,
  });

  const [salesInfo, setSalesInfo] = useState({
    salesman_firstname: "",
    salesman_lastname: "",
    salesman_email: "",
    salesman_username: "",
    salesman_password: "",
  });
  const [managerInfo, setManagerInfo] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  });

  // Handle Change for lead form
  const handleLeadChange = (e) => {
    setLeadInfo({ ...leadInfo, [e.target.name]: e.target.value });
  };

  // Handle Change for Salesman form
  const handleSalesChange = (e) => {
    setSalesInfo({ ...salesInfo, [e.target.name]: e.target.value });
  };

  // Handle Change for Manager form
  const handleManagerChange = (e) => {
    setManagerInfo({ ...managerInfo, [e.target.name]: e.target.value });
  };

  const global_add_sound = new Howl({
    src: addsound,
  });

  // function to add lead and sound dealer
  const addDealerLead = () => {
    props.addLead(leadInfo, navigate);
    global_add_sound.play();
  };

  const addSalesLead = () => {
    props.addSalesLead(leadInfo, navigate);
    global_add_sound.play();
  };

  Howler.volume(0.5);

  //  handle Submit for new lead form
  const handleLeadsSubmit = (e) => {
    e.preventDefault();
    props.user === "dealer" ? addDealerLead() : addSalesLead();
    setLeadInfo({
      lead_firstname: "",
      lead_lastname: "",
      lead_email: "",
      lead_phone: "",
      lead_street: "",
      lead_city: "",
      lead_state: "",
      lead_type: "",
      salesman_lead: "1",
      salesman_id: null,
      dealer_id: props.dealer_id || null,
    });
  };

  // handle submit for new salesman form
  const handleSalesSubmit = (e) => {
    e.preventDefault();
    props.registerSalesman(salesInfo, navigate);
    global_add_sound.play();
    setSalesInfo({
      salesman_firstname: "",
      salesman_lastname: "",
      salesman_email: "",
      salesman_username: "",
      salesman_password: "",
    });
  };

  // handle submit for new manager form
  const handleManagerSubmit = (e) => {
    e.preventDefault();
  };

  const customKey = props.location.pathname.split("/").splice(1, 2).join("/");

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

  const modalSwitch = () => {
    switch (props.location.pathname) {
      case leadmodalcase:
        return (
          <Portal>
            <form className="leads-form" onSubmit={handleLeadsSubmit}>
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
              <div id="email-column" className="leads-field">
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

              <select
                id="leads-select"
                className="leads-group"
                onChange={handleLeadChange}
                value={leadInfo.lead_type}
                name="lead_type"
              >
                <option value="">Lead Type</option>
                <option value="walk-in">Walk-in</option>
                <option value="referral">Referral</option>
                <option value="online">Online</option>
              </select>

              {props.user === "salesman" ? (
                <input
                  type="checkbox"
                  id="salesman_lead"
                  checked
                  name="salesman_lead"
                  value={leadInfo.salesman_lead}
                  readOnly
                  placeholder="Type"
                />
              ) : null}

              {props.user === "dealer" ? (
                <select
                  id="salesman-select"
                  className="leads-group"
                  onChange={handleLeadChange}
                  name="salesman_id"
                  value={leadInfo.salesman_id}
                >
                  <option>Select A Salesman</option>
                  {props.salesmans.map((salesman) => {
                    return (
                      <option value={salesman.id} key={salesman.id}>
                        {salesman.salesman_firstname}{" "}
                        {salesman.salesman_lastname}
                      </option>
                    );
                  })}
                </select>
              ) : null}

              <div className="btn-group">
                <Link
                  className="leads-closeBtn"
                  to={
                    props.user === "salesman" ? "/sales/dash" : "/dealer/dash"
                  }
                >
                  Close
                </Link>

                <button type="submit" className="leads-submitBtn">
                  Submit
                </button>
              </div>
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
              <div className="sale-btn-group">
                <Link className="salesperson-closeBtn" to="/dealer/dash">
                  Close
                </Link>
                <button type="submit" className="salesperson-submitBtn">
                  Submit
                </button>
              </div>
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
      <Helmet>
        <title>Auto Acuity | Dashboard</title>
      </Helmet>
      <div className="dealer-container">
        <div
          className={isMobile || isLargeMobile ? "hide-nav" : "nav-container"}
        >
          <div className="nav-bar">
            <Logo />
            <SideNav />
          </div>
        </div>

        <div className="main-content-wrapper">
          <div className="main-content-container">
            <TransitionGroup>
              <CSSTransition
                timeout={300}
                classNames="fade"
                key={customKey}
                exit={false}
              >
                {
                  <div>
                    {props.user === "salesman" ? (
                      <div className="header-dealer">
                        <div className="header-dealer__name">
                          <NavigationDrawer />
                          <Chip
                            style={{
                              fontSize: "1.5rem",
                              backgroundColor: "#39c",
                            }}
                            size={isMobile ? "small" : "medium"}
                            label={
                              "Welcome, " + props.salesman.salesman_username
                            }
                          />
                        </div>
                        <div className="header-dealer__notifications">
                          <Badge
                            badgeContent={
                              props.user === "dealer"
                                ? props.dealer_notifications.length
                                : props.salesman_notifications.length
                            }
                            color="error"
                            overlap="rectangle"
                          >
                            <NotificationsIcon fontSize="large" />
                          </Badge>
                        </div>
                      </div>
                    ) : (
                      <div className="header-dealer">
                        <div className="header-dealer__name">
                          <NavigationDrawer />
                          <Chip
                            style={{
                              fontSize: "1.2rem",
                              backgroundColor: "#39c",
                            }}
                            size={isMobile ? "small" : "medium"}
                            label={"Dealership:" + props.dealership}
                          />
                        </div>
                        <div className="header-dealer__notifications">
                          <Badge
                            badgeContent={
                              props.user === "dealer"
                                ? props.dealer_notifications.length
                                : props.salesman_notifications.length
                            }
                            color="error"
                            overlap="rectangle"
                          >
                            <NotificationsIcon fontSize="large" />
                          </Badge>
                        </div>
                      </div>
                    )}
                    {pageSwitch()}
                  </div>
                }
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
      </div>
      {modalSwitch()}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    dash: state.dealerNavigationReducer.link,
    user: state.userReducer.user,
    salesmans: state.addSalespersonReducer.person,
    dealer_id: state.salesLoginReducer.user.dealer_id,
    leads: state.getDealerLeadReducer.leads,
    salesman: state.salesLoginReducer.user,
    dealership: state.loginReducer.user.dealer_name,
    dealer_notifications: state.getDealerNotificationsReducer.notifications,
    salesman_notifications: state.getSalesmanNotificationReducer.notifications,
  };
};

export default connect(mapStateToProps, {
  addLead,
  registerSalesman,
  getSalesmans,
  addSalesLead,
})(React.memo(DealerDashboard));
