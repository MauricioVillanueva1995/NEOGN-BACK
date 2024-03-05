const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const mercadopago = require("mercadopago");

const server = express();

server.use(function (req, res, next) {
  // res.header("Access-Control-Allow-Origin", "*");
  const allowedOrigins = [
    "http://localhost:3000",
    "http://neogn-front.onrender.com/",
    "https://neogn-front.onrender.com/",
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-credentials", true);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
  next();
});

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

server.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://http2.mlstatic.com"],
    },
  })
);
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use("/api", router);

module.exports = server;
