const express = require('express')
const router = express.Router()

const{getAllProducts, createProduct, getSingleProduct, deleteProduct} = require('../controllers/productControllers')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getSingleProduct).delete(deleteProduct)

module.exports = router