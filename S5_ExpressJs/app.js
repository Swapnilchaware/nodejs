const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const path = require('path')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next) => {
    res.sendFile(path.join(__dirname,'views','page-not-found.html'))
})


app.listen(3000);