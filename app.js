const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const DB = 'mongodb+srv://Ronak:GMAMR@cluster0.jxxzuw1.mongodb.net/first?retryWrites=true&w=majority';

mongoose.connect(DB,{
    useNewUrlParser : true,
}).then(()=>{
    console.log('Connectoin Succ');
    
    const app = express();

    app.use(bodyParser.urlencoded({extended:false}))

    app.get('/',(req,res)=>{
        res.send('Hello by Ronak');
    })

    app.listen(3000,()=>{
        console.log("server Started");
    });
}).catch((err)=>console.log('Not connect'));

