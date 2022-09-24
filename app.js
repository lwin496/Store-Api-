const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const PORT = 5000; 

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
      
})


const serverInitialization = async () => {
      try { 
            await connectDB() 
            app.listen(PORT, console.log(`Server is running on port ${PORT}`))
      } catch(error){ 
            console.log(error)
      }
}

serverInitialization()