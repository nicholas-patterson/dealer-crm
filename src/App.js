import React from "react";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import DealerDashBoard from "./components/Dashboards/DealerDashboard";
import DealerDashboardMain from "./components/SwitchItems/DealerDashboardMain";
import DealerLeadsMain from "./components/SwitchItems/DealerLeadsMain";
import DealerInventoryMain from "./components/SwitchItems/DealerInventoryMain";
import DealerHelpMain from "./components/SwitchItems/DealerHelpMain";
import DealerAccountMain from "./components/SwitchItems/DealerAccountMain";

import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="middle">
      <Router>
        <WelcomePage default="/" />
        <SignUpForm path="/signup" />
        <LoginForm path="/login" />
        <DealerDashBoard path="/dealer">
          <DealerDashboardMain path="/dash" />
          <DealerLeadsMain path="/leads" />
          <DealerInventoryMain path="/inventory" />
          <DealerHelpMain path="/help" />
          <DealerAccountMain path="/account" />
        </DealerDashBoard>
      </Router>
    </div>
  );
};

export default App;
