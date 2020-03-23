const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  salesmanEmailValidation,
  salesmanPasswordValidation,
  salesmanSignupValidation,
  salesmanUsernameValidation
} = require("../middleware/validation");
const emitter = require("../config/io");
const { Op } = require("sequelize");

// Get All Salesman
router.get("/salesmans", async (req, res) => {
  try {
    const salesmans = await db.Salesman.findAll({
      attributes: [
        "id",
        "salesman_firstname",
        "salesman_lastname",
        "salesman_username",
        "salesman_email",
        "dealer_id"
      ]
    });
    res.status(200).json(salesmans);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get One Salesman
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const salesman = await db.Salesman.findOne({
      where: {
        id
      }
    });
    res.status(200).json(salesman);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Register Salesman
router.post(
  "/register",
  salesmanSignupValidation,
  salesmanEmailValidation,
  salesmanPasswordValidation,
  salesmanUsernameValidation,
  async (req, res) => {
    const { salesman_password } = req.body;
    const hash = bcrypt.hashSync(salesman_password, 10);

    try {
      const newSalesman = await db.Salesman.create({
        salesman_firstname: req.body.salesman_firstname,
        salesman_lastname: req.body.salesman_lastname,
        salesman_username: req.body.salesman_username,
        salesman_password: hash,
        salesman_email: req.body.salesman_email,
        dealer_id: req.session.dealer_user.id
      });
      console.log("SALESMAN", newSalesman);
      let d = JSON.parse(JSON.stringify(newSalesman));
      d.userRole = "salesman";
      d.token = await jwt.sign(d, process.env.JWT_SECRET);

      emitter.emitToDealer(req.session.dealer_user.id, "new_salesman", {
        salesman: newSalesman,
        message: "You added a new salesman"
      });

      res.status(201).json(d);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

//Login Salesman
router.post("/login", async (req, res) => {
  const { salesman_username, salesman_password } = req.body;
  try {
    const salesman = await db.Salesman.findOne({
      where: {
        salesman_username: salesman_username
      }
    });
    const comparePass = bcrypt.compareSync(
      salesman_password,
      salesman.salesman_password
    );
    if (comparePass && salesman) {
      req.session.sales_user = salesman;
      let d = JSON.parse(JSON.stringify(salesman));
      d.userRole = "salesman";

      d.token = jwt.sign(d, process.env.JWT_SECRET);
      res.status(201).json(d);
    } else {
      res
        .status(400)
        .json({ warning: "Username and/or Password are incorrect" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Leads by Salesman Id
router.get("/all/leads", async (req, res) => {
  try {
    const [leads] = await db.Salesman.findAll({
      attributes: [
        "salesman_firstname",
        "salesman_lastname",
        "salesman_username",
        "salesman_email"
      ],
      where: {
        id: req.session.sales_user.id
      },
      include: [
        {
          model: db.Lead,
          required: true,
          attributes: [
            "id",
            "lead_firstname",
            "lead_lastname",
            "lead_street",
            "lead_city",
            "lead_state",
            "lead_email",
            "lead_phone",
            "lead_type",
            "salesman_lead",
            "dealer_id",
            "salesman_id"
          ]
        }
      ]
    });
    res.status(200).json(leads);
    console.log(leads);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get New Inventory For Salesman Inventory Page
router.get("/newInventory/all", async (req, res) => {
  try {
    const [newInventory] = await db.Salesman.findAll({
      attributes: [
        "salesman_firstname",
        "salesman_lastname",
        "salesman_username",
        "salesman_email"
      ],
      include: [
        {
          model: db.Dealer,
          include: [
            {
              model: db.NewInventory
            }
          ]
        }
      ]
    });
    res.status(200).json(newInventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Used Inventory For Salesman Inventory Page
router.get("/usedInventory/all", async (req, res) => {
  try {
    const [usedInventory] = await db.Salesman.findAll({
      attributes: [
        "salesman_firstname",
        "salesman_lastname",
        "salesman_username",
        "salesman_email"
      ],
      include: [
        {
          model: db.Dealer,
          include: [
            {
              model: db.Inventory
            }
          ]
        }
      ]
    });
    console.log(usedInventory);
    res.status(200).json(usedInventory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get Salesman Notifications
router.get("/notifications/sales/all", async (req, res) => {
  try {
    const notifications = await db.SalesmanNotification.findAll({
      where: {
        salesmans_id: req.session.sales_user.id,
        [Op.or]: [
          { title: "sales_lead" },
          { title: "lead_added" },
          { title: "sales_lead_updated" },
          { title: "lead_deleted" }
        ]
      }
    });
    console.log(notifications);
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Salesman
router.get("/logout/salesman", (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.status(500).json({ error: "Server could not log you out" });
      } else {
        res.clearCookie("_dealerCRM", { path: "/" });
        res.status(200).json({ message: "Thanks for visiting" });
      }
    });
  } else {
    res.status(200).json({ message: "You are already logged out" });
  }
});

module.exports = router;
