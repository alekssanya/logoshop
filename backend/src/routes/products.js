const express = require('express')
const router = express.Router()
const product = require("../controllers/product")
const multer = require('multer')
const jwtcheck = require("../middlewares/jwtcheck")

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './img')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
})

let imgs = multer({
    storage: storage
}).array("image")

router.get('/', product.getAll)
router.get('/:id', product.get)
router.post('/', imgs, product.create)
router.put('/:id', product.update)
router.delete('/:id', product.delete)

module.exports = router