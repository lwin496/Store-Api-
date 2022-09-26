const express = require('express')
const router = express.Router()

const{getAllProducts, createProduct, getSingleProduct, deleteProduct, updateProduct} = require('../controllers/productControllers')

router.route('/api/products ').get(getAllProducts).post(createProduct)
router.route("/chungus").get(getAllProducts)
router.route('/:id').get(getSingleProduct).patch(updateProduct).delete(deleteProduct)

module.exports = router