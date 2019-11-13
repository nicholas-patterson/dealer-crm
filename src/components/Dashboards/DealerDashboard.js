import React from "react";

const DealerDashboard = props => {
  return (
    <div class="dealer-container">
      <div class="nav-container">
        <div class="nav-bar">Sidebar</div>
        {/* SIDEBAR START */}
      </div>

      <div class="main-content-wrapper">
        <div class="main-content-container">
          <div class="header-dealer">
            <div class="header-dealer__name">Dealership: Ford</div>
            <div class="header-dealer__notifications">Notifications</div>
          </div>

          {/* ACTION AND RECENT ACTIVITY BOXES */}

          <div class="console-recent-activity-container">
            {/* START CONSOLE */}
            <div class="console">
              <h2 class="console__heading">what would you like to do?</h2>

              <div class="console__controls">
                <div class="console__control">
                  <p>Add New Lead</p>
                </div>

                <div class="console__control">
                  <p>Add New Salesperson</p>
                </div>

                <div class="console__control">
                  <p>Add New Manager</p>
                </div>
              </div>
            </div>

            {/* START RECENT ACTIVITY */}
            <div class="recent-activity">
              <h2 class="recent-activity__heading">
                recent activity{" "}
                <span
                  class="iconify recent-activity__help-icon"
                  data-icon="mdi:map-marker-question-outline"
                  data-inline="false"
                ></span>
              </h2>
              <div class="recent-activity__items">
                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:account-badge-alert-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new lead
                  </div>
                  <div class="recent-activity__item__time">Just now</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:alert-rhombus-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new salesperson
                  </div>
                  <div class="recent-activity__item__time">1 hour ago</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:alert-rhombus-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new manager
                  </div>
                  <div class="recent-activity__item__time">3 hours ago</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:alert-circle-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new vehicle
                  </div>
                  <div class="recent-activity__item__time">4 hours ago</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:alert-circle-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new vehicle
                  </div>
                  <div class="recent-activity__item__time">4 hours ago</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:account-badge-alert-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new lead
                  </div>
                  <div class="recent-activity__item__time">6 hours ago</div>
                </div>

                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:account-badge-alert-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new lead
                  </div>
                  <div class="recent-activity__item__time">6 hours ago</div>
                </div>
                <div class="recent-activity__item">
                  <div class="recent-activity__item__box recent-activity__item__icon">
                    <span
                      class="iconify"
                      data-icon="mdi:account-badge-alert-outline"
                      data-inline="false"
                    ></span>
                  </div>
                  <div class="recent-activity__item__box recent-activity__item__text">
                    You added a new lead
                  </div>
                  <div class="recent-activity__item__time">6 hours ago</div>
                </div>
              </div>
              {/* END RECENT ACTIVITY */}

              {/* END ACTION AND RECENT ACTIVITY BOXES */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealerDashboard;
