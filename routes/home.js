const express=require('express')
const { home, single, register, login, logout, admin } = require('../controllers/main')
const router=express.Router()


router
    .route('/')
    .get(home)
router
    .route('/admin')
    .get(admin)
router
    .route('/login')
    .get((req,res)=>{
        res.render('login')
    })
    .post(login)
router
    .route('/logout')
    .get(logout)
router
    .route('/register')
    .get((req,res)=>{
        res.render('register')
    })
    .post(register)
router
    .route('/single')
    .get(single)





module.exports=router
