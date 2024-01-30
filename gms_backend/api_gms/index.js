const { configDotenv } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const GmsUser = require('./models/gmsUser')
configDotenv();
mongoose.connect(process.env.MONGO)
.then(
    ()=>{
        console.log("successfully connected to mongoose...");
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json())
        app.use(cors());

        //getall
        app.get('/user',async(req,res)=>{
            users = await GmsUser.find();
            res.send(users);
        })

        //add
        app.post('/user/add',async(req,res)=>{
            const user = new GmsUser({
                usename : req.body.username,
                password : req.body.password,
                email:req.body.email,
                dob:req.body.dob,
                mobileno:Number,
                city:String,
            })
        })
    
    }
).catch();


app.listen(3333,()=>{
    console.log("server is started on port no. 3333");
})