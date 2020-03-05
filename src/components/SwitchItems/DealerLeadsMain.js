import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDealerLeads,
  deleteLead,
  editLead,
  getSalesmanLeads,
  deleteSalesmanLead,
  editSalesLead,
  clearError
} from "../../actions/index";
import DealerSingleLeadMain from "./DealerSingleLeadMain";
import SalesSingleLeadMain from "./SalesSingleLeadMain";
import Banner from "react-js-banner";

const DealerLeadsMain = props => {
  console.log("PROPS IN DEALER LEADS MAIN", props);
  useEffect(() => {
    return props.user === "dealer"
      ? props.getDealerLeads()
      : props.getSalesmanLeads();
  }, []);

  const handleLeadDelete = id => {
    props.deleteLead(id);
  };

  const handleSalesmanLeadDelete = id => {
    props.deleteSalesmanLead(id);
    props.clearError();
  };

  return (
    <>
      {props.errors ? <Banner title={props.errors} visibleTime={3000} /> : null}
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
                  console.log("LEAD IN MAP", lead);
                  return (
                    <DealerSingleLeadMain
                      index={index}
                      key={lead.id}
                      lead={lead}
                      handleLeadDelete={handleLeadDelete}
                      user={props.user}
                      props={props}
                      leads={props.leads}
                      dealer_id={props.dealer_id}
                    />
                  );
                })
              : props.sales_leads &&
                props.sales_leads.map((lead, index) => {
                  return (
                    <SalesSingleLeadMain
                      index={index}
                      key={lead.id}
                      lead={lead}
                      user={props.user}
                      props={props}
                      leads={props.sales_leads}
                      handleSalesmanLeadDelete={handleSalesmanLeadDelete}
                      sales_dealer_id={props.sales_dealer_id}
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
  console.log("MSTP", state);
  return {
    user: state.userReducer.user,
    leads: state.getDealerLeadReducer.leads,
    sales_leads: state.getSalesLeadReducer.leads,
    dealer_id: state.loginReducer.user.id,
    sales_dealer_id: state.salesLoginReducer.user.id,
    errors: state.getSalesLeadReducer.error
  };
};

export default connect(mapStateToProps, {
  getSalesmanLeads,
  getDealerLeads,
  deleteLead,
  editLead,
  deleteSalesmanLead,
  editSalesLead,
  clearError
})(DealerLeadsMain);
