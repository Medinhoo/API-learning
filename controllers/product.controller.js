const Product = require('../models/product.model.js')

const getProducts = async (req, res) => {
    try {
       const products = await Product.find({}) 
       res.status(200, res.send(products))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
       res.status(200, res.send(product))
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const postProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200, res.send(product))
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const updateProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if(!product){
            return res.status(404).json({message : "User not found"})
        }

        const updatedProduct = await Product.findById(id);

        res.status(200, res.send(updatedProduct))

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteProductById = async (req, res) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if(!product){
            return res.status(404).json({message : "Product not found"})
        }

        res.status(200, res.send(product.name + " deleted with success"))

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = {
    getProductById,
    getProducts,
    postProduct,
    updateProductById,
    deleteProductById
}
