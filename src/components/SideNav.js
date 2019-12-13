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
        <a href="#" onClick={handleDashboardClick} className="sidebar__link">
          <Icon className="iconify" icon={outlineBubbleChart} />
          dashboard
        </a>
        <a href="#" className="sidebar__link" onClick={handleLeadsClick}>
          <Icon className="iconify" icon={usersIcon} />
          leads
        </a>
        <a href="#" className="sidebar__link" onClick={handleInventoryClick}>
          <Icon className="iconify" icon={carGarage} />
          inventory
        </a>
        <a href="#" className="sidebar__link" onClick={handleAccountClick}>
          <Icon className="iconify" icon={settingsIcon} />
          Account
        </a>
        <a href="#" className="sidebar__link" onClick={handleHelpClick}>
          <Icon className="iconify" icon={roundHelpOutline} />
          help
        </a>
        <a href="#" className="sidebar__link" onClick={handleLogoutClick}>
          <Icon className="iconify" icon={sharLogOut} />
          Log out
        </a>
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
