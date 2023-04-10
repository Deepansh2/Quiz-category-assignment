const Category = require("../model/category.model")


exports.create = async (req,res) =>{

    const categoryObj = {
        categoryName : req.body.question,
        quiz : req.body.quiz
    }

try{
    const category = await Category.create(categoryObj)
    return res.status(200).send(category)
}catch(err){
    console.log("Error while creating category",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}