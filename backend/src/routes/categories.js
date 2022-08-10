const express = require('express')
const router = express.Router()
const category = require("../controllers/category")
const checkJWTSign = require("../middlewares/jwtcheck")

router.get('/', checkJWTSign, category.getAll)
router.get('/:id', category.get)
router.post('/', category.create)
router.put('/:id', category.update)
router.delete('/:id', category.delete)

module.exports = router