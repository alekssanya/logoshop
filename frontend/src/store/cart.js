import Product from '../services/products'

const prod = new Product

export default {
    state: {
        cart: [],
        productsInCart: {},
        productsInQuickCart: []
    },

    mutations: {
        pushProduct(state, product) {
            state.cart.push(product.id)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            state.productsInQuickCart.push(product)
            localStorage.setItem("productsInQuickCart", JSON.stringify(state.productsInQuickCart))
        },

        deleteProduct(state, productId) {
            state.cart.splice(state.cart.indexOf(productId), 1)
            localStorage.setItem("cart", JSON.stringify(state.cart))
            state.productsInQuickCart.splice(state.productsInQuickCart.findIndex(function (val) {
                return val.id === productId;
            }), 1)
            localStorage.setItem("productsInQuickCart", JSON.stringify(state.productsInQuickCart))
        },

        addProductCards(state, product) {
            state.productsInCart = product
            
        },

        restoreState(state) {
            let temp = JSON.parse(localStorage.getItem("cart"))
            temp === null ? state.cart = [] : state.cart = temp
            temp = JSON.parse(localStorage.getItem("productsInQuickCart"))
            temp === null ? state.productsInQuickCart = [] : state.productsInQuickCart = temp
        }
    },

    actions: {
        addProductInCart(ctx, productId) {
            ctx.commit("pushProduct", productId)
        },

        deleteProductFromCart(ctx, productId) {
            ctx.commit("deleteProduct", productId)
        },

        async fetchProductForCart(ctx, productId) {
            try {
                const products = await prod.get(productId)
                ctx.commit("addProductCards", products)
            } catch (error) {
                console.log(error)
            }
        },

        restoreCart(ctx) {
            ctx.commit("restoreState")
        }
    },

    getters: {
        getProductsId: (state) => state.cart,
        getProductsInCart: (state) => state.productsInCart,
        getCartCounter: (state) => state.cart.length,
        getProductsInQuickCart: (state) => state.productsInQuickCart
    }

}
