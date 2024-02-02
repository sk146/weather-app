require("dotenv").config(); // Add this line at the top

const express = require("express");
const weatherController = require("./controllers/weatherController");

const app = express();
const port = process.env.PORT || 3000;

app.use("/", express.static("web/dist"));
app.use("/weather", weatherController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
