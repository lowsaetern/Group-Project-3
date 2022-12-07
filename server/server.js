require("dotenv").config();
require("./db/connect");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const auth = require("./routes/auth");
const cors = require("cors");
const port = process.env.PORT;

//mongoose.Promise = global.Promise;
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.ATLAS_URI,
    }),
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use(auth);
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
