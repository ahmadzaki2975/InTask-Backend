const express = require("express");
const app = express();
const dotenv = require("dotenv");

// ? Dotenv config
dotenv.config({ path: "./config/config.env"});
const process = require("process");

// ? Morgan logger config
const morgan = require("morgan");
app.use(morgan("dev"));

// ? Body parser config
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ? Cookie parser config
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// ? CORS config
const cors = require("cors");
app.use(cors({origin: "*"}));

// ? DB Connection
const connectDB = require("./config/connectDB");
connectDB(process.env.MONGO_URI);

// * Start of routes

app.get("/", (req, res) => {
  res.send("<h1>InTask Backend</h1>");
});

const userRouter = require("./routes/user");
app.use("/users", userRouter);

const ownerRouter = require("./routes/owner");
app.use("/owners", ownerRouter);

// * End of routes

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});