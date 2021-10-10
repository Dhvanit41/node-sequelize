const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const PORT = 8087;
// connection with mysql
const connection = new Sequelize("node_orm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

connection
 .authenticate()
 .then(() => {
  console.info('INFO - Database connected.')
 }).catch(()=>{
   console.info("Error in conncting with database")
 })

app.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Welcome top Home page.",
  });
});

app.listen(PORT, () => {
  console.log("app is runnig.");
});
