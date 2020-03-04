const router = require("express").Router();
const db = require("../models");

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

// Add Lead
router.post("/add", async (req, res) => {
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
    console.log("NEW LEAD", req.body);
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Lead For Salesman
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
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Edit Lead
router.put("/update/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [rowsUpdated, [updatedBook]] = await db.Lead.update(
      {
        lead_firstname: req.body.lead_firstname,
        lead_lastname: req.body.lastname,
        lead_street: req.body.lead_street,
        lead_city: req.body.lead_city,
        lead_state: req.body.lead_state,
        lead_email: req.body.lead_email,
        lead_phone: req.body.lead_phone,
        lead_type: req.body.lead_type,
        dealer_id: req.session.dealer_user.id
      },
      { returning: true, where: { id } }
    );
    console.log("ROWS UDATED", rowsUpdated);
    if (rowsUpdated === 0) {
      res
        .status(400)
        .json({ warning: "Lead with that id was not found and or updated" });
    } else {
      res.status(200).json({ rowsUpdated, updatedBook });
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
            res.status(200).json({ deletedLead: lead });
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
          warning: "Lead Was Assigned By Dealer. Must Have Dealer Delete Lead"
        });
      } else {
        return db.Lead.destroy({
          where: {
            id
          }
        })
          .then(deletedLead => {
            if (deletedLead === 1) {
              res.status(200).json({ deletedLead: lead });
            }
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
