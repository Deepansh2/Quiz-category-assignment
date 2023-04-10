const categoryController = require("../controller/category.controller")

module.exports = (app) =>{
    app.post("/quiz/api/category",categoryController.create)
}