const product = require('../models/products')
const asyncWrapper = require("../middleware/async");

const getAllProducts = asyncWrapper(async(req, res) =>{ 
      const products = await product.find({})
      console.log(products)
      res.status(201).send(products)
})



const createProduct = asyncWrapper(async(req, res) =>{ 
      const products = await product.create(req.body)
      console.log(products)
      res.status(201).send(products)
})


const getSingleProduct = asyncWrapper(async(req, res) =>{ 
      // const product = await.find({})
      // res.status(200).json({})
})


const deleteProduct = asyncWrapper(async(req, res) =>{ 
     
})

const updateProduct = asyncWrapper(async(req, res) =>{ 
     
})





module.exports = {getAllProducts, createProduct, getSingleProduct, deleteProduct,updateProduct}