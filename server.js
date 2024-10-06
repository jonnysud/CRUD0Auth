const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongodb = require('./data/databases');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE,OPTIONS');
    next();
});

app.use('/', require('./routes'));

mongodb.initDb((err=>{
    if(err){
        console.log(err);
    }else{
        app.listen(port, ()=>{
            console.log(`Running on port ${port}`);
        });
    };
}));