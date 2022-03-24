const mongoose = require("mongoose");
const express = require("express");
const app = express();
const request = require("request");
const bodyParser = require("body-parser");
const requestPromise = require("request-promise");
const { response } = require("express");
app.use(bodyParser.json());
require("./models/masjid");
require("./models/Masjids")
require("./models/timing");
const MasjidModel = mongoose.model("Namaz")
const MosqueModel=mongoose.model("Masjid")
const TimeModel=mongoose.model("Timing")
const joiValidation=require("./commons/joiValidation/joi.validation");
const { vary } = require("express/lib/response");


mongoose
    .connect(
        "mongodb+srv://bilal110:bilal123@cluster0.p2nsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => {
        console.log("Connected to MongoDB");
        server = app.listen(3000, () => {
            console.log("Listening to port: 3000");
        });
    });


app.post("/testing", async (req, res) => {
var response1=[]
    const points = ["24.772030228010095,67.06893579666125", "24.791401616267382,67.07187356237439", "24.80129713343704,67.05299081027412", "24.822488024960663,67.0511025350641", "24.81640833853453,67.01987562811209", "24.923438244116635,67.12946221468509", "24.898280648960988,67.0995954006996", "24.934412896797483,67.0741899010189", "25.000104538943642,67.10796767030064", "24.94278987687176,66.98382715071818", "24.964515013768434,66.94543020191608", "24.837774737001524,67.05224878571617", "24.89801878145341,67.20728008575286", "24.87654383805914,67.13279577400338", "24.947680388057023,67.16741329706471", "24.9181044368177,67.01944118515166", "24.966667519017086,66.95764308736896", "24.817804790446363,67.15402370926957", "24.88353828583065,67.03317409582783", "24.885718419119165,67.07643276427574"]
    for(i in points){
     optionMasjid = {
        method: "GET",
        uri: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=karachi+city+mosque+place+of+worship+masjid&location="+points[i]+"&language=en&key=AIzaSyDhJVSeagElyRprctPHFGaQDvEuAFyerYA",
        json: true
    }
    masjidGet = await requestPromise(optionMasjid)
    for (j in masjidGet.results) {
         masjid = new MasjidModel({

            masjidName: masjidGet.results[j].name,
            address: masjidGet.results[j].formatted_address,
            long: masjidGet.results[j].geometry.location.lng,
            lati: masjidGet.results[j].geometry.location.lat,
            place_id: masjidGet.results[j].place_id

        })
        masjid.save();
    }
}

    res.send("all done") 

})

app.get("/getAllMasjid", async (req, res) => {

    const masjids = await MasjidModel.find({})
    res.send(masjids)
})

app.get("/m", async (req, res) => {

    const points = ["24.772030228010095,67.06893579666125", "24.791401616267382,67.07187356237439", "24.80129713343704,67.05299081027412", "24.822488024960663,67.0511025350641", "24.81640833853453,67.01987562811209", "24.923438244116635,67.12946221468509", "24.898280648960988,67.0995954006996", "24.934412896797483,67.0741899010189", "25.000104538943642,67.10796767030064", "24.94278987687176,66.98382715071818", "24.964515013768434,66.94543020191608", "24.837774737001524,67.05224878571617", "24.89801878145341,67.20728008575286", "24.87654383805914,67.13279577400338", "24.947680388057023,67.16741329706471", "24.9181044368177,67.01944118515166", "24.966667519017086,66.95764308736896", "24.817804790446363,67.15402370926957", "24.88353828583065,67.03317409582783", "24.885718419119165,67.07643276427574"]
    for(i in points){
    optionMasjid = {
        method: "GET",
        uri: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=karachi+city+mosque+place+of+worship+masjid&location="+points[i]+"&language=en&key=AIzaSyDhJVSeagElyRprctPHFGaQDvEuAFyerYA",
        json: true
    }

    console.log(optionMasjid.uri)
}
})

// app.get("/GetMasjid", async (req, res) => {

//     const schema = [
//         {
//             key:"longitude",
//             type:"string"
//         },
//         {
//             key:"latitude",
//             type:"string"
//         }
//     ]
//     const reqBody = req.body
//     const validate = await joiValidation(schema, reqBody)
//     if (validate.error) {
//       throw {
//         code: 400,
//         message: validate.error.details[0].message.replace(/['"]/g, ''),
//         name: "request-validation-error"
//       }
//     }

//     const masjid=await MasjidModel.find({long:reqBody.longitude,lati:reqBody.latitude})
//     res.send(masjid)
// })


//===============

app.post("/Post", async (req, res) => {
    try{
    var response1=[]
        const points = ["24.932837629237195, 67.09348372459928","24.929392391561436, 67.09832593389216","24.92739951404412, 67.08920023176327","24.930811030502234, 67.08771032121162"]
        for(i in points){
         optionMasjid = {
            method: "GET",
            uri: "https://maps.googleapis.com/maps/api/place/textsearch/json?query=karachi+city+mosque+place+of+worship+masjid&location="+points[i]+"&language=en&key=AIzaSyDhJVSeagElyRprctPHFGaQDvEuAFyerYA",
            json: true
        }
        masjidGet = await requestPromise(optionMasjid)
        
        for (j in masjidGet.results) {

            const exists=await MosqueModel.findOne({place_id:masjidGet.results[j].place_id})
            if(!exists){
             masjid = new MosqueModel({
    
                masjidName: masjidGet.results[j].name,
                address: masjidGet.results[j].formatted_address,
                place_id: masjidGet.results[j].place_id,
                long: masjidGet.results[j].geometry.location.lng,
                lati: masjidGet.results[j].geometry.location.lat,
    
            })
            masjid.save();

            timing= new TimeModel({ 
                place_id:masjidGet.results[j].place_id
            })
            timing.save();

            }
        }
    }
        res.send("all done") 
}catch(error){
    console.log(error)
}
    })      




app.get("/GetMasjid", async (req, res) => {
    try{
        const schema = [
            {
                key:"place_id",
                type:"string"
            }
        ]
        const reqBody = req.body
        const validate = await joiValidation(schema, reqBody)
        if (validate.error) {
          throw {
            code: 400,
            message: validate.error.details[0].message.replace(/['"]/g, ''),
            name: "request-validation-error"
          }
        }
    
        const masjid=await MosqueModel.aggregate([
            {$match:{place_id:reqBody.place_id}},
            {
                $lookup:
                {
                  from: "timings",
                  localField: "place_id",
                  foreignField: "place_id",
                  as: "Jamat-Timings"
                }
            },
            {$unwind:"$Jamat-Timings"}
        ])
        res.send(masjid)
    }catch(error){
        console.log(error)
    }
    })