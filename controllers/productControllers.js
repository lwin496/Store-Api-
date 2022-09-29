const product = require('../models/products')
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require('../errors/custom-error');

const getAllProducts = asyncWrapper(async(req, res) =>{ 
      const items = await product.find({})
//console.log(products)
      res.status(201).send(items)
})



const createProduct = asyncWrapper(async(req, res) =>{ 
      const item = await product.create(req.body)
      console.log(item)
      res.status(201).json({item})
})


const getSingleProduct = asyncWrapper(async(req, res) =>{ 
      // const product = await.find({})
      // res.status(200).json({})
      
      const {id: productID} = req.params
      console.log({id: productID})
      const item = await product.findOne({_id: productID})
      if(!item){ 
            return next(createCustomError(`No product with id : ${productID}, 404`))
      }
      res.status(200).json({item})
 })


const deleteProduct = asyncWrapper(async(req, res) =>{ 
      const {id: productID} = req.params
      const item = await product.findOneAndDelete({_id: productID})
      if(!item){ 
            return next(createCustomError(`No product with id : ${productID}`, 404))
      }
      res.status(200).json({item})
})

const updateProduct = asyncWrapper(async(req, res) =>{ 
     const {id: productID} = req.params
     const item = await product.findOneAndUpdate({id: productID}, req.body, { 
      new: true,
      runValidators: true,
     })
     if(!item) { 
      return next(createCustomError(`No prodcut with id: ${productID}`,404))
     }
     res.status(200).json({item})
})





module.exports = {getAllProducts, createProduct, getSingleProduct, deleteProduct,updateProduct}