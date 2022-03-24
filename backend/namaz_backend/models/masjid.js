const mongoose=require('mongoose')

const NamazSchema=mongoose.Schema({
  
    masjidName:{ type:String, required:true},
    address:{type:String},
    long:{type:String},
    lati:{type:String},
    place_id:{type:String},
    fajar:{type:String},
    zuhar:{type:String},
    asar:{type:String},
    magrib:{type:String},
    isha:{type:String},
    updated_at: { type: Date, default: Date.now },
   })

   module.exports=mongoose.model('Namaz',NamazSchema)