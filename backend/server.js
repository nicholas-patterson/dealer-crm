const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io").listen(server);
app.set("socketio", io); // SET IO INSTANCE TO SOCKETIO TO USE IN OTHER ROUTES IF NEED BE
const redis = require("redis");
const client = redis.createClient();
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000"
  })
);

// CREATE SESSION STORE
const sessionMiddleware = session({
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
});

// WHENEVER A SESSION IS CREATED (ON LOGIN) A SOCKET IS CREATED WITH THAT SESSSION
io.use(function(socket, next) {
  sessionMiddleware(socket.request, {}, next);
});

app.use(sessionMiddleware);

// IO
io.on("connection", (socket, req) => {
  console.log("SOCKET", socket); // SOCKET INFORMATION ALONG WITH SESSION (CHECK DEALER LOGIN ROUTE WHERE SESSION IS CREATED)
  // Save all connected sockets in array or in redis (stack overflow suggestion)

  socket.on("disconnect", () => {
    console.log(`Socket ${socket.id} disconnected.`);
  });
});

// Routes
const dealerRouter = require("./Dealers/DealerRoutes");
const leadsRouter = require("./Leads/LeadsRoutes");
const salesmanRouter = require("./Salesman/SalesmanRoutes");
const imageRouter = require("./Images/ImageRoutes");
const usedInventoryRouter = require("./UsedInventory/InventoryRoutes");
const newInventoryRouter = require("./NewInventory/newInventoryRoutes");

app.use(express.json());
app.use("/api/dealer", dealerRouter);
app.use("/api/leads", leadsRouter);
app.use("/api/sales", salesmanRouter);
app.use("/api/image", imageRouter);
app.use("/api/usedInventory", usedInventoryRouter);
app.use("/api/newInventory", newInventoryRouter);

module.exports = server;
