const server = require("./server");
const port = 5000 || process.env.port;

server.listen(port, () => console.log(`Server Is Listening On Port ${port}`));
