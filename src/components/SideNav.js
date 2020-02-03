import React, { useState } from "react";
import { Icon } from "@iconify/react";
import outlineBubbleChart from "@iconify/icons-ic/outline-bubble-chart";
import usersIcon from "@iconify/icons-feather/users";
import carGarage from "@iconify/icons-si-glyph/car-garage";
import roundHelpOutline from "@iconify/icons-ic/round-help-outline";
import sharpLogOut from "@iconify/icons-ic/sharp-log-out";
import settingsIcon from "@iconify/icons-feather/settings";
import { connect } from "react-redux";
import { getDashboardLink, getLeadsLink } from "../actions";
import { Link } from "@reach/router";
import Portal from "./Portal";

const SideNav = props => {
  const [modal, setModal] = useState(false);

  const handleDashboardClick = () => {
    props.getDashboardLink("dashboard");
  };

  const handleLeadsClick = () => {
    props.getDashboardLink("leads");
  };

  const handleInventoryClick = () => {
    props.getDashboardLink("inventory");
  };

  const handleAccountClick = () => {
    props.getDashboardLink("account");
  };

  const handleHelpClick = () => {
    props.getDashboardLink("help");
  };

  const handleLogoutClick = () => {
    //props.getDashboardLink("logout");
    setModal(true);
  };

  const handleCloseButton = () => {
    setModal(false);
  };
  return (
    <>
      {modal ? (
        <Portal>
          <div className="logout_confirm__box">
            <h3 className="logout_confirm__heading">
              Are you sure you want to log out ?
            </h3>
            <div className="button-box">
              <Link
                onClick={handleCloseButton}
                className="logout_confirm__closeBtn"
                to={props.user === "salesman" ? "/sales/dash" : "/dealer/dash"}
              >
                Close
              </Link>
              <button className="logout_confirm__confirmBtn">Confirm</button>
            </div>
          </div>
        </Portal>
      ) : null}
      <div className="sidebar__links">
        <Link
          // to="/dealer/dash"
          to={props.user === "salesman" ? "/sales/dash" : "/dealer/dash"}
          onClick={handleDashboardClick}
          className={
            "sidebar__link " +
            (props.link === "dashboard" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "dashboard" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
        >
          <Icon className="iconify" icon={outlineBubbleChart} />
          dashboard
        </Link>
        <Link
          //to="/dealer/leads"
          to={props.user === "salesman" ? "/sales/leads" : "/dealer/leads"}
          className={
            "sidebar__link " +
            (props.link === "leads" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "leads" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
          onClick={handleLeadsClick}
        >
          <Icon className="iconify" icon={usersIcon} />
          leads
        </Link>
        <Link
          //to="/dealer/inventory"
          to={
            props.user === "salesman" ? "/sales/inventory" : "/dealer/inventory"
          }
          className={
            "sidebar__link " +
            (props.link === "inventory" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "inventory" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
          onClick={handleInventoryClick}
        >
          <Icon className="iconify" icon={carGarage} />
          inventory
        </Link>
        <Link
          to={props.user === "salesman" ? "/sales/account" : "/dealer/account"}
          //to="/dealer/account"
          className={
            "sidebar__link " +
            (props.link === "account" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "account" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
          onClick={handleAccountClick}
        >
          <Icon className="iconify" icon={settingsIcon} />
          Account
        </Link>
        <Link
          to={props.user === "salesman" ? "/sales/help" : "/dealer/help"}
          //to="/dealer/help"
          className={
            "sidebar__link " +
            (props.link === "help" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "help" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
          onClick={handleHelpClick}
        >
          <Icon className="iconify" icon={roundHelpOutline} />
          help
        </Link>
        <Link
          to={props.user === "salesman" ? "/sales/logout" : "/dealer/logout"}
          //to="/dealer/logout"
          className={
            "sidebar__link " +
            (props.link === "logout" && props.user !== "salesman"
              ? "border "
              : null) +
            (props.link === "logout" && props.user === "salesman"
              ? " saleman-border"
              : null)
          }
          onClick={handleLogoutClick}
        >
          <Icon className="iconify" icon={sharpLogOut} />
          Log out
        </Link>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    link: state.dealerNavigationReducer.link,
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, { getDashboardLink, getLeadsLink })(
  SideNav
);
