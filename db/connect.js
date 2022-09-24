require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = () => {
      console.log(process.env.MONGOURI)
      return mongoose.connect('mongodb+srv://lwin596:WBDJBBmwtsVNtdW6@louiscluster.gs4lrwo.mongodb.net/myStoreAPI?retryWrites=true&w=majority').then(()=>{console.log('connected to database')})
}




module.exports = connectDB