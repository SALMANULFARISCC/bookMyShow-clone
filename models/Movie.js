const mongoose = require('mongoose')
let movieschema = new mongoose.Schema({id:String,name:String,duration:String,genre:String,image:String})
module.exports=mongoose.model('Movies',movieschema)
