const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req,res,next)=>{
    const filePath = path.join(__dirname, 'views', '404.html');
    
    res.status(404).sendFile(filePath);
});


app.listen(3000);