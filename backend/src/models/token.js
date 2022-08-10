const mongoose = require('mongoose')

const tokenShema = mongoose.Schema({
    refreshToken: {
        type: String,
        default: ""
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
})

module.exports = mongoose.model("Token", tokenShema)