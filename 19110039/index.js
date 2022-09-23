const express = require('express');
const app = express();
const PORT = 5000;

const mygroupReq = require('./routes/routes.mygroup');
const mssvReq = require('./routes/routes.mssv');
const messageReq = require('./routes/routes.message');

app.use(express.json());

app.use((req,res,next)=> {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.use('/', mygroupReq);
app.use('/19110039',mssvReq);
app.set('view engine', 'ejs');
app.use('/message',messageReq);

app.listen(PORT);