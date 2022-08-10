const genericApi = require("./generic")
const categoryModel = require("../models/category")

module.exports = {
    ...genericApi(categoryModel),
}