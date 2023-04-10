const scoreController = require("../controller/score.controller");


module.exports = (app) =>{

    app.post("/quiz/api/score",scoreController.totalScore)
}