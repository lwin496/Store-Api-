const express = require('express')
const router = express.Router()

const{getAllProducts, createProduct, getSingleProduct, deleteProduct, updateProduct} = require('../controllers/productControllers')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getSingleProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router