const express = require('express');
const router = express.Router();

const user = [];

router.get('/', (req,res,next) => {
    res.render('list-user',{
        user:user
    });
})

router.get('/add-user',(req,res,next) => {
    res.render('add-user')
})

router.post('/add-user', (req,res,next) => {
    let name = req.body.name;
    user.push(name);
    res.redirect('/')
})

exports.routes = router;