import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import SalesLoginForm from "./components/SalesLoginForm";
import Loading from "./components/Loading";

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

const App = props => {
  return (
    <div className="middle">
      <Router>
        <WelcomePage path="/" />
        <SignUpForm path="/signup" />
        <LoginForm path="/login" />
        <SalesLoginForm path="/saleslogin" />
      </Router>

      <Suspense fallback={<Loading />}>
        <Router>
          <DealerDashBoard
            path={props.user === "dealer" ? "/dealer" : "/sales"}
          >
            <DealerDashboardMain path="/dash" />
            <DealerLeadsMain path="/leads" />
            <DealerInventoryMain path="/inventory" />
            <DealerHelpMain path="/help" />
            <DealerAccountMain path="/account" />
          </DealerDashBoard>
        </Router>
      </Suspense>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};

export default connect(mapStateToProps, {})(App);
