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
    console.log(lead);
    res.status(200).json(lead);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add Lead
router.post("/add", async (req, res) => {
  console.log("LEAD_TYPE", req.body.lead_type);
  console.log("DEALER ID", req.session.dealer_user);
  console.log("--------------------------------");
  console.log("SESSION", req.session.dealer_user);
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
      dealer_id: req.session.dealer_user.id
      //salesmanId: 1
    });
    console.log("NEW LEAD", req.body.lead_type);
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

// Delete Lead
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

module.exports = router;
