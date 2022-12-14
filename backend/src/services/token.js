const jwt = require("jsonwebtoken")
const tokenModel = require("../models/token")
require("dotenv").config()

class TokenService {
    async generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS, { expiresIn: "10s" })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH, { expiresIn: "20d" })
        const token = await tokenModel.findOne({ user: payload.userId })
        if (token) {
            await tokenModel.findOneAndUpdate({ user: payload.userId }, {refreshToken: refreshToken})
        } else {
            await tokenModel.create({ user: payload.userId, refreshToken: refreshToken })
        }
        return { accessToken, refreshToken }
    }

    async saveToken(userId, refreshToken) {
        let token = await tokenModel.findOne({ user: userId })
        if (token) {
            token.refreshToken = refreshToken
            return tokenModel.save()
        }

        token = await tokenModel.create({ user: userId, refreshToken: refreshToken })
        return token
    }

    async deleteToken(userId) {
        await tokenModel.deleteOne({ user: userId })
    }
}

module.exports = TokenService