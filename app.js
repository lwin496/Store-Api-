const express = require('express')
const app = express()

const PORT = 5000; 

app.use(express.static('public'))
app.use(express.json())


app.get('/', (req, res) => {
      
})

app.listen(PORT, () => {
      console.log(`App is listening on ${PORT}`)
})