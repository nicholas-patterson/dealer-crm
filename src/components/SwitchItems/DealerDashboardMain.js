import React from "react";

const DealerDashboardMain = props => {
  return (
    <>
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>
      {/* ACTION AND RECENT ACTIVITY BOXES */}
      <div className="console-recent-activity-container">
        {/* START CONSOLE */}
        <div className="console">
          <h2 className="console__heading">what would you like to do?</h2>

          <div className="console__controls">
            <div className="console__control" onClick={props.leadsClick}>
              <p>Add New Lead</p>
            </div>

            <div className="console__control" onClick={props.salesClick}>
              <p>Add New Salesperson</p>
            </div>

            <div className="console__control" onClick={props.managerClick}>
              <p>Add New Manager</p>
            </div>
          </div>
        </div>

        {/* START RECENT ACTIVITY */}
        <div className="recent-activity">
          <h2 className="recent-activity__heading">
            recent activity{" "}
            <span
              className="iconify recent-activity__help-icon"
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

export default DealerDashboardMain;
