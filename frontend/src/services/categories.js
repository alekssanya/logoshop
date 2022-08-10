import request from "./generic";

const categoryUrl = "categories"

class Category {
    async getAll() {
        try {
            const items = await request("get", categoryUrl)
            return items.data
        } catch (error) {
            console.log(error)
        }
    }

    async get(id) {
        try {
            const item = await request("get", `${categoryUrl}/${id}`)
            return item.data
        } catch (error) {
            console.log(error)
        }
    }
}

export default Category