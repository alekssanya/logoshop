const userModel = require("../models/user")
const tokenModel = require("../models/token")
const TokenService = require("../services/token")
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config()

function checkSearch(obj) {
    if (!obj) {
        return res.status(400).send({
            message: "Login or Password incorrect"
        })
    }
}

function checkSignupSearch(obj, text) {
    if (obj) {
        return res.status(400).send({
            message: text + " is busy"
        })
    }
}

module.exports = {
    async login(req, res) {
        try {
            const tokenService = new TokenService
            const user = await userModel.findOne({ name: req.body.userName })
            checkSearch(user)

            const password = await bcrypt.compare(req.body.password, user.password)
            checkSearch(password)

            const tokens = await tokenService.generateTokens({ userId: user._id })

            res.cookie('refreshToken', tokens.refreshToken, {
                maxAge: 3600000 * 24,
                httpOnly: true,
                expire: 10
            })

            return res.status(200).send({
                accessToken: tokens.accessToken,
                name: user.name,
                role: user.role
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async signUp(req, res) {
        try {
            let user = req.body
            checkSignupSearch(await userModel.findOne({ email: req.body.email }), "Email")
            checkSignupSearch(await userModel.findOne({ name: req.body.name }), "Name")
            user.role = "user"
            user.password = await bcrypt.hash(req.body.password, 5)
            await userModel.create(user)
            return res.status(200).send({
                message: "User create"
            })
        } catch (error) {
            res.status(500).send({
                message: error
            })
        }
    },

    async logout(req, res) {
        try {
            const refreshToken = req.headers.cookie.split('=')[1]
            await tokenModel.deleteOne({ refreshToken: refreshToken })
            return res.status(200).send({
                message: "logout"
            })
        } catch (error) {
            res.status(500).json(error)
        }
    },

    async refresh(req, res) {
        try {
            const refreshToken = req.headers.cookie.split('=')[1]
            const token = await tokenModel.findOne({ refreshToken: refreshToken })
            if (token) {
                const tokenService = new TokenService
                console.log("Qweqweqe")
                const oldRefreshToken = jwt.verify(token.refreshToken, process.env.JWT_REFRESH)
                const tokens = await tokenService.generateTokens({ userId: oldRefreshToken.userId })

                res.cookie('refreshToken', tokens.refreshToken, {
                    maxAge: 360000000,
                    httpOnly: true,
                })

                return res.status(200).send({
                    accessToken: tokens.accessToken
                })
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}