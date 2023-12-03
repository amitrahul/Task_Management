const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/task-manager";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(mongoURI, options)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.error("Error connected to MongoDB", error);
  });
