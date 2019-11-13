import React from "react";
import { Icon } from "@iconify/react";
import outlineBubbleChart from "@iconify/icons-ic/outline-bubble-chart";
import usersIcon from "@iconify/icons-feather/users";
import carGarage from "@iconify/icons-si-glyph/car-garage";
import roundHelpOutline from "@iconify/icons-ic/round-help-outline";
import sharLogOut from "@iconify/icons-ic/sharp-log-out";
import settingsIcon from "@iconify/icons-feather/settings";

const SideNav = () => {
  return (
    <>
      <div className="sidebar__links">
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={outlineBubbleChart} />
          dashboard
        </a>
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={usersIcon} />
          leads
        </a>
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={carGarage} />
          inventory
        </a>
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={settingsIcon} />
          Account
        </a>
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={roundHelpOutline} />
          help
        </a>
        <a href="#" className="sidebar__link">
          <Icon className="iconify" icon={sharLogOut} />
          Log out
        </a>
      </div>
    </>
  );
};

export default SideNav;
