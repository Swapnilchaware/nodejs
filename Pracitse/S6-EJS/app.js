const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const adminRoutes1 = require('./routes/admin1')

app.set('view engine','ejs')
app.set('views','views')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes.router)
console.log('in between');
app.use('/admin',adminRoutes1);
console.log('after')
app.use('/',shopRoutes)
console.log('finish')

app.use( ()=> {
    console.log('in console');
} )

app.use( (req,res,next) => {
    res.send('error')
} )
app.listen(3002);

///admin/add-product

