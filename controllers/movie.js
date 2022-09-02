let Movies = require('../models/Movie')


exports.addmovies=async(req,res)=>{
    let {name,duration,genre,image} = req.body
    await Movies.create({id:Date.now(),name:name,duration:duration,genre:genre,image:image})

    res.redirect('/')
}

exports.movieview=async(req,res)=>{

    let name = req.params.a
    console.log(name)
    let movie = await Movies.findOne({name:name})
    console.log(movie)

    res.render('singleMovie',{movie})

}