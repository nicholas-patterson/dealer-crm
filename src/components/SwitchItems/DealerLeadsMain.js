import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getDealerLeads, deleteLead } from "../../actions/index";
import DealerSingleLeadMain from "./DealerSingleLeadMain";

const DealerLeadsMain = props => {
  useEffect(() => {
    props.getDealerLeads();
  }, []);

  const handleLeadDelete = id => {
    console.log("ID", id);
    props.deleteLead(id);
    //props.getDealerLeads();
    console.log("LEAD ID IN HANDLE DELETE", id);
  };

  console.log("MY DEALERS LEADS", props.leads);
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
            {props.leads &&
              props.leads.map((lead, index) => {
                return (
                  <DealerSingleLeadMain
                    index={index}
                    key={lead.id}
                    lead={lead}
                    handleLeadDelete={handleLeadDelete}
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
  return {
    user: state.userReducer.user,
    leads: state.getDealerLeadReducer.leads
  };
};

export default connect(mapStateToProps, { getDealerLeads, deleteLead })(
  DealerLeadsMain
);
