const express = require('express');
const router = express.Router();

router.get('/admin1',(req,res,next) => {
    res.send('hiiii');
})

module.exports = router;