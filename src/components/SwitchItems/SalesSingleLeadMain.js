import React from "react";
import { Icon } from "@iconify/react";
import editOutline from "@iconify/icons-ant-design/edit-outline";
import deleteOutline from "@iconify/icons-ant-design/delete-outline";

const SalesSingleLeadMain = ({
  lead,
  handleSalesmanLeadDelete,
  index,
  user,
  props,
  leads
}) => {
  console.log("PROPS IN SSLM", lead);
  return (
    <>
      <tr>
        <td>
          {lead.lead_firstname} {lead.lead_lastname}
        </td>
        <td>
          {lead.lead_street}, {lead.lead_city}, {lead.lead_state}{" "}
        </td>
        <td>{lead.lead_type}</td>
        <td className="edit-style">
          <Icon
            //onClick={handleLeadEdit}
            className="edit-icon"
            icon={editOutline}
          />
        </td>
        <td className="delete-style">
          <Icon
            onClick={() => handleSalesmanLeadDelete(lead.id)}
            className="del-icon"
            icon={deleteOutline}
          />
        </td>
      </tr>
    </>
  );
};

export default SalesSingleLeadMain;
