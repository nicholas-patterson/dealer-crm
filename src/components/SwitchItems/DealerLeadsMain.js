import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import editOutline from "@iconify/icons-ant-design/edit-outline";
import deleteOutline from "@iconify/icons-ant-design/delete-outline";
import { connect } from "react-redux";
import { getDealerLeads } from "../../actions/index";

const DealerLeadsMain = props => {
  useEffect(() => {
    props.getDealerLeads();
  }, []);

  console.log("MY DEALERS LEADS", props.leads.Leads);
  return (
    <>
      <div className="header-dealer">
        <div className="header-dealer__name">Dealership: Ford</div>
        <div className="header-dealer__notifications">Notifications</div>
      </div>

      <div
        className={
          "view-all-box " +
          (props.user === "salesman" ? "sales_view_box" : "dealer_view_box")
        }
      >
        <p>View All</p>
      </div>

      <div className="leads">
        <div
          className={
            "leads__heading " +
            (props.user === "salesman" ? "sales_bb" : "dealer_bb")
          }
        >
          Recent Leads
        </div>

        <table>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Address</th>
              <th>Type</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <td className="spaceunder"></td>
          <tbody>
            {/* <tr>
              <td>Nicholas Patterson</td>
              <td>1500 Redis Lane, Javascript, Js 18999</td>
              <td>Referral</td>
              <td className="edit-style">
                <Icon icon={editOutline} />
              </td>
              <td className="delete-style">
                <Icon icon={deleteOutline} />
              </td>
            </tr> */}
            {props.leads.Leads &&
              props.leads.Leads.map(lead => {
                return (
                  <tr key={lead.id}>
                    <td>
                      {lead.lead_firstname} {lead.lead_lastname}
                    </td>
                    <td>
                      {lead.lead_street}, {lead.lead_city}, {lead.lead_state}{" "}
                      {lead.lead_type}
                    </td>
                    <td className="edit-style">
                      <Icon icon={editOutline} />
                    </td>
                    <td className="delete-style">
                      <Icon icon={deleteOutline} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
          {/* <tbody>
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
          </tbody> */}
        </table>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    leads: state.getDealerLeadReducer.leads
  };
};

export default connect(mapStateToProps, { getDealerLeads })(DealerLeadsMain);
