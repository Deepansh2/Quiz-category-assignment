const mongoose = require("mongoose");

const score = new mongoose.Schema({

    totalScore : {
        type : Number,
        required: true
    },
    scored : {
        type : Number,
        required:true
    },
    category : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "category"
    }
})

module.exports = mongoose.model("score",score)