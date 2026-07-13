require("dotenv").config();

const express = require("express");
const sequelize = require("./config/database");

const arbitreRoutes = require("./routes/arbitre.routes");

require("./models");
const app = express();

app.use(express.json());
app.use("/arbitres",arbitreRoutes);

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