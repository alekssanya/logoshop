import request from "./generic";

const productsUrl = "products"

class Product {
    async getAll(param) {
        try {
            const items = await request("get", productsUrl + "?category=" + param.category + "&limit=" + param.limit + "&skip=" + param.skip)
            return items.data
        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const item = await request("get", `${productsUrl}/${id}`)
            return item.data
        } catch (error) {
            console.log(error)
        }
    }
}
export default Product