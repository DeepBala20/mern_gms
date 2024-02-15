const { configDotenv } = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const GmsUser = require('./models/gmsUser');
const GmsGroce = require('./models/gmsGroce');
mongoose.connect("mongodb+srv://deep:gmsdeep@groceryshopmanagementsy.nqfogrn.mongodb.net/?retryWrites=true&w=majority")
.then(
    ()=>{
        console.log("successfully connected to mongoose...");
        app.use(bodyParser.urlencoded({extended:false}));
        app.use(bodyParser.json());
        app.use(cors());

        //getall user
        app.get('/user',async(req,res)=>{
            users = await GmsUser.find();
            res.send(users);
        });
        
        //getall product
        app.get('/grocery',async(req,res)=>{
            grocery = await GmsGroce.find();
            res.send(grocery);
        });

        //add user
        app.post('/user/add',async(req,res)=>{
            const user = new GmsUser({
                id:req.body.id,
                role:req.body.role,
                username : req.body.username,
                password : req.body.password,
                email:req.body.email,
                mobileno:req.body.mobileno,
                city:req.body.city,
            })
            await user.save()
            res.send(user)
        });

        //add Grocery
        app.post('/grocery/add',async(req,res)=>{
            const grocery = new GmsGroce({
                pid:req.body.pid,
                pname:req.body.pname,
                price:req.body.price,
                category:req.body.category,
                img:req.body.img,
            })
            await grocery.save()
            res.send(grocery)
        })
    
    }
).catch();


app.listen(3333,()=>{
    console.log("server is started on port no. 3333");
})