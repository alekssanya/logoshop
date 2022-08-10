import Product from '../services/products'

const prod = new Product

export default {
    state: {
        product: 0,
        products: {}
    },

    mutations: {
        setProduct(state, product) {
            state.product = product
        },
        setProducts(state, products) {
            state.products = products
        },
    },

    actions: {
        async fetchProduct(ctx, id) {
            try {
                const product = await prod.get(id)
                ctx.commit("setProduct", product[0])
            } catch (error) {
                console.log(error)
            }
        },
        async fetchProducts(ctx, param) {
            try {
                const products = await prod.getAll(param)
                ctx.commit("setProducts", products)
            } catch (error) {
                console.log(error)
            }
        },
    },

    getters: {
        getProduct: (state) => state.product,
        getProducts: (state) => state.products,
    }

}