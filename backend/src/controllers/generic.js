const generic = (model) => ({
    async getAll(req, res) {
        try {
            const items = await model.find()
            res.status(200).json(items)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async get(req, res) {
        try {
            const item = await model.findById()
            res.status(200).json(item.headers)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async create(req, res) {
        try {
            const item = await model.create(req.body)
            res.status(201).json(item)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async update(req, res) {
        try {
            const item = await model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(item)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async delete(req, res) {
        try {
            await model.findByIdAndDelete(req.params.id)
            res.status(200).json({ message: "deleted" })
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    }
})

module.exports = generic