const emitter = require("socket.io-emitter")({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});

const emitToDealer = function(id, title, data) {
  if (id) emitter.in(`dealer:${id}`).emit("message", { title, data });
};
const emitToAllDealer = function(id, title, data) {
  if (id) emitter.in(`dealer`).emit("message", { title, data });
};
const emitToSalesman = function(id, title, data) {
  if (id) emitter.in(`salesman:${id}`).emit("message", { title, data });
};
const emitToAllSalesman = function(id, title, data) {
  if (id) emitter.in(`salesman`).emit("message", { title, data });
};
module.exports.emitter = emitter;
module.exports.emitToDealer = emitToDealer;
module.exports.emitToSalesman = emitToSalesman;
