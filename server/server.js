const express = require("express");
const app = express();
require("../database/db");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
const path = require("path");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/task", taskRoutes);

app.use(express.static(path.join(__dirname, "../client/dist")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server is running on port :", port);
});
