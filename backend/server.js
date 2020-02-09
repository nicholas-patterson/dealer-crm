const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
const redis = require("redis");
const client = redis.createClient();
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

server.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

server.use(
  session({
    secret: process.env.REDIS_SECRET,
    name: "_dealerCRM",
    saveUninitialized: false,
    resave: false,
    store: new RedisStore({
      host: "localhost",
      port: 6379,
      client: client,
      ttl: 260
    })
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
