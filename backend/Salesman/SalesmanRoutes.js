const router = require("express").Router();
const db = require("../models");
const bcrypt = require("bcrypt");

// Get All Salesman
router.get("/", async (req, res) => {
  try {
    const salesmans = await db.Salesman.findAll();
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
router.post("/register", async (req, res) => {
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
    console.log("NEW SALESMAN", newSalesman);
    res.status(201).json(newSalesman);
  } catch (err) {
    res.status(500).json(err);
  }
});

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
      res.status(201).json(salesman);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
