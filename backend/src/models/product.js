const mongoose = require('mongoose')

const productShema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: [{
        type: String,
        required: true
    }],
    ratingsum: {
        type: Number,
        default: 0
    },
    ratingcount: {
        type: Number,
        default: 0
    },
    brand: {
        type: String,
        required: true
    },
    availability: {
        type: Number,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comments"
    }],
    category: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model("Product", productShema)