const express = require("express")
const router = express.Router()
const {getProducts, getProductById, postProduct, updateProductById, deleteProductById} = require('../controllers/product.controller.js')

router.get('/', getProducts)

router.get('/:id', getProductById)

router.post('/', postProduct)

router.put('/:id' , updateProductById)

router.delete('/:id', deleteProductById)

module.exports = router;