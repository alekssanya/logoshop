const express = require('express')
const router = express.Router()
const user = require("../controllers/user")

router.post('/login', user.login)
router.post('/signup', user.signUp)
router.post('/logout', user.logout)
router.get('/refresh', user.refresh)

module.exports = router