import React from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getSalesmans } from "../../actions/index";

const DealerDashboardMain = props => {
  console.log("DEALERDASHMAIN", props);
  return (
    <>
      {props.user === "salesman" ? (
        <div className="header-dealer">
          <div className="header-dealer__name">
            Welcome, {props.salesman.salesman_username}
          </div>
          <div className="header-dealer__notifications">Notifications</div>
        </div>
      ) : (
        <div className="header-dealer">
          <div className="header-dealer__name">Dealership: Ford</div>
          <div className="header-dealer__notifications">Notifications</div>
        </div>
      )}
      {/* </div> */}
      {/* ACTION AND RECENT ACTIVITY BOXES */}
      <div className="console-recent-activity-container">
        {/* START CONSOLE */}
        <div className="console">
          <h2
            className={
              "console__heading " +
              (props.user === "salesman" ? "sales_bb" : "dealer_bb")
            }
          >
            what would you like to do?
          </h2>

          <div className="console__controls">
            <Link
              to={
                props.user === "salesman"
                  ? "/sales/dash/newlead"
                  : "/dealer/dash/newlead"
              }
              //to="/dealer/dash/newlead"
              className={
                "console__control " +
                (props.user === "salesman" ? "sales_border" : "dealer_border")
              }
              onClick={props.leadsClick}
            >
              <p>Add New Lead</p>
            </Link>

            {props.user === "salesman" ? null : (
              <Link
                to="/dealer/dash/newsalesperson"
                className={
                  "console__control " +
                  (props.user === "salesman" ? "sales_border" : "dealer_border")
                }
                //onClick={props.salesClick}
                onClick={getSalesmans()}
              >
                <p>Add New Salesperson</p>
              </Link>
            )}

            {props.user === "salesman" ? null : (
              <Link
                to="/dealer/dash/newmanager"
                className={
                  "console__control " +
                  (props.user === "salesman" ? "sales_border" : "dealer_border")
                }
                onClick={props.managerClick}
              >
                <p>Add New Manager</p>
              </Link>
            )}
          </div>
        </div>

        {/* START RECENT ACTIVITY */}
        <div className="recent-activity">
          <h2
            className={
              "recent-activity__heading " +
              (props.user === "salesman" ? "sales_bb" : "dealer_bb")
            }
          >
            recent activity{" "}
            <span
              className={
                "iconify recent-activity__help-icon " +
                (props.user === "salesman"
                  ? "sales_help_icon"
                  : "dealer_help_icon")
              }
              data-icon="mdi:map-marker-question-outline"
              data-inline="false"
            ></span>
          </h2>
          <div className="recent-activity__items">
            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:account-badge-alert-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new lead
              </div>
              <div className="recent-activity__item__time">Just now</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:alert-rhombus-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new salesperson
              </div>
              <div className="recent-activity__item__time">1 hour ago</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:alert-rhombus-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new manager
              </div>
              <div className="recent-activity__item__time">3 hours ago</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:alert-circle-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new vehicle
              </div>
              <div className="recent-activity__item__time">4 hours ago</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:alert-circle-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new vehicle
              </div>
              <div className="recent-activity__item__time">4 hours ago</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:account-badge-alert-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new lead
              </div>
              <div className="recent-activity__item__time">6 hours ago</div>
            </div>

            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:account-badge-alert-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new lead
              </div>
              <div className="recent-activity__item__time">6 hours ago</div>
            </div>
            <div className="recent-activity__item">
              <div className="recent-activity__item__box recent-activity__item__icon">
                <span
                  className="iconify"
                  data-icon="mdi:account-badge-alert-outline"
                  data-inline="false"
                ></span>
              </div>
              <div className="recent-activity__item__box recent-activity__item__text">
                You added a new lead
              </div>
              <div className="recent-activity__item__time">6 hours ago</div>
            </div>
          </div>
          {/* END RECENT ACTIVITY */}

          {/* END ACTION AND RECENT ACTIVITY BOXES */}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    salesman: state.salesLoginReducer.user
  };
};

export default connect(mapStateToProps, { getSalesmans })(DealerDashboardMain);
