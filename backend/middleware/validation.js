const db = require("../models");

// Dealer Routes Validation
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

const dealerPasswordUpdateValidation = (req, res, next) => {
  const { new_password, confirm_new_password } = req.body;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (new_password !== confirm_new_password) {
    res.status(400).json({ error: "Passwords do not match" });
  } else if (
    !passwordRegex.test(new_password) ||
    !passwordRegex.test(confirm_new_password)
  ) {
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

const dealerSignInValidation = async (req, res, next) => {
  const { username, password } = req.body;

  const usernameCheck = await db.Dealer.findOne({
    where: {
      dealer_username: username
    }
  });

  if (username.length < 8 || username.length > 20) {
    res.status(400).json({ warning: "Please enter a valid usename" });
  } else if (!username) {
    res.status(400).json({ warning: "You must enter a username" });
  } else if (!password) {
    res.status(400).json({ warning: "you must enter a pasword" });
  } else if (!usernameCheck) {
    res.status(400).json({ warning: "Username does not exist" });
  } else {
    next();
  }
};

// Salesman Routes Validation

const salesmanEmailValidation = async (req, res, next) => {
  const { salesman_email } = req.body;

  const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  const emailCheck = await db.Salesman.findOne({
    where: {
      salesman_email
    }
  });

  if (!emailRegex.test(salesman_email)) {
    res.status(400).json({ error: "Please enter a valid email" });
  } else if (emailCheck) {
    res.status(400).json({ error: "Email already taken" });
  } else {
    next();
  }
};

const salesmanSignupValidation = (req, res, next) => {
  const {
    salesman_firstname,
    salesman_lastname,
    salesman_username,
    salesman_password,
    salesman_email
  } = req.body;

  if (
    !salesman_firstname ||
    !salesman_lastname ||
    !salesman_username ||
    !salesman_password ||
    !salesman_email
  ) {
    res.status(400).json({ error: "All fields are required" });
  } else {
    next();
  }
};

const salesmanUsernameValidation = async (req, res, next) => {
  const { salesman_username } = req.body;

  const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

  const usernameCheck = await db.Salesman.findOne({
    where: {
      salesman_username
    }
  });

  if (!usernameRegex.test(salesman_username)) {
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

const salesmanPasswordValidation = (req, res, next) => {
  const { salesman_password } = req.body;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

  if (!passwordRegex.test(salesman_password)) {
    res.status(400).json({
      error:
        "Password must be at least 6 characters and include 1 lowercase, 1 uppercase, 1 number, and a special character"
    });
  } else {
    next();
  }
};

module.exports = {
  emailValidation,
  passwordValidation,
  signupValidation,
  usernameValidation,
  salesmanEmailValidation,
  salesmanPasswordValidation,
  salesmanSignupValidation,
  salesmanUsernameValidation,
  dealerSignInValidation,
  dealerPasswordUpdateValidation
};
