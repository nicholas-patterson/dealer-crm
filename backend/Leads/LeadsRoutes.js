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
    res.status(201).json(newLead);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
