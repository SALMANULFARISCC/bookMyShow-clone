const mongoose = require('mongoose')

let theaterschema = new mongoose.Schema({id:String,name:String,location:String,seats:String,image:String})
module.exports=mongoose.model('Theaters',theaterschema)
