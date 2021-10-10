const express = require("express");
const Sequelize = require("sequelize");

const app = express();
const PORT = 8087;
// connection with mysql
const connection = new Sequelize("node_orm", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const user = connection.define("tbl_users",{
  id:{
    type:Sequelize.INTEGER,
    allowNull :false,
    primaryKey:true,
    autoIncrement:true
  },
  name:{
    type:Sequelize.STRING,
    allowNull:false
  },
  email:{
    type:Sequelize.STRING,
  },
  rollNo:{
    type:Sequelize.INTEGER,
  },
  status:{
    type:Sequelize.ENUM("1","0"),
    default:"1"
  }
},{
  modelName:"User"
}
)
connection.sync()

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
