require('dotenv')
const mongoose = require('mongoose')

const connectDB = () => {
      return mongoose.connect(MONGOURI, {}).then(()=>{console.log('connected to database')})
}