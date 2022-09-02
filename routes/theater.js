const express = require('express')
const { addtheater, theaterList } = require('../controllers/theater')
const router = express.Router()


router
    .route('/admin/add')
    .get((req,res)=>{
        return res.render('addTheater')
    })
    .post(addtheater)
router
    .route('/view')
    .get(theaterList)


module.exports = router