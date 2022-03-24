const mongoose=require('mongoose')

const masjidSchema=mongoose.Schema({
  
    masjidName:{ type:String, required:true},
    address:{type:String},
    place_id:{type:String},
    long:{type:String},
    lati:{type:String},
    updated_at: { type: Date, default: Date.now },
   })

   module.exports=mongoose.model('Masjid',masjidSchema)