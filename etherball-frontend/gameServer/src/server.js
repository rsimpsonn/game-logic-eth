const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");
const routes = require("./routes/router");
const socketIO = require("socket.io");
const http = require("http");
const _ = require("lodash");

const Game = require("./logic/game");

mongoose.connect("mongodb://ryan:etherball1@ds261430.mlab.com:61430/etherball");

// var log = console.log;
// console.log = function() {
//   log.apply(console, arguments);
//   // Print the stack trace
//   console.trace();
// };

var db = mongoose.connection;

db.on("error", err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once("open", () => {
  console.log("DB connected successfully!");
});

const app = new express();

app.use(
  session({
    secret: "Stack",
    resave: true,
    saveUninitialized: false,
    adapter: "connect-mongo",
    store: new MongoStore({
      mongooseConnection: db
    }),
    collection: "sessions"
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

app.use(function(req, res, next) {
  const err = new Error("File not Found");
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", socket => {
  console.log("User connected");

  socket.on("newGame", () => {
    console.log("user connected to game!");

    var index = 0;
    const messages = [];

    const broadcastMessage = message => {
      messages.push(_.cloneDeep(message));
    };

    const game = new Game(broadcastMessage);

    setInterval(() => {
      socket.emit("gameMessage", messages[index]);
      index++;
    }, 2000);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, function() {
  console.log("Express app listening on port 3000");
});
