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
          to="/dealer/dash"
          onClick={handleDashboardClick}
          className={
            "sidebar__link " + (props.link === "dashboard" ? "border" : null)
          }
        >
          <Icon className="iconify" icon={outlineBubbleChart} />
          dashboard
        </Link>
        <Link
          to="/dealer/leads"
          className={
            "sidebar__link " + (props.link === "leads" ? "border" : null)
          }
          onClick={handleLeadsClick}
        >
          <Icon className="iconify" icon={usersIcon} />
          leads
        </Link>
        <Link
          to="/dealer/inventory"
          className={
            "sidebar__link " + (props.link === "inventory" ? "border" : null)
          }
          onClick={handleInventoryClick}
        >
          <Icon className="iconify" icon={carGarage} />
          inventory
        </Link>
        <Link
          to="/dealer/account"
          className={
            "sidebar__link " + (props.link === "account" ? "border" : null)
          }
          onClick={handleAccountClick}
        >
          <Icon className="iconify" icon={settingsIcon} />
          Account
        </Link>
        <Link
          to="/dealer/help"
          className={
            "sidebar__link " + (props.link === "help" ? "border" : null)
          }
          onClick={handleHelpClick}
        >
          <Icon className="iconify" icon={roundHelpOutline} />
          help
        </Link>
        <Link
          to="/dealer/logout"
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
    link: state.dealerNavigationReducer.link
  };
};

export default connect(mapStateToProps, { getDashboardLink, getLeadsLink })(
  SideNav
);
