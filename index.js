require('dotenv').config()
const express = require('express')
const app = express()

const cookieParser=require('cookie-parser')
const connectDb=require('./config/database')
connectDb()

app.set('view engine','ejs')
app.use(express.static('static'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


let homeRoute=require('./routes/home')
app.use('/',homeRoute)
let moviesRoute=require('./routes/movie')
app.use('/movie',moviesRoute)
let theaterRoute=require('./routes/theater')
app.use('/theater',theaterRoute)


app.listen(process.env.PORT,'',()=>{
    console.log("started");
})