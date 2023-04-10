const mongoose = require("mongoose")


const Quiz = new mongoose.Schema({

    question : {
        type : String,
        required : true
    },
    optionA:{
        type : String
    },
    optionB:{
        type : String
    },
    optionC:{
        type : String
    },
    optionD:{
        type : String
    },
    answer: {
        type : String,
        required : true
    },
    point:{
        type : Number,
        default : 0
    }
},{versionKey:false})


module.exports = mongoose.model("quiz",Quiz)