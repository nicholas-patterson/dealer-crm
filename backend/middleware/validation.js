const db = require("../models");

const emailValidation = async (req, res, next) => {
  const { dealer_email } = req.body;

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const emailCheck = await db.Dealer.findOne({
    where: {
      dealer_email
    }
  });

  if (!emailRegex.test(dealer_email)) {
    res.status(400).json({ error: "Please enter a valid email" });
  } else if (emailCheck) {
    res.status(400).json({ error: "Email already taken" });
  } else {
    next();
  }
};

const passwordValidation = (req, res, next) => {
  const { dealer_password } = req.body;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (!passwordRegex.test(dealer_password)) {
    res.status(400).json({
      error:
        "Password must be at least 6 characters and include 1 lowercase, 1 uppercase, 1 number, and a special character"
    });
  } else {
    next();
  }
};

const signupValidation = (req, res, next) => {
  const {
    dealer_email,
    dealer_username,
    dealer_password,
    dealer_name,
    dealer_street,
    dealer_city,
    dealer_state,
    dealer_country,
    dealer_zipcode,
    dealer_type
  } = req.body;

  if (
    !dealer_email ||
    !dealer_username ||
    !dealer_password ||
    !dealer_name ||
    !dealer_street ||
    !dealer_city ||
    !dealer_state ||
    !dealer_country ||
    !dealer_zipcode ||
    !dealer_type
  ) {
    res.status(400).json({ error: "All fields are required" });
  } else {
    next();
  }
};

const usernameValidation = async (req, res, next) => {
  const { dealer_username } = req.body;

  const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

  const usernameCheck = await db.Dealer.findOne({
    where: {
      dealer_username: dealer_username
    }
  });

  console.log("USERNAME ?", usernameCheck);
  console.log("------------------");

  if (!usernameRegex.test(dealer_username)) {
    res.status(400).json({
      error:
        "Username must be between 8-20 characters, Can not have _ or . at beginning or at end"
    });
  } else if (usernameCheck) {
    res.status(400).json({ error: "Username already exist" });
  } else {
    next();
  }
};

module.exports = {
  emailValidation,
  passwordValidation,
  signupValidation,
  usernameValidation
};
