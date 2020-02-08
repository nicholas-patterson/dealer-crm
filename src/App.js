import React from "react";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import SalesLoginForm from "./components/SalesLoginForm";
import DealerDashBoard from "./components/Dashboards/DealerDashboard";
import DealerDashboardMain from "./components/SwitchItems/DealerDashboardMain";
import DealerLeadsMain from "./components/SwitchItems/DealerLeadsMain";
import DealerInventoryMain from "./components/SwitchItems/DealerInventoryMain";
import DealerHelpMain from "./components/SwitchItems/DealerHelpMain";
import DealerAccountMain from "./components/SwitchItems/DealerAccountMain";
import { connect } from "react-redux";

import { Router } from "@reach/router";

const App = props => {
  console.log("PROPS IN APP.JS", props);
  return (
    <div className="middle">
      <Router>
        <WelcomePage path="/" />
        <SignUpForm path="/signup" />
        <LoginForm path="/login" />
        <SalesLoginForm path="/saleslogin" />
      </Router>
      {props.user === "dealer" ? (
        <Router>
          {/* <WelcomePage default="/" />
          <SignUpForm path="/signup" />
          <LoginForm path="/login" />
          <SalesLoginForm path="/saleslogin" /> */}
          <DealerDashBoard path="/dealer">
            <DealerDashboardMain path="/dash" />
            <DealerLeadsMain path="/leads" />
            <DealerInventoryMain path="/inventory" />
            <DealerHelpMain path="/help" />
            <DealerAccountMain path="/account" />
          </DealerDashBoard>
        </Router>
      ) : (
        <Router>
          {/* <WelcomePage default="/" />
          <SignUpForm path="/signup" />
          <LoginForm path="/login" /> */}
          <DealerDashBoard path="/sales">
            <DealerDashboardMain path="/dash" />
            <DealerLeadsMain path="/leads" />
            <DealerInventoryMain path="/inventory" />
            <DealerHelpMain path="/help" />
            <DealerAccountMain path="/account" />
          </DealerDashBoard>
        </Router>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {})(App);
