import React from "react";
import { Icon } from "@iconify/react";
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

        <table>
          <tr>
            <th>Full Name</th>
            <th>Address</th>
            <th>Type</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tr class="spaceunder"></tr>
          <tr>
            <td>Nicholas Patterson</td>
            <td>1500 Redis Lane, Javascript, Js 18999</td>
            <td>Referral</td>
            <td className="edit-style">
              <Icon icon={editOutline} />
            </td>
            <td className="delete-style">
              <Icon icon={deleteOutline} />
            </td>
          </tr>
          <tr>
            <td>Elvis Knapman</td>
            <td>1100 Json WebToken Pl, JWT, 18787</td>
            <td>Walk in</td>
            <td className="edit-style">
              <Icon icon={editOutline} />
            </td>
            <td className="delete-style">
              <Icon icon={deleteOutline} />
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default DealerLeadsMain;
