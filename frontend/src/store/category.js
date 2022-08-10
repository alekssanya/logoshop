import Categories from "../services/categories"

const cat = new Categories

export default {
    state: {
        categories: {},
    },

    mutations: {
        setCategories(state, categories) {
            state.categories = categories
        },
    },

    actions: {
        async fetchCategories(ctx) {
            try {
                const categories = await cat.getAll()
                ctx.commit("setCategories", categories)
            } catch (error) {
                console.log(error)
            }
        },

    },

    getters: {
        getCategories: (state) => state.categories
    }

}