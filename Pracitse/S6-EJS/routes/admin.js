const express = require('express');
const router = express.Router();

const product = [];

router.get('/add-product', (req,res,next) => {
    res.render('add-product')
})

router.post('/add-product', (req,res,next) => {
    console.log(req.body.product);
    product.push(req.body.product);
    res.redirect('/');
})

// exports.routes = router;
// exports.product = product;

// module.exports = router;
// module.exports = product;

module.exports = {
    router : router,
    product : product
}
// /admin/add-product