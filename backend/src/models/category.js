const mongoose = require('mongoose')

const categoryShema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
})

module.exports = mongoose.model("Category", categoryShema)