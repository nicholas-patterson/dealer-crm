import React from "react";
import logoSmall from "../images/AUTOACUITYLOGO-sm.png";
import { navigate } from "@reach/router";

const handleLoginClick = () => {
  navigate("/login");
};

const handleSignUpClick = () => {
  navigate("/signup");
};

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="logo--small">
            <img
              src={logoSmall}
              alt="Auto Acuit logo"
              style={{ height: "45px" }}
            />
          </div>
          <div className="header__nav__buttons">
            <div className="header__nav__button">
              <div onClick={handleLoginClick} className="button button--login">
                Login
              </div>
            </div>
            <div className="header__nav__button">
              <div
                onClick={handleSignUpClick}
                className="button button--signup"
              >
                Sign Up
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
