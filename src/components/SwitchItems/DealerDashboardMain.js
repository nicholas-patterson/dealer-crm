import React, { useEffect } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import {
  getSalesmans,
  getDealerNotifications,
  getSalesmanNotifications,
  deleteDealerNotification,
  deleteSalesmanNotification
} from "../../actions/index";
import { mdiDeleteAlertOutline } from "@mdi/js";
import { mdiBadgeAccountAlertOutline } from "@mdi/js";
import { mdiCarConnected } from "@mdi/js";
import { mdiAccountPlusOutline } from "@mdi/js";
import Icon from "@mdi/react";
import CloseIcon from "@material-ui/icons/Close";
import Moment from "react-moment";
import { Howl, Howler } from "howler";
import deletesound from "../../sounds/deletesound.mp3";

import io from "socket.io-client";

const DealerDashboardMain = props => {
  const socket = io("http://localhost:5000", {
    transports: ["websocket"],
    multiplex: false,
    query: `token=${
      props.user === "dealer" ? props.dealer_token : props.salesman_token
    }`
  });

  useEffect(() => {
    return props.user === "dealer" ? props.getDealerNotifications() : undefined;
  }, []);

  useEffect(() => {
    return props.user === "salesman"
      ? props.getSalesmanNotifications()
      : undefined;
  }, []);

  useEffect(() => {
    socket.on("message", message => {
      console.log("SOCKET MESSAGE", message);
      props.user === "dealer"
        ? props.getDealerNotifications()
        : props.getSalesmanNotifications();
    });
  }, [props.user === "dealer" ? props.dealer_leads : props.salesman_leads]);

  const renderIcon = notification => {
    if (notification.title === "dealer_lead") {
      return (
        <Icon path={mdiBadgeAccountAlertOutline} size={1.5} color="#39c" />
      );
    } else if (notification.title === "new_inventory_added") {
      return <Icon path={mdiCarConnected} size={1.5} color="#39c" />;
    } else if (notification.title === "new_salesman") {
      return <Icon path={mdiAccountPlusOutline} size={1.5} color="#39c" />;
    } else if (notification.title === "lead_deleted") {
      return <Icon path={mdiDeleteAlertOutline} size={1.5} color="#39c" />;
    } else if (notification.title === "sales_lead") {
      return (
        <Icon path={mdiBadgeAccountAlertOutline} size={1.5} color="#39c" />
      );
    } else if (notification.title === "lead_added") {
      return (
        <Icon path={mdiBadgeAccountAlertOutline} size={1.5} color="#39c" />
      );
    } else if (notification.title === "new_inventory_deleted") {
      return <Icon path={mdiDeleteAlertOutline} size={1.5} color="#39c" />;
    } else if (notification.title === "used_inventory_deleted") {
      return <Icon path={mdiDeleteAlertOutline} size={1.5} color="#39c" />;
    } else if (notification.title === "used_inventory_added") {
      return <Icon path={mdiCarConnected} size={1.5} color="#39c" />;
    }
  };

  const sound = new Howl({
    src: deletesound
  });

  const delDealerNotif = notification => {
    props.deleteDealerNotification(notification.id);
    sound.play();
  };

  const delSalesmanNotif = notification => {
    props.deleteSalesmanNotification(notification.id);
    sound.play();
  };

  Howler.volume(0.5);

  console.log(props);

  return (
    <>
      <div>
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
                    (props.user === "salesman"
                      ? "sales_border"
                      : "dealer_border")
                  }
                  //onClick={props.salesClick}
                  onClick={() => getSalesmans()}
                >
                  <p>Add New Salesperson</p>
                </Link>
              )}

              {/* {props.user === "salesman" ? null : (
                <Link
                  to="/dealer/dash/newmanager"
                  className={
                    "console__control " +
                    (props.user === "salesman"
                      ? "sales_border"
                      : "dealer_border")
                  }
                  onClick={props.managerClick}
                >
                  <p>Add New Manager</p>
                </Link>
              )} */}
            </div>
          </div>

          {/* START RECENT ACTIVITY SECTION*/}
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

            {/* Start of Recent Activity List */}
            <div className="recent-activity__items">
              {props.user === "dealer"
                ? props.dealer_notifications.map(notification => {
                    return (
                      <div className="recent-activity__item">
                        <div className="recent-activity__item__box recent-activity__item__icon">
                          <span>{renderIcon(notification)}</span>
                        </div>
                        <div className="recent-activity__item__box recent-activity__item__text">
                          {notification.data.message}
                        </div>
                        <div className="recent-activity__item__time">
                          <Moment fromNow ago>
                            {notification.createdAt}
                          </Moment>{" "}
                          ago
                        </div>
                        <CloseIcon
                          onClick={() => delDealerNotif(notification)}
                          className="notif-close-btn"
                        />
                      </div>
                    );
                  })
                : props.salesman_notifications.map(notification => {
                    console.log(notification);
                    return (
                      <div className="recent-activity__item">
                        <div className="recent-activity__item__box recent-activity__item__icon">
                          <span>{renderIcon(notification)}</span>
                        </div>
                        <div className="recent-activity__item__box recent-activity__item__text">
                          {notification.data.message}
                        </div>
                        <div className="recent-activity__item__time">
                          <Moment fromNow ago>
                            {notification.createdAt}
                          </Moment>{" "}
                          ago
                        </div>
                        <CloseIcon
                          onClick={() => delSalesmanNotif(notification)}
                          className="notif-close-btn"
                        />
                      </div>
                    );
                  })}
            </div>
            {/* END RECENT ACTIVITY */}

            {/* END ACTION AND RECENT ACTIVITY BOXES */}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    salesman: state.salesLoginReducer.user,
    dealer_leads: state.getDealerLeadReducer.leads,
    salesman_leads: state.getSalesLeadReducer.leads,
    dealer_token: state.loginReducer.token || state.loginReducer.user.token,
    salesman_token: state.salesLoginReducer.user.token,
    dealer_notifications: state.getDealerNotificationsReducer.notifications,
    salesman_notifications: state.getSalesmanNotificationReducer.notifications
  };
};

export default connect(mapStateToProps, {
  getSalesmans,
  getDealerNotifications,
  getSalesmanNotifications,
  deleteDealerNotification,
  deleteSalesmanNotification
})(React.memo(DealerDashboardMain));
