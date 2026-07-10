require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

require("./models");
const app = express();

app.use(express.json());

  sequelize 
  .sync()
  .then(() => {
    console.log("Database connected");
  

app.listen(3000, () => { 
  console.log("Server running on port 3000");
});
})
.catch(err => {
  console.log(err);
})