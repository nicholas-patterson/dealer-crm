import React from "react";
import logoSmall from "../images/AUTOACUITYLOGO-sm.png";

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
              <div className="button button--login">Log In</div>
            </div>
            <div className="header__nav__button">
              <div className="button button--signup">Sign Up</div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
