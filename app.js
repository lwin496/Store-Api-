const express = require('express')
const app = express()
const connectDB = require('./db/connect')
//const products = require('./routes/productRoutes')
const PORT = 5000; 

app.use(express.static('./public'))
app.use(express.json())

// middleware
const notFound = require('./middleware/404')
const errorHandlerMiddleware = require('./middleware/error-handler')
const{getAllProducts, createProduct, getSingleProduct, deleteProduct, updateProduct} = require('./controllers/productControllers')


// routes
//app.use('/', products)
app.use(errorHandlerMiddleware)
//app.use(notFound)

app.get("/api/products",getAllProducts)
app.post("/api/products",createProduct)

app.get("/api/products/:id",getSingleProduct)
app.patch("/api/products/:id",updateProduct)
app.delete("/api/products/:id",deleteProduct)

const serverInitialization = async () => {
      try { 
            await connectDB() 
            app.listen(PORT, console.log(`Server is running on port ${PORT}`))
      } catch(error){ 
            console.log(error)
      }
}

serverInitialization()