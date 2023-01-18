const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const userRoutes = require('./routes/user')


const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','views');
app.use(express.static(path.join(__dirname,'public')));

app.use(userRoutes.routes)

app.listen(3003);