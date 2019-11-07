import React from "react";
import illustration from "../images/Nicholas-Illustration-Rev-2.png";
import { Link } from "@reach/router";

const WelcomePage = () => {
  return (
    <>
      <header className="header">
        <nav className="header__nav">
          <div className="logo--small">Logo Here</div>
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
      <div className="container">
        <div className="container--flex">
          <div className="text-box">
            <h2 className="text-box__title">
              A fast, modern, and dependable CRM for automotive dealerships.
            </h2>
            <p className="text-box__subtext">
              No need to be overwhelmed by overcomplicated and outdated crms, we
              are here to make your customer interaction effortless.
            </p>
            <Link className="button button--get-started button--slide-up" to="/">
              Get Started
            </Link>
          </div>
          <div>
            <img
              className="img-styles"
              src={illustration}
              alt="site-illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
