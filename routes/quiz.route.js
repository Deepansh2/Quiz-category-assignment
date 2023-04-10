const quizController = require("../controller/quiz.controller");

module.exports = (app) =>{

    app.post("/quiz/api/quiz",quizController.create);
    app.get("/quiz/api/quiz's",quizController.findAll)
    app.put("/quiz/api/:id",quizController.takingQuiz)
}