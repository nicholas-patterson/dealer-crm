import React, { Suspense, lazy } from "react";
import { connect } from "react-redux";
import { Router } from "@reach/router";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import SalesLoginForm from "./components/SalesLoginForm";
import Loading from "./components/Loading";
import { Helmet } from "react-helmet";

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

const App = (props) => {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Auto Acuity</title>
        <meta
          name="description"
          content="A site for dealers to keep their customers information in a central place"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#39c" />
      </Helmet>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, {})(App);
