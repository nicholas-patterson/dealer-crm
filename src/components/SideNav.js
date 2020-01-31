import React from "react";
import { Icon } from "@iconify/react";
import outlineBubbleChart from "@iconify/icons-ic/outline-bubble-chart";
import usersIcon from "@iconify/icons-feather/users";
import carGarage from "@iconify/icons-si-glyph/car-garage";
import roundHelpOutline from "@iconify/icons-ic/round-help-outline";
import sharLogOut from "@iconify/icons-ic/sharp-log-out";
import settingsIcon from "@iconify/icons-feather/settings";
import { connect } from "react-redux";
import { getDashboardLink, getLeadsLink } from "../actions";
import { Link } from "@reach/router";

const SideNav = props => {
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
    props.getDashboardLink("logout");
  };

  return (
    <>
      <div className="sidebar__links">
        <Link
          // to="/dealer/dash"
          to={props.user === "salesman" ? "/sales/dash" : "/dealer/dash"}
          onClick={handleDashboardClick}
          className={
            "sidebar__link " + (props.link === "dashboard" ? "border" : null)
          }
        >
          <Icon className="iconify" icon={outlineBubbleChart} />
          dashboard
        </Link>
        <Link
          //to="/dealer/leads"
          to={props.user === "salesman" ? "/sales/leads" : "/dealer/leads"}
          className={
            "sidebar__link " + (props.link === "leads" ? "border" : null)
          }
          onClick={handleLeadsClick}
        >
          <Icon className="iconify" icon={usersIcon} />
          leads
        </Link>
        <Link
          //to="/dealer/inventory"
          to={props.user === "salesman" ? "/sales/inventory" : "/dealer/inventory"}
          className={
            "sidebar__link " + (props.link === "inventory" ? "border" : null)
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
            "sidebar__link " + (props.link === "account" ? "border" : null)
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
            "sidebar__link " + (props.link === "help" ? "border" : null)
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
            "sidebar__link " + (props.link === "logout" ? "border" : null)
          }
          onClick={handleLogoutClick}
        >
          <Icon className="iconify" icon={sharLogOut} />
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
