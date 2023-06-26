const jsonServer = require("json-server");
const server = jsonServer.create();
const router1 = jsonServer.router("movies.json");
const router2 = jsonServer.router("portfolio.json")
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8892;

server.use(middlewares);
server.use(router1);
server.use(router2)

server.listen(port);