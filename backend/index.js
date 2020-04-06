const server = require("./server");
const port = 5000 || process.env.PORT;

server.listen(port, () => console.log(`Server Is Listening On Port ${port}`));
