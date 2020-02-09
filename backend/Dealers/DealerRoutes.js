const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// Get All Dealers
router.get("/", async (req, res) => {
  try {
    const dealers = await db.Dealer.findAll();
    res.status(200).json(dealers);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Single Dealer
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const dealer = await db.Dealer.findOne({
      where: {
        id
      }
    });
    res.status(200).json(dealer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Register Dealer
router.post("/register", async (req, res) => {
  const password = req.body.dealer_password;
  const hash = bcrypt.hashSync(password, 10);

  try {
    const newDealer = await db.Dealer.create({
      dealer_email: req.body.dealer_email,
      dealer_username: req.body.dealer_username,
      dealer_password: hash,
      dealer_name: req.body.dealer_name,
      dealer_street: req.body.dealer_street,
      dealer_city: req.body.dealer_city,
      dealer_state: req.body.dealer_state,
      dealer_country: req.body.dealer_country,
      dealer_zipcode: req.body.dealer_zipcode,
      dealer_type: req.body.dealer_type
    });
    console.log("NEW DEALER", newDealer);
    res.status(201).json(newDealer);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login Dealer
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await db.Dealer.findOne({
      where: {
        dealer_username: username
      }
    });
    const comparePass = bcrypt.compareSync(password, user.dealer_password);
    if (comparePass && user) {
      req.session.dealer_user = user;
      console.log("LOGGED IN DEALER SESSION", req.session.dealer_user);
      console.log("-----------------");
      console.log("LOGGED IN DEALER SESSION ID", req.session.dealer_user.id);
      res.status(201).json({ message: `Welcome ${user.dealer_username}` });
    } else {
      res.status(400).json({ warning: "Username and Password do not match" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Leads by Dealer Id
router.get("/all/leads", async (req, res) => {
  try {
    const [leads] = await db.Dealer.findAll({
      attributes: [
        "dealer_username",
        "dealer_email",
        "dealer_name",
        "dealer_street",
        "dealer_city",
        "dealer_state",
        "dealer_country",
        "dealer_zipcode"
      ],
      where: {
        id: req.session.dealer_user.id
      },
      include: [
        {
          model: db.Lead,
          required: true,
          attributes: [
            "lead_firstname",
            "lead_lastname",
            "lead_street",
            "lead_city",
            "lead_state",
            "lead_email",
            "lead_phone",
            "lead_type"
          ]
        }
      ]
    });
    res.status(200).json(leads);
    console.log("LEADS BY DEALER ID", leads);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Dealer

module.exports = router;
