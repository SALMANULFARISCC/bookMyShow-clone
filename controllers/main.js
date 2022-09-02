const Movie = require('../models/Movie')
const Theater = require('../models/Theater')
let Users = require('../models/User')

const cookieToken = require('../utils/cookieToken')


exports.home=async(req,res)=>{
    let loggedin = req.cookies
    let movies = await Movie.find()
    let theaters = await Theater.find()

    res.render('home',{loggedin,movies,theaters})

}
exports.admin=async(req,res)=>{
    let loggedin = req.cookies
    let movies = await Movie.find()


    res.render('admin',{loggedin,movies})

}

exports.login=async(req,res)=>{
    let {email,password} = req.body
    let user = await Users.findOne({email:email})
    console.log(user)
    if(!user){
       return res.redirect('/login')
    }
    if(user.password!=password){
        return res.redirect('/login')
    }
    cookieToken(user,res)

}

exports.logout=async(req,res,next)=>{
    res.cookie('token',null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })
    res.status(200).redirect('/')

}

exports.register=async(req,res)=>{
    let {username,email,password} = req.body
    await Users.create({id:Date.now(),username:username,email:email,password:password})
    res.redirect('/')
}
exports.single=async(req,res)=>{
    res.render('singleMovie')

}