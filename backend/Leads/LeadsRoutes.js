const router = require("express").Router();
const db = require("../models");
const emitter = require("../config/io");

// Get All leads
router.get("/", async (req, res) => {
  try {
    const leads = await db.Lead.findAll();
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get single lead
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const lead = await db.Lead.findOne({
      where: {
        id
      }
    });

    if (!lead) {
      res.status(400).json({ error: "Lead with that id does not exist" });
    } else {
      res.status(200).json(lead);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Lead For Dealer Session
router.post("/add", async (req, res) => {
  const io = req.app.get("socketio");
  console.log("BODDDDY", req.body);
  try {
    const newLead = await db.Lead.create({
      lead_firstname: req.body.lead_firstname,
      lead_lastname: req.body.lead_lastname,
      lead_street: req.body.lead_street,
      lead_city: req.body.lead_city,
      lead_state: req.body.lead_state,
      lead_email: req.body.lead_email,
      lead_phone: req.body.lead_phone,
      lead_type: req.body.lead_type,
      salesman_id: req.body.salesman_id,
      dealer_id: req.session.dealer_user.id
    });
    res.status(201).json(newLead);

    // IF salesman_id IS NULL lead is not created for specific salesman. But if salesman_id is a number it's the id of the salesman from select menu value.
    console.log(req.body.salesman_id);
    if (req.body.salesman_id) {
      emitter.emitToSalesman(req.body.salesman_id, "sales_lead", {
        lead: newLead,
        message: "Your dealer assigned you a new lead"
      });

      emitter.emitToDealer(req.session.dealer_user.id, "sales_lead", {
        lead: newLead,
        message: "You gave a salesman a new lead"
      });
    } else {
      console.log(req.session.dealer_user.id);
      emitter.emitToDealer(req.session.dealer_user.id, "dealer_lead", {
        lead: newLead,
        message: "You added a new lead"
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Lead For Salesman Session
router.post("/sales/add", async (req, res) => {
  console.log("BODDDDY", req.body);
  try {
    const newLead = await db.Lead.create({
      lead_firstname: req.body.lead_firstname,
      lead_lastname: req.body.lead_lastname,
      lead_street: req.body.lead_street,
      lead_city: req.body.lead_city,
      lead_state: req.body.lead_state,
      lead_email: req.body.lead_email,
      lead_phone: req.body.lead_phone,
      lead_type: req.body.lead_type,
      salesman_lead: req.body.salesman_lead,
      salesman_id: req.session.sales_user.id,
      dealer_id: req.body.dealer_id
    });

    console.log("NEW LEAD", req.body);
    emitter.emitToSalesman(req.session.sales_user.id, "lead_added", {
      lead: newLead,
      messaage: "You added a new lead"
    });

    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit Lead for Dealer
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rowsUpdated, [updatedBook]] = await db.Lead.update(
      {
        lead_firstname: req.body.lead_firstname,
        lead_lastname: req.body.lead_lastname,
        lead_street: req.body.lead_street,
        lead_city: req.body.lead_city,
        lead_state: req.body.lead_state,
        lead_email: req.body.lead_email,
        lead_phone: req.body.lead_phone,
        lead_type: req.body.lead_type,
        dealer_id: req.session.dealer_user.id,
        salesman_lead: req.body.salesman_lead,
        salesman_id: req.body.salesman_id
      },
      { returning: true, where: { id } }
    );
    if (rowsUpdated === 0) {
      res
        .status(400)
        .json({ warning: "Lead with that id was not found and or updated" });
    } else {
      emitter.emitToDealer(req.session.dealer_user.id, "dealer_lead_updated", {
        rowsUpdated,
        updatedBook,
        message: "You updated a lead"
      });

      res.status(200).json({ rowsUpdated, updatedBook });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit Lead for Salesman checks is lead was created by salesman or not
router.put("/update/sales/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rowsUpdated, [updatedBook]] = await db.Lead.update(
      {
        lead_firstname: req.body.lead_firstname,
        lead_lastname: req.body.lead_lastname,
        lead_street: req.body.lead_street,
        lead_city: req.body.lead_city,
        lead_state: req.body.lead_state,
        lead_email: req.body.lead_email,
        lead_phone: req.body.lead_phone,
        lead_type: req.body.lead_type,
        dealer_id: req.body.dealer_id,
        salesman_lead: req.body.salesman_lead,
        salesman_id: req.session.sales_user.id
      },
      { returning: true, where: { id } }
    );
    if (!salesman_lead) {
      res
        .status(400)
        .json({ warning: "Lead wad created by Dealer...Dealer must edit" });
    } else {
      emitter.emitToSalesman(req.session.sales_user.id, "sales_lead_updated", {
        rowsUpdated,
        updatedBook,
        message: "You updated a lead"
      });

      res.status(200).json({ rowsUpdated, updatedBook });
      // Sends notification to salesman that they have updated one of their leads
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete Lead For Dealer...Doesn't Check for salesman ID
router.delete("/remove/:id", (req, res) => {
  const { id } = req.params;
  db.Lead.findOne({
    where: {
      id
    }
  })
    .then(lead => {
      console.log("LEAD IN FIRST RES", lead);
      if (lead == null) {
        res.status(400).json({ warning: "Lead with given id was not found" });
      }
      return db.Lead.destroy({
        where: {
          id
        }
      })
        .then(deletedLead => {
          if (deletedLead === 1) {
            emitter.emitToDealer(lead.dealer_id, "lead_deleted", {
              lead,
              message: "You deleted a lead"
            });

            res.status(200).json({ deletedLead: lead });
            // Notification that dealer has deleted one of their leads
          }
          console.log("LEAD IN SECOND RES", lead);
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

// Delete Lead for Salesman...Checks is salesman id on lead is null or !null
router.delete("/remove/sales/:id", (req, res) => {
  const { id } = req.params;
  db.Lead.findOne({
    where: {
      id
    }
  })
    .then(lead => {
      console.log("LEAD IN FIRST RES", lead);
      if (!lead.salesman_lead) {
        res.status(400).json({
          error: "Lead Was Assigned By Dealer. Must Have Dealer Delete Lead"
        });
      } else {
        return db.Lead.destroy({
          where: {
            id
          }
        })
          .then(deletedLead => {
            if (deletedLead === 1) {
              emitter.emitToDealer(lead.dealer_id, "lead_deleted", { lead });
              res.status(200).json({ deletedLead: lead });
            }
            // Notification that salesman has deleted one of their leads
          })
          .catch(err => {
            res.status(500).json(err);
          });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
