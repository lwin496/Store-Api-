const mongoose = require('mongoose')

const productsSchema = new products.Schema({
      name:{
            type: String,
            required: [true, 'Provide name of devilfruit.'],
            trim: true,
      },
      power:{ 
            type: String, 
            required: [true, 'Provide details of the devilfruits power.'], 
            trim : true,
      },
      availabilty: { 
            type: Boolean, 
            required: [true, 'Provide details if the devilfruit is in this world.']
      }
})


module.exports = products.mdel('name','power','availabilty')