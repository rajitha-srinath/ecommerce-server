const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require("dotenv").config();

const authRoutes = require("./routes/auth");

// App
const app = express();

// DB
mongoose
  .connect(process.env.DATABASE, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DB CONNECTED..."))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// Route middlewares
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// Port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
