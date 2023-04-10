const serverConfig = require("./config/server.config")
const dbConfig = require("./config/db.config")
const bodyParser = require("body-parser")
const express = require("express");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

const mongoose = require("mongoose")

mongoose.connect(dbConfig.DB_URL)

const db = mongoose.connection

db.on("error",()=>{
    console.log("Error while connecting to Mongodb")
})

db.once("open",()=>{
    console.log("Connected to Mongodb")
})


require("./routes/category.route")(app);
require("./routes/quiz.route")(app)
require("./routes/score.route")(app)

app.listen(serverConfig.PORT,()=>{
    console.log("Server Started At Port:",serverConfig.PORT)
})