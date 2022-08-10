const genericApi = require("./generic")
const productModel = require("../models/product")

module.exports = {
    ...genericApi(productModel),
    async getAll(req, res) {
        try {
            let items
            let dbParams = { title: 1, price: 1, image: { '$arrayElemAt': ["$image", 0] },
                             ratingsum: 1, ratingcount: 1, category: 1 }

            if (req.query.skip != undefined && req.query.limit != undefined && req.query.category != undefined) {
                items = await productModel.find({ category: req.query.category }, dbParams)
                                          .limit(Number(req.query.limit))
                                          .skip(Number(req.query.skip))
            }
            else if (req.query.category != undefined) {
                items = await productModel.find({ category: req.query.category }, dbParams)
            } else {
                items = await productModel.find();
            }

            res.status(200).json(items)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async get(req, res) {
        try {
            const arrId = req.params.id.split(',')
            const items = await productModel.find().where('_id').in(arrId).exec();
            res.status(200).json(items)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },

    async create(req, res) {
        try {
            const product = req.body
            product.image = []
            req.files.forEach(element => {
                product.image.push(element.filename)
            })
            const item = await productModel.create(product)
            res.status(201).json(item)
        } catch (error) {
            res.status(400).json({ message: error.message })
        }
    },
}