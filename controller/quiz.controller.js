
const Quiz = require("../model/quiz.model")


exports.create = async (req,res) =>{

    const quizObj = {
        question : req.body.question,
        optionA : req.body.optionA,
        optionB : req.body.optionB,
        optionC : req.body.optionC,
        optionD : req.body.optionD,
        answer : req.body.answer
    }

try{

    const quiz = await Quiz.create(quizObj)
    return res.status(200).send(quiz)
}catch(err){
    console.log("Error while creating quiz",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}

exports.takingQuiz = async  (req,res) =>{

    try{
    const quiz = await Quiz.findOne({_id:req.params.id})
    if(quiz.answer == req.body.optionA || quiz.answer == req.body.optionB || quiz.answer == req.body.optionC || quiz.answer == req.body.optionD){
        quiz.point = 1
        await quiz.save()
    }else{
        quiz.point = 0;
        await quiz.save()
    }

    return res.status(200).send({
        message : "Quiz saved successfully"
    })
}catch(err){
    console.log("Error while taking quiz",err);
    return res.status(500).send({
        message : "Internal server error"
    })
}
}


exports.findAll = async (req,res) =>{

    try{
    const quiz = await Quiz.findAll({});
    return res.status(200).send(quiz)
    }catch(err){
        console.log("Error while finding all quiz",err);
        return res.status(500).send({
            message : "Internal server error"
        })
    }

}