import React from "react";
import WelcomePage from "./components/WelcomePage";
import SignUpForm from "./components/SignUpForm";
import { Router } from "@reach/router";

const App = () => {
  return (
    <div className="middle">
      <Router>
        <WelcomePage default="/" />
        <SignUpForm path="/signup" />
      </Router>
    </div>
  );
};

export default App;
