import request from "./generic";

const userUrl = "users"

class User {
    async login(data) {
        try {
            const user = await request("post", userUrl + "/login", data)
            return user.data
        } catch (error) {
            console.log(error)
        }
    }

    async signup(data) {
        try {
            const user = await request("post", userUrl + "/signup", data)
            return user.data
        } catch (error) {
            console.log(error)
        }
    }

    async checkAuth(data) {
        try {
            const res = await request("post", userUrl + "/refresh", data)
            return res.data
        } catch (error) {
            console.log(error)
        }
    }

    async logout() {
        try {
            await request("post", userUrl + "/logout")
        } catch (error) {
            console.log(error)
        }
    }
}

export default User