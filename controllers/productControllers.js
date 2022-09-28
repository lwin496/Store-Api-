const product = require('../models/products')
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require('../errors/custom-error');

const getAllProducts = asyncWrapper(async(req, res) =>{ 
      const products = await product.find({})
//console.log(products)
      res.status(201).send(products)
})



const createProduct = asyncWrapper(async(req, res) =>{ 
      const products = await product.create(req.body)
      console.log(products)
      res.status(201).json({products})
})


const getSingleProduct = asyncWrapper(async(req, res) =>{ 
      // const product = await.find({})
      // res.status(200).json({})
      const {id: productID} = req.params
      const product = await product.findOne({_id: productID})
      if(!product){ 
            return next(createCustomError(`No product with id : ${productID}, 404`))
      }
      res.status(200).json({product})
 })


const deleteProduct = asyncWrapper(async(req, res) =>{ 
      const {id: productID} = req.params
      const product = await product.findOneAndDelete({_id: productID})
      if(!product){ 
            return next(createCustomError(`No product with id : ${productID}`, 404))
      }
      res.status(200).json({product})
})

const updateProduct = asyncWrapper(async(req, res) =>{ 
     const {id: productID} = req.params
     const product = await product.findOneAndUpdate({id: productID}, req.body, { 
      new: true,
      runValidators: true,
     })
     if(!product) { 
      return next(createCustomError(`No prodcut with id: ${productID}`,404))
     }
     res.status(200).json({product})
})





module.exports = {getAllProducts, createProduct, getSingleProduct, deleteProduct,updateProduct}