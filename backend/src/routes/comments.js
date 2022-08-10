const express = require('express')
const router = express.Router()
const comments = require("../controllers/comments")

router.get('/', comments.getAll)
router.get('/:id', comments.get)
router.post('/', comments.create)
router.put('/:id', comments.update)
router.delete('/:id', comments.delete)

module.exports = router