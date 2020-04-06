const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const http = require("http");
const server = http.createServer(app);
const redisAdapter = require("socket.io-redis");

const io = require("socket.io")();
const socketioJwt = require("socketio-jwt");
io.adapter(
  redisAdapter({ host: process.env.REDIS_HOST, port: process.env.REDIS_PORT })
);

io.use(
  socketioJwt.authorize({
    secret: process.env.JWT_SECRET,
    handshake: true,
  })
);

const socketAuthService = require("./sockets/auth");
socketAuthService.register(io);
io.listen(server);

app.set("socketio", io); // SET IO INSTANCE TO SOCKETIO TO USE IN OTHER ROUTES IF NEED BE
const redis = require("redis");
const client = redis.createClient();
const session = require("express-session");
const RedisStore = require("connect-redis")(session);

app.use(
  cors({
    credentials: true,
    //origin: "http://localhost:3000", // change to production IP
    origin:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "http://206.189.235.148",
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
    ttl: 86400, // 1 day
  }),
});

app.use(sessionMiddleware);

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
