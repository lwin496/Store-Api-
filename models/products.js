const mongoose = require('mongoose')

// const {Schema} = mongoose; 

const productsSchema = new mongoose.Schema({ 
      name:{
            type: String,
            required: [true, 'Provide name of devilfruit.'],
      },
      power:{ 
            type: String, 
            required: [true, 'Provide details of the devilfruits power.'], 
      }, 
      availabilty: { 
            type: Boolean, 
            required: [true, 'Provide details if the devilfruit is in this world.']
      }
})



module.exports = mongoose.model('products', productsSchema)