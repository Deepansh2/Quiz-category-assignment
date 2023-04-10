

const Category = require("../model/category.model")
const Score = require("../model/score.model");

exports.totalScore = async (req,res) =>{

    try{
    const score = 0
    const category = await Category.findOne({_id:req.body.categoryId})
    category.quiz.forEach(async(quiz) =>{
        const ans = await findOne({_id:quiz})
        if(ans.point == 1){
            score = score+1
        }
    })

    const scoreObj = {
        totalScore : category.quiz.length,
        scored : score
    }

    const sc = await Score.create(scoreObj)
    return res.status(200).send(sc)
}catch(err){
    console.log("Error while creating score",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}