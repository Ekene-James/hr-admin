const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");


const cookieParser = require("cookie-parser");
const helmet = require("helmet");

const cors = require("cors");
const rateLimit = require("express-rate-limit");
const mongoSanitize = require("express-mongo-sanitize");
const colors = require("colors");

//bring in the router files

const employees = require("./routes/employees");
const auth = require("./routes/auth");


const errorHandler = require("./middleware/error");

dotenv.config({ path: "./config/config.env" });

const app = express();


app.use(express.json());

app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());

app.use(cors());
const limit = rateLimit({
  windowMs: 10 * 60 * 1000, //10mins
  max: 100
});
app.use(limit);
//set static folder


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
//connect to db
const db = process.env.MONGO_URI
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(connections => {
    console.log(`mongodb connected `.cyan.underline.bold);
  })
  .catch(err => console.log(`${err.message}`.red.bold));

//mount the routers

app.use("/api/employees", employees);
app.use("/api/auth", auth);

app.use(errorHandler);



if (process.env.NODE_ENV === "production") {
  //set static folder.
  
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `App listening on PORT: ${PORT}! and on mode : ${process.env.NODE_ENV}`
      .yellow.bold
  )
);
process.on("unhandledRejection" || "uncaughtException", (err, promise) => {
  console.log(`error : ${err.message}`);
  server.close(() => process.exit(1));
});
