const express = require('express');

const router = express.Router();

const adminRoutes = require('./admin')
const product = adminRoutes.product;

router.get('/',(req,res,next) => {
    res.render('shop',{
        product : product
    })
})


//exports.routers = router;

module.exports = router;