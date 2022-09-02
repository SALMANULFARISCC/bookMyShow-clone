const express = require('express')
const { addmovies, movieview } = require('../controllers/movie')
const { isLoggedin } = require('../middlewares/isLoggedin')
const router = express.Router()

router
    .route('/register')
    .get((req,res)=>{
        res.render('movieRegister')
    })
    .post(addmovies)

router
    .route('/:a')
    .get(movieview)





module.exports = router