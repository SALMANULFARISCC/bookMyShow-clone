const mongoose = require('mongoose')


let userschema = new mongoose.Schema({id:String,username:String,email:String,password:String})
module.exports=mongoose.model('Users',userschema)
