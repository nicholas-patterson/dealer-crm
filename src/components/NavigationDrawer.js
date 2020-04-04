import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { connect } from "react-redux";
import outlineBubbleChart from "@iconify/icons-ic/outline-bubble-chart";
import usersIcon from "@iconify/icons-feather/users";
import carGarage from "@iconify/icons-si-glyph/car-garage";
import settingsIcon from "@iconify/icons-feather/settings";
import roundHelpOutline from "@iconify/icons-ic/round-help-outline";
import sharpLogOut from "@iconify/icons-ic/sharp-log-out";
import { Icon } from "@iconify/react";
import { Link } from "@reach/router";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Divider from "@material-ui/core/Divider";
import siteImage from "../images/AUTOACUITYLOGO-sm.png";
import { useMediaQuery } from "react-responsive";
import MediaQuery from "react-responsive";
import {
  getDashboardLink,
  clearError,
  logoutSalesman,
  logoutUser,
} from "../actions/index";
import Portal from "./Portal";
import { navigate } from "@reach/router";

const useStyles = makeStyles({
  root: {
    color: "#39c",
    fontSize: "2rem",
  },
  primary: {
    fontSize: "1.7rem",
    color: "#e4e4e4",
  },
  paper: {
    backgroundColor: "#242c35",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

const NavigationDrawer = (props) => {
  const isMobile = useMediaQuery({ query: "(max-width: 320px)" });
  const [modal, setModal] = useState(false);
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDashboardClick = () => {
    props.getDashboardLink("dashboard");
    props.clearError();
  };

  const handleLeadsClick = () => {
    props.getDashboardLink("leads");
    props.clearError();
  };

  const handleInventoryClick = () => {
    props.getDashboardLink("inventory");
    props.clearError();
  };

  const handleAccountClick = () => {
    props.getDashboardLink("account");
    props.clearError();
  };

  const handleHelpClick = () => {
    props.getDashboardLink("help");
    props.clearError();
  };

  const handleLogoutClick = (e) => {
    //props.getDashboardLink("logout");
    e.preventDefault();
    setModal(true);
  };

  const handleCloseButton = () => {
    setModal(false);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.list]: anchor === "left",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="drawer-image">
        <img
          style={{
            paddingTop: "2rem",
          }}
          src={siteImage}
          alt="site logo"
        />
      </div>
      <List>
        <ListItem
          onClick={handleDashboardClick}
          button
          component={Link}
          to={props.user === "salesman" ? "/sales/dash" : "/dealer/dash"}
        >
          <ListItemIcon classes={{ root: classes.root }}>
            <Icon className="iconify" icon={outlineBubbleChart} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Dashboard"
          />
        </ListItem>
        <Divider />
        <ListItem
          button
          type="button"
          onClick={handleLeadsClick}
          component={Link}
          to={props.user === "salesman" ? "/sales/leads" : "/dealer/leads"}
        >
          <ListItemIcon classes={{ root: classes.root }}>
            <Icon className="iconify" icon={usersIcon} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Leads"
          />
        </ListItem>
        <Divider />
        <ListItem
          onClick={handleInventoryClick}
          button
          component={Link}
          to={
            props.user === "salesman" ? "/sales/inventory" : "/dealer/iventory"
          }
        >
          <ListItemIcon classes={{ root: classes.root }}>
            <Icon className="iconify" icon={carGarage} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Inventory"
          />
        </ListItem>
        <Divider />
        {props.user === "dealer" ? (
          <>
            <ListItem
              onClick={handleAccountClick}
              button
              component={Link}
              to={
                props.user === "salesman" ? "/sales/account" : "/dealer/account"
              }
            >
              <ListItemIcon classes={{ root: classes.root }}>
                <Icon className="iconify" icon={settingsIcon} />
              </ListItemIcon>
              <ListItemText
                classes={{ primary: classes.primary }}
                primary="Account"
              ></ListItemText>
            </ListItem>
            <Divider />
          </>
        ) : null}
        <ListItem
          button
          onClick={handleHelpClick}
          component={Link}
          to={props.user === "salesman" ? "/sales/help" : "/dealer/help"}
        >
          <ListItemIcon classes={{ root: classes.root }}>
            <Icon className="iconify" icon={roundHelpOutline} />
          </ListItemIcon>
          <ListItemText classes={{ primary: classes.primary }} primary="Help" />
        </ListItem>
        <Divider />
        <ListItem
          onClick={handleLogoutClick}
          button
          component={Link}
          to={props.user === "salesman" ? "/sales/logout" : "/dealer/logout"}
        >
          <ListItemIcon classes={{ root: classes.root }}>
            <Icon className="iconify" icon={sharpLogOut} />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.primary }}
            primary="Logout"
          />
        </ListItem>
      </List>
    </div>
  );

  return (
    <>
      <MediaQuery maxDeviceWidth={414}>
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
                  to={
                    props.user === "salesman" ? "/sales/dash" : "/dealer/dash"
                  }
                >
                  Close
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    props.user === "dealer"
                      ? props.logoutUser(navigate)
                      : props.logoutSalesman(navigate)
                  }
                  className="logout_confirm__confirmBtn"
                >
                  Confirm
                </button>
              </div>
            </div>
          </Portal>
        ) : null}
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              color="inherit"
              edge="start"
              size="medium"
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>

            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              classes={{ paper: classes.paper }}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </MediaQuery>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    link: state.dealerNavigationReducer.link,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {
  getDashboardLink,
  clearError,
  logoutSalesman,
  logoutUser,
})(NavigationDrawer, withStyles(useStyles));
