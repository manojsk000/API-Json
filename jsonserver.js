const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("movies.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8892;

server.use(middlewares);
server.use(router);

server.listen(port);