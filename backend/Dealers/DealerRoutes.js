const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emitter = require("../config/io");
const {
  emailValidation,
  passwordValidation,
  signupValidation,
  usernameValidation,
  dealerSignInValidation,
  dealerPasswordUpdateValidation
} = require("../middleware/validation");
const { Op } = require("sequelize");
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
    if (!dealer) {
      res.status(400).json({ warning: "Dealer with that id is not found" });
    } else {
      res.status(200).json(dealer);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Register Dealer
router.post(
  "/register",
  signupValidation,
  emailValidation,
  passwordValidation,
  usernameValidation,
  async (req, res) => {
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
      let d = JSON.parse(JSON.stringify(newDealer));
      delete d.dealer_password;
      d.userRole = "dealer";

      d.token = await jwt.sign(d, process.env.JWT_SECRET);

      res.status(201).json(d);
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

// Login Dealer
router.post("/login", dealerSignInValidation, async (req, res) => {
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
      let d = JSON.parse(JSON.stringify(user));
      delete d.dealer_password;
      d.userRole = "dealer";
      emitter.emitToDealer(d.id, "dealer_login", d);

      d.token = await jwt.sign(d, process.env.JWT_SECRET);

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
            "id",
            "lead_firstname",
            "lead_lastname",
            "lead_street",
            "lead_city",
            "lead_state",
            "lead_email",
            "lead_phone",
            "lead_type",
            "salesman_id",
            "dealer_id",
            "salesman_lead"
          ]
        }
      ]
    });
    res.status(200).json(leads);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update Email
router.put("/email/update", emailValidation, (req, res) => {
  const { dealer_email, dealer_password } = req.body;
  db.Dealer.findOne({
    where: {
      dealer_username: req.session.dealer_user.dealer_username
    }
  })
    .then(dealer => {
      const comparePass = bcrypt.compareSync(
        dealer_password,
        dealer.dealer_password
      );
      if (comparePass && dealer) {
        req.session.dealer_user.dealer_email = dealer_email;
        return db.Dealer.update(
          {
            dealer_email: req.session.dealer_user.dealer_email
          },
          { returning: true, where: { id: dealer.id } }
        )
          .then(([rowsUpdated, [updatedEmail]]) => {
            res.status(201).json({ rowsUpdated, updatedEmail });
          })
          .catch(err => {
            res.status(400).json(err);
          });
      } else {
        res.status(400).json({ warning: "Password is incorrect" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// Update Username
router.put("/username/update", usernameValidation, (req, res) => {
  const { dealer_username, dealer_password } = req.body;
  db.Dealer.findOne({
    where: {
      dealer_username: req.session.dealer_user.dealer_username
    }
  })
    .then(dealer => {
      const comparePass = bcrypt.compareSync(
        dealer_password,
        dealer.dealer_password
      );
      if (comparePass && dealer) {
        req.session.dealer_user.dealer_username = dealer_username;
        return db.Dealer.update(
          {
            dealer_username: req.session.dealer_user.dealer_username
          },
          { returning: true, where: { id: dealer.id } }
        )
          .then(([rowsUpdated, [updatedUsername]]) => {
            res.status(201).json({ rowsUpdated, updatedUsername });
          })
          .catch(err => {
            res.status(400).json(err);
          });
      } else {
        res.status(400).json({ warning: "Password is incorrect" });
      }
    })
    .catch(err => {
      console.log(err);
    });
});

// Update Password
router.put("/password/update", dealerPasswordUpdateValidation, (req, res) => {
  const { current_password, new_password, confirm_new_password } = req.body;
  db.Dealer.findOne({
    where: {
      dealer_username: req.session.dealer_user.dealer_username
    }
  })
    .then(dealer => {
      const comparePass = bcrypt.compareSync(
        current_password,
        dealer.dealer_password
      );
      if (dealer && comparePass && new_password === confirm_new_password) {
        const hash = bcrypt.hashSync(new_password, 10);
        req.session.dealer_user.dealer_password = hash;
        return db.Dealer.update(
          {
            dealer_password: req.session.dealer_user.dealer_password
          },
          { returning: true, where: { id: req.session.dealer_user.id } }
        )
          .then(([rowsUpdated, [pass]]) => {
            console.log("INFO", { rowsUpdated, pass });
            res.status(201).json({ rowsUpdated, pass });
          })
          .catch(err => {
            res.status(400).json(err);
          });
      }
    })
    .catch(err => {
      res.status(400).json({ warning: "Dealer not found" });
    });
});

// Get Dealer Notifications
router.get("/notifications/all", async (req, res) => {
  try {
    const notifications = await db.DealerNotification.findAll({
      where: {
        dealer_id: req.session.dealer_user.id,
        [Op.or]: [
          { title: "dealer_lead" },
          { title: "sales_lead" },
          { title: "dealer_lead_updated" },
          { title: "lead_deleted" },
          { title: "new_inventory_added" },
          { title: "new_inventory_deleted" },
          { title: "used_inventory_added" },
          { title: "used_inventory_deleted" },
          { title: "new_salesman" }
        ]
      }
    });
    console.log(notifications);
    res.status(200).json(notifications);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout Dealer
router.get("/logout/user", (req, res) => {
  if (req.session) {
    req.session.destroy(error => {
      if (error) {
        res.status(500).json({ error: "Server could not log you out" });
      } else {
        res.clearCookie("_dealerCRM");
        res.status(200).json({ message: "Thanks for visiting" });
      }
    });
  } else {
    res.status(200).json({ message: "You are already logged out" });
  }
});

module.exports = router;
