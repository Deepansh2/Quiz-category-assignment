const mongoose = require("mongoose");

const category = new mongoose.Schema({

    categoryName : {
        type : String,
        required: true
    },
    quiz : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "quiz"
    }
})

module.exports = mongoose.model("category",category)