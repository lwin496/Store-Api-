const product = require('../models/products')
const asyncWrapper = require("../middleware/async");

const getAllProducts = asyncWrapper(async(req, res) =>{ 
      const products = await products.find({})
      res.status(200).json({})
})
const createProduct = asyncWrapper(async(req, res) =>{ 
      
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