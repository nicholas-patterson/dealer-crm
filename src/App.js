import React from "react";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LogInForm";
import DealerDashBoard from "./components/Dashboards/DealerDashboard";
import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="middle">
      <Router>
        <WelcomePage default="/" />
        <SignUpForm path="/signup" />
        <LoginForm path="/login" />
        <DealerDashBoard path="/dealer" />
      </Router>
    </div>
  );
};

export default App;
