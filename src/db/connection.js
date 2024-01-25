const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/sports_scores", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });
