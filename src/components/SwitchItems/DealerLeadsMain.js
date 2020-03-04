import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  getDealerLeads,
  deleteLead,
  editLead,
  getSalesmanLeads,
  deleteSalesmanLead
} from "../../actions/index";
import DealerSingleLeadMain from "./DealerSingleLeadMain";
import SalesSingleLeadMain from "./SalesSingleLeadMain";

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
                  return (
                    <SalesSingleLeadMain
                      index={index}
                      key={lead.id}
                      lead={lead}
                      user={props.user}
                      props={props}
                      leads={props.sales_leads}
                      handleSalesmanLeadDelete={handleSalesmanLeadDelete}
                    />
                  );
                })}
          </tbody>
        </table>
      </div>
    </>
  );
};

// {props.leads &&
//   props.leads.map((lead, index) => {
//     return (
//       <DealerSingleLeadMain
//         index={index}
//         key={lead.id}
//         lead={lead}
//         handleLeadDelete={handleLeadDelete}
//         user={props.user}
//         props={props}
//         leads={props.leads}
//       />
//     );
//   })}

const mapStateToProps = state => {
  console.log("MSTP", state.getSalesLeadReducer.leads);
  return {
    user: state.userReducer.user,
    leads: state.getDealerLeadReducer.leads,
    sales_leads: state.getSalesLeadReducer.leads
  };
};

export default connect(mapStateToProps, {
  getSalesmanLeads,
  getDealerLeads,
  deleteLead,
  editLead,
  deleteSalesmanLead
})(DealerLeadsMain);
