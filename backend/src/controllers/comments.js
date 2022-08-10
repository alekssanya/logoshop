const genericApi = require("./generic")
const commentsModel = require("../models/comments")

module.exports = {
    ...genericApi(commentsModel),
}