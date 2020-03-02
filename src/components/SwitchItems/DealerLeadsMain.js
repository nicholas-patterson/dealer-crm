import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDealerLeads,
  deleteLead,
  editLead,
  getSalesmanLeads
} from "../../actions/index";
import DealerSingleLeadMain from "./DealerSingleLeadMain";
import SalesmanSingleLeadMain from "./SalesmanSingleLeadMain";

const DealerLeadsMain = props => {
  console.log("SALES LEADS", props);
  useEffect(() => {
    props.user === "salesman"
      ? props.getSalesmanLeads()
      : props.getDealerLeads();
  }, []);

  const handleLeadDelete = id => {
    props.deleteLead(id);
  };

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
            {props.user === "dealer"
              ? props.leads &&
                props.leads.map((lead, index) => {
                  console.log("DEALER LEAD IN MAP", lead);
                  return (
                    <DealerSingleLeadMain
                      index={index}
                      key={lead.id}
                      lead={lead}
                      handleLeadDelete={handleLeadDelete}
                      user={props.user}
                      props={props}
                      leads={props.leads}
                    />
                  );
                })
              : props.sales_leads &&
                props.sales_leads.map((lead, index) => {
                  console.log("SALESMAN LEADS IN MAP", lead);
                  return (
                    <SalesmanSingleLeadMain
                      index={index}
                      key={lead.id}
                      lead={lead}
                      user={props.user}
                      props={props}
                      leads={props.sales_leads}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  console.log("STATE STATE STATE", state);
  return {
    user: state.userReducer.user,
    leads: state.getDealerLeadReducer.leads,
    sales_leads: state.getSalesmanLeadReducer.leads
  };
};

export default connect(mapStateToProps, {
  getDealerLeads,
  deleteLead,
  editLead,
  getSalesmanLeads
})(DealerLeadsMain);
