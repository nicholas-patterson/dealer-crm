const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();

server.use(
  cors({
    origin: "http://localhost:3000"
  })
);
// Routes
const dealerRouter = require("./Dealers/DealerRoutes");
const leadsRouter = require("./Leads/LeadsRoutes");
const salesmanRouter = require("./Salesman/SalesmanRoutes");

server.use(express.json());
server.use("/api/dealer", dealerRouter);
server.use("/api/leads", leadsRouter);
server.use("/api/sales", salesmanRouter);

module.exports = server;
