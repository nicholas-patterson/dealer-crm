const socketioJwt = require("socketio-jwt");

module.exports = {
  async register(io) {
    // , s = 'rider') {

    io.on("connection", async socket => {
      const room = `${socket.decoded_token.userRole}:${socket.decoded_token.id}`;

      socket.join(room);
      socket.join(socket.decoded_token.userRole, console.log);

      //  console.log(socket.decoded_token);
      socket.on("disconnect", () => {
        //    socket.leave(rome);
      });
    });
  }
};
