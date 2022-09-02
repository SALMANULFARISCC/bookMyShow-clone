const Theaters = require("../models/Theater")




exports.addtheater =async(req,res)=>{
    let {name,location,seats,image} = req.body
    await Theaters.create({id:Date.now(),name:name,location:location,seats:seats,image:image})

    res.redirect('/')

}

exports.theaterList = async(req,res)=>{
    let theaters = await  Theaters.find()
    res.render('theaterList',{theaters})
}