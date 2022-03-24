const mongoose=require('mongoose')

const timeSchema=mongoose.Schema({
  
    place_id:{type:String},
    fajar:{type:String},
    zuhar:{type:String},
    asar:{type:String},
    magrib:{type:String},
    isha:{type:String},
    updated_at: { type: Date, default: Date.now },
   })

   module.exports=mongoose.model('Timing',timeSchema)