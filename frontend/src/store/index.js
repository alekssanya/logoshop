import Vuex from "vuex"
import product from "./products"
import category from "./category"
import cart from "./cart"
import user from "./user.js"

const store = new Vuex.Store({
    modules: {
        product,
        category,
        cart,
        user
    }
})

export default store