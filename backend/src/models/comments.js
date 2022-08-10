const mongoose = require('mongoose')

const commentsShema = mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    time: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    fullPage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "fullPage",
        required: true
    },

})

module.exports = mongoose.model("Comments", commentsShema)