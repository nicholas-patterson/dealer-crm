import React from "react";
import { Icon } from "@iconify/react";
import newButton from "@iconify/icons-emojione-monotone/new-button";
import editOutline from "@iconify/icons-ant-design/edit-outline";
import deleteOutline from "@iconify/icons-ant-design/delete-outline";

const DealerLeadsMain = () => {
  return (
    <>
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>

      <div className="view-all-box">
        <p>View All</p>
      </div>

      <div className="leads">
        <div className="leads__heading">Recent Leads</div>
        <div className="categories">
          <ul className="categories__category">
            <li>First Name</li>
            <li>Address</li>
            <li>Type</li>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </div>

        {/* Start Leads List */}

        <div className="recent-leads__items">
          <div className="recent-leads__item">
            <div className="recent-leads__item__box recent-leads__item__icon">
              <Icon icon={newButton} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__name">
              Nicholas Pattterson
            </div>
            <div className="recent-leads__item__box recent-leads__item__address">
              1500 Redis Lane Javascript, Js 18999
            </div>
            <div className="recent-leads__item__box recent-leads__item__type">
              Referral
            </div>
            <div className="recent-leads__item__box recent-leads__item__edit">
              <Icon icon={editOutline} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__delete">
              <Icon icon={deleteOutline} />
            </div>
          </div>
          <div className="recent-leads__item">
            <div className="recent-leads__item__box recent-leads__item__icon">
              <Icon icon={newButton} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__name">
              Nicholas Pattterson
            </div>
            <div className="recent-leads__item__box recent-leads__item__address">
              1500 Redis Lane Javascript, Js 18999
            </div>
            <div className="recent-leads__item__box recent-leads__item__type">
              Referral
            </div>
            <div className="recent-leads__item__box recent-leads__item__edit">
              <Icon icon={editOutline} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__delete">
              <Icon icon={deleteOutline} />
            </div>
          </div>
          <div className="recent-leads__item">
            <div className="recent-leads__item__box recent-leads__item__icon">
              <Icon icon={newButton} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__name">
              Nicholas Pattterson
            </div>
            <div className="recent-leads__item__box recent-leads__item__address">
              1500 Redis Lane Javascript, Js 18999
            </div>
            <div className="recent-leads__item__box recent-leads__item__type">
              Referral
            </div>
            <div className="recent-leads__item__box recent-leads__item__edit">
              <Icon icon={editOutline} />
            </div>
            <div className="recent-leads__item__box recent-leads__item__delete">
              <Icon icon={deleteOutline} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DealerLeadsMain;
