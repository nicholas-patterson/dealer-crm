import React from "react";
import { Link } from "@reach/router";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="not-found">
        <h5 className="not-found--title">404 - Page Not Found</h5>
        <p className="not-found--para">
          The page you are looking for might have been removed, had it's name
          changed or is temporarily unavailable
        </p>
        <Link to="/">
          <button className="not-found--btn" type="button">
            Home Page
          </button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
