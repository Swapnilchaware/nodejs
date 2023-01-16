const express = require('express')
const router = express.Router();
const path = require('path')
router.get('/add-product', (req,res,next) => {
    res.sendFile(path.join(__dirname,'../','views','add-product.html'))
})
 
router.post('/product', (req,res,next) => {
     
     const {name} = req.body;
     console.log(name);
     res.redirect('/shop');
     
})

module.exports = router;