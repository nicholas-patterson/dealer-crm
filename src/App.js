import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import SalesLoginForm from "./components/SalesLoginForm";
// Import for lazy load

const DealerDashBoard = lazy(() =>
  import("./components/Dashboards/DealerDashboard")
);
const DealerDashboardMain = lazy(() =>
  import("./components/SwitchItems/DealerDashboardMain")
);
const DealerLeadsMain = lazy(() =>
  import("./components/SwitchItems/DealerLeadsMain")
);
const DealerInventoryMain = lazy(() =>
  import("./components/SwitchItems/DealerInventoryMain")
);
const DealerHelpMain = lazy(() =>
  import("./components/SwitchItems/DealerHelpMain")
);
const DealerAccountMain = lazy(() =>
  import("./components/SwitchItems/DealerAccountMain")
);

// import DealerDashBoard from "./components/Dashboards/DealerDashboard";
// import DealerDashboardMain from "./components/SwitchItems/DealerDashboardMain";
// import DealerLeadsMain from "./components/SwitchItems/DealerLeadsMain";
// import DealerInventoryMain from "./components/SwitchItems/DealerInventoryMain";
// import DealerHelpMain from "./components/SwitchItems/DealerHelpMain";
// import DealerAccountMain from "./components/SwitchItems/DealerAccountMain";

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
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <DealerDashBoard path="/dealer">
              <DealerDashboardMain path="/dash" />
              <DealerLeadsMain path="/leads" />
              <DealerInventoryMain path="/inventory" />
              <DealerHelpMain path="/help" />
              <DealerAccountMain path="/account" />
            </DealerDashBoard>
          </Router>
        </Suspense>
      ) : (
        <Router>
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
