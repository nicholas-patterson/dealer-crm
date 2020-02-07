const express = require("express");
require("dotenv").config();
const server = express();

// Routes
const dealerRouter = require("./Dealers/DealerRoutes");

server.use(express.json());
server.use("/api/dealer", dealerRouter);

module.exports = server;
