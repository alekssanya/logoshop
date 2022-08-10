import User from "../services/user"
const user = new User

export default {
    state: {
        userName: "",
        role: "",
        accessToken: "",
    },

    mutations: {
        setData(state, res) {
            state.userName = res.name
            localStorage.setItem("userName", state.userName)
            state.accessToken = res.accessToken
            localStorage.setItem("token", state.accessToken)
            state.role = res.role
            localStorage.setItem("role", state.role)
        },

        setSession(state) {
            let temp =  localStorage.getItem("userName")
            temp === null ? state.userName = "" : state.userName = temp
            temp = localStorage.getItem("role")
            temp === null ? state.role = "" : state.role = temp
            temp = localStorage.getItem("token")
            temp === null ? state.accessToken = "" : state.accessToken = temp
        },

        deleteData(state) {
            localStorage.removeItem('userName')
            localStorage.removeItem('role')
            localStorage.removeItem('token')
            state.userName = ""
            state.accessToken = ""
            state.role = ""
        }
    },

    actions: {
        async login(ctx, data) {
            try {
                const res = await user.login(data)
                ctx.commit("setData", res)
            } catch (error) {
                console.log(error)
            }

        },

        async checkAuth(ctx, data) {
            try {
                const res = await user.login(data)
                ctx.commit("setData", res)
            } catch (error) {
                console.log(error)
            }

        },

        async signup(ctx, data) {
            try {
                const res = await user.signup(data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        },

        async logout(ctx) {
            try {
                await user.logout()
                ctx.commit("deleteData")
            } catch (error) {
                console.log(error)
            }
        },


        restoreSession(ctx) {
            ctx.commit("setSession")
        }
    },

    getters: {
        getName: (state) => state.userName,
        getRole: (state) => state.role,
    }
}