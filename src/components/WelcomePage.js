import React from "react";
import Header from "./Header";
import illustration from "../images/Nicholas-Illustration-Rev-2.png";
// import logoSmall from "../images/AUTOACUITYLOGO-sm.png";
import { Link } from "@reach/router";

const WelcomePage = () => {
  const copyrightYear = new Date().getFullYear();
  return (
    <>
      <Header />
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
            <Link
              className="button button--get-started button--slide-up"
              to="/login"
            >
              Get Started
            </Link>
          </div>
          <div className="illustration-container">
            <img
              className="img-styles"
              src={illustration}
              alt="site-illustration"
            />
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="footer__copyright">&copy; {copyrightYear} Auto Acuity</p>
        <p className="footer__privacy-policy">Privacy Policy</p>
        <p>
          Made with{" "}
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>{" "}
          by: Nick Patterson
        </p>
      </footer>
      {/* </div> */}
    </>
  );
};

export default WelcomePage;
